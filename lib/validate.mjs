// Dependency-free validator for catalog entries (mirrors schema/entry.schema.json).
import { TYPES, CATEGORIES } from './taxonomy.mjs';
import { CLIENT_IDS } from './clients.mjs';

const SLUG = /^[a-z0-9][a-z0-9-]{1,63}$/;
const TAG = /^[a-z0-9][a-z0-9-]{0,31}$/;
// No whitespace, quotes, backticks, $ or other shell metacharacters in URLs.
const HTTPS = /^https:\/\/[A-Za-z0-9._~:/?#@!+,=%-]+$/;
const HEADER_NAME = /^[A-Za-z0-9-]+$/;
const SKILL_SOURCE = /^([A-Za-z0-9][\w.-]*\/[\w.-]+(@[\w.-]+)?|https:\/\/[A-Za-z0-9._~:/?#@+,=%-]+)$/;
const NEWLINE_OR_BACKTICK = /[\r\n`]/;
const SHELL_OPERATORS = /[;&|`$()\\\r\n]/;
const MAX_DESC = 320;
const MAX_ADDS = 180;
const PLACEHOLDER = /^<[A-Z0-9_ -]+>$|^\$\{?[A-Z0-9_]+\}?$/;
const ENV_NAME = /^[A-Z][A-Z0-9_]*$/;

const KEYS = new Set(['id', 'name', 'title', 'url', 'type', 'category', 'featured', 'license', 'tags', 'description',
  'mcp', 'skill', 'native', 'instructions', 'alternatives', 'origin', 'stats']);

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

function text(errs, where, v, max) {
  if (!isObj(v)) return errs.push(`${where}: must be {en, pt}`);
  for (const l of ['en', 'pt']) {
    if (typeof v[l] !== 'string' || !v[l].trim()) errs.push(`${where}.${l}: required`);
    else if (v[l].length > max) errs.push(`${where}.${l}: ${v[l].length} chars > ${max}`);
  }
}

// Env/header values must be placeholders — the catalog never carries secrets.
function secrets(errs, where, obj) {
  if (obj === undefined) return;
  if (!isObj(obj)) return errs.push(`${where}: must be an object`);
  for (const [k, v] of Object.entries(obj)) {
    if (where.endsWith('env') && !ENV_NAME.test(k)) errs.push(`${where}.${k}: env names must be UPPER_SNAKE`);
    if (where.endsWith('headers') && !HEADER_NAME.test(k)) errs.push(`${where}.${k}: invalid header name`);
    if (typeof v !== 'string') errs.push(`${where}.${k}: must be a string`);
    else if (!PLACEHOLDER.test(v) && !/^Bearer <[A-Z0-9_]+>$/.test(v) && v.length > 0)
      errs.push(`${where}.${k}: use a placeholder like <YOUR_TOKEN>, never a real value`);
  }
}

export function validateEntry(e) {
  const errs = [];
  if (!isObj(e)) return ['entry must be a mapping'];
  if (!SLUG.test(e.id ?? '')) errs.push('id: lowercase slug required');
  for (const k of Object.keys(e)) if (!KEYS.has(k)) errs.push(`${k}: unknown field`);
  if (typeof e.name !== 'string' || !e.name.trim()) errs.push('name: required');
  if (e.title !== undefined && (typeof e.title !== 'string' || e.title.length > 60)) errs.push('title: string ≤ 60 chars');
  if (e.origin !== undefined && (!isObj(e.origin) || typeof e.origin.list !== 'string')) errs.push('origin.list: required when origin is set');
  if (e.stats !== undefined && (!isObj(e.stats) || Object.values(e.stats).some((v) => typeof v !== 'number' && typeof v !== 'string')))
    errs.push('stats: flat object of numbers/strings');
  if (!HTTPS.test(e.url ?? '')) errs.push('url: https URL required');
  if (!TYPES[e.type]) errs.push(`type: one of ${Object.keys(TYPES).join(', ')}`);
  if (!CATEGORIES[e.category]) errs.push(`category: one of ${Object.keys(CATEGORIES).join(', ')}`);
  text(errs, 'description', e.description, MAX_DESC);
  if (e.tags !== undefined && (!Array.isArray(e.tags) || e.tags.length > 6 || !e.tags.every((t) => TAG.test(t))))
    errs.push('tags: up to 6 lowercase kebab-case strings');
  if (e.license !== undefined && e.license !== null && typeof e.license !== 'string') errs.push('license: SPDX id or null');
  if (e.featured !== undefined && typeof e.featured !== 'boolean') errs.push('featured: boolean');

  if (e.type === 'mcp-server') {
    const m = e.mcp;
    if (!isObj(m) || (!m.stdio && !m.http)) errs.push('mcp: stdio and/or http required for mcp-server');
    else {
      if (m.stdio) {
        if (typeof m.stdio.command !== 'string' || !m.stdio.command) errs.push('mcp.stdio.command: required');
        if (m.stdio.args !== undefined && !(Array.isArray(m.stdio.args) && m.stdio.args.every((a) => typeof a === 'string')))
          errs.push('mcp.stdio.args: array of strings');
        secrets(errs, 'mcp.stdio.env', m.stdio.env);
      }
      if (m.http) {
        if (!HTTPS.test(m.http.url ?? '')) errs.push('mcp.http.url: https URL required');
        secrets(errs, 'mcp.http.headers', m.http.headers);
      }
      if (m.prereq !== undefined && typeof m.prereq !== 'string') errs.push('mcp.prereq: string');
    }
  }
  if (e.type === 'skill-pack' && (!isObj(e.skill) || !SKILL_SOURCE.test(e.skill.source ?? '')))
    errs.push('skill.source: owner/repo or https URL accepted by `npx skills add` required');
  if (e.skill?.skills !== undefined && !(Array.isArray(e.skill.skills) && e.skill.skills.every((s) => /^[\w.-]+$/.test(s))))
    errs.push('skill.skills: list of skill names');
  if (e.mcp?.stdio && [e.mcp.stdio.command, ...(e.mcp.stdio.args ?? [])].some((x) => typeof x === 'string' && NEWLINE_OR_BACKTICK.test(x)))
    errs.push('mcp.stdio: command/args must not contain newlines or backticks');
  if (e.type === 'instructions' && (!isObj(e.instructions) || !HTTPS.test(e.instructions.url ?? '')))
    errs.push('instructions.url: https URL of the raw Markdown file required');
  if (e.type === 'native-plugin' || e.type === 'marketplace') {
    if (!isObj(e.native) || !CLIENT_IDS.includes(e.native.client)) errs.push(`native.client: one of ${CLIENT_IDS.join(', ')}`);
    else if (typeof e.native.install !== 'string' || !e.native.install) errs.push('native.install: command required');
    else if (SHELL_OPERATORS.test(e.native.install)) errs.push('native.install: must be a single command without shell operators');
  }
  if (e.alternatives !== undefined) {
    if (!Array.isArray(e.alternatives) || e.alternatives.length > 4) errs.push('alternatives: up to 4');
    else e.alternatives.forEach((a, i) => {
      if (typeof a.name !== 'string' || !HTTPS.test(a.url ?? '')) errs.push(`alternatives[${i}]: name and https url required`);
      text(errs, `alternatives[${i}].adds`, a.adds, MAX_ADDS);
    });
  }
  return errs;
}

// Cross-entry checks: unique ids and no URL listed twice (as entry or alternative).
export function validateCatalog(entries) {
  const errs = [];
  const ids = new Map();
  const urls = new Map();
  const norm = (u) => u.replace(/\/+$/, '').toLowerCase();
  for (const { file, entry } of entries) {
    for (const m of validateEntry(entry)) errs.push(`${file}: ${m}`);
    if (ids.has(entry.id)) errs.push(`${file}: duplicate id "${entry.id}" (also in ${ids.get(entry.id)})`);
    ids.set(entry.id, file);
    for (const u of [entry.url, ...(entry.alternatives ?? []).map((a) => a.url)]) {
      if (!u) continue;
      const k = norm(u);
      if (urls.has(k) && urls.get(k) !== file) errs.push(`${file}: ${u} already listed in ${urls.get(k)}`);
      urls.set(k, file);
    }
  }
  return errs;
}

// Collections: unique ids, bilingual title/description, every entry id exists.
export function validateCollections(collections, entryIds) {
  const errs = [];
  const seen = new Set();
  for (const { file, collection: c } of collections) {
    if (!SLUG.test(c?.id ?? '')) errs.push(`${file}: id: lowercase slug required`);
    if (seen.has(c.id)) errs.push(`${file}: duplicate collection id "${c.id}"`);
    seen.add(c.id);
    text(errs, `${file}: title`, c.title, 60);
    text(errs, `${file}: description`, c.description, MAX_DESC);
    if (!Array.isArray(c.entries) || !c.entries.length) errs.push(`${file}: entries: non-empty list of entry ids`);
    else for (const id of c.entries) if (!entryIds.has(id)) errs.push(`${file}: unknown entry "${id}"`);
  }
  return errs;
}
