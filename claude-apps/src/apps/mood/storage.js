import { openDB } from 'idb';

const DB_NAME = 'mood';
const STORE = 'entries';
const VERSION = 1;

// Index 0..5 → emoji. Stored as numeric `mood` so we can compute averages.
export const MOOD_EMOJI = ['😠', '😢', '😕', '😐', '🙂', '😄'];
export const MOOD_LABEL = ['Bad', 'Low', 'Off', 'Okay', 'Good', 'Great'];

let dbPromise;
function db() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, VERSION, {
      upgrade(d) {
        if (!d.objectStoreNames.contains(STORE)) {
          const store = d.createObjectStore(STORE, {
            keyPath: 'id',
            autoIncrement: true,
          });
          store.createIndex('ts', 'ts');
        }
      },
    });
  }
  return dbPromise;
}

export async function addEntry(entry) {
  const d = await db();
  return d.add(STORE, entry);
}

export async function listEntries() {
  const d = await db();
  const tx = d.transaction(STORE, 'readonly');
  const idx = tx.store.index('ts');
  const results = [];
  let cursor = await idx.openCursor(null, 'prev');
  while (cursor) {
    results.push(cursor.value);
    cursor = await cursor.continue();
  }
  return results;
}

export async function deleteEntry(id) {
  const d = await db();
  return d.delete(STORE, id);
}
