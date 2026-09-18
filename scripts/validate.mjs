// Validates every entry (schema + cross-entry uniqueness) and collection. Exit 1 on errors.
import { loadEntries, loadCollections } from '../lib/catalog.mjs';
import { validateCatalog, validateCollections } from '../lib/validate.mjs';

const entries = loadEntries();
const collections = loadCollections();
const errs = [
  ...validateCatalog(entries),
  ...validateCollections(collections, new Set(entries.map((x) => x.entry.id))),
];
for (const e of errs) console.error(`✗ ${e}`);
if (errs.length) {
  console.error(`\n${errs.length} problem(s) in ${entries.length} entries / ${collections.length} collections`);
  process.exit(1);
}
console.log(`✓ ${entries.length} entries and ${collections.length} collections valid`);
