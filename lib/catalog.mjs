// Loads data/entries/**/*.yml (source of truth) or the published catalog.json.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const ENTRIES_DIR = join(ROOT, 'data', 'entries');

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return walk(p);
    return f.endsWith('.yml') || f.endsWith('.yaml') ? [p] : [];
  });
}

export function loadEntries(dir = ENTRIES_DIR) {
  return walk(dir).sort().map((p) => ({
    file: relative(ROOT, p).replace(/\\/g, '/'),
    entry: yaml.load(readFileSync(p, 'utf8')),
  }));
}

// The CLI ships catalog.json so it works from npm without the YAML sources.
export function loadCatalog() {
  if (existsSync(ENTRIES_DIR)) return loadEntries().map((x) => x.entry);
  return JSON.parse(readFileSync(join(ROOT, 'catalog.json'), 'utf8')).entries;
}

export const COLLECTIONS_DIR = join(ROOT, 'data', 'collections');

export function loadCollections(dir = COLLECTIONS_DIR) {
  return walk(dir).sort().map((p) => ({ file: relative(ROOT, p).replace(/\\/g, '/'), collection: yaml.load(readFileSync(p, 'utf8')) }));
}

export function loadCollectionList() {
  if (existsSync(COLLECTIONS_DIR)) return loadCollections().map((x) => x.collection);
  return JSON.parse(readFileSync(join(ROOT, 'catalog.json'), 'utf8')).collections ?? [];
}
