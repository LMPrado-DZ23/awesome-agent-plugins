// Small ranked keyword search over id, name, title, tags and descriptions.
const norm = (s) => (s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function search(catalog, query, limit = 20) {
  const words = norm(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const scored = [];
  for (const e of catalog) {
    const fields = [
      [norm(e.id), 6], [norm(e.name), 5], [norm(e.title), 5], [norm((e.tags ?? []).join(' ')), 4],
      [norm(e.category), 3], [norm(e.description?.en), 2], [norm(e.description?.pt), 2],
      [norm((e.alternatives ?? []).map((a) => `${a.name} ${a.adds?.en}`).join(' ')), 1],
    ];
    let score = 0;
    for (const w of words) {
      let best = 0;
      for (const [text, weight] of fields) if (text.includes(w)) best = Math.max(best, weight);
      if (!best) { score = 0; break; } // every word must match somewhere
      score += best;
    }
    if (score && norm(e.id) === norm(query).trim()) score += 100; // exact id wins
    if (score) scored.push([score + (e.featured ? 1 : 0), e]);
  }
  return scored.sort((a, b) => b[0] - a[0] || a[1].id.localeCompare(b[1].id)).slice(0, limit).map(([, e]) => e);
}
