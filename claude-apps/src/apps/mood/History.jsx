import { useEffect, useState } from 'react';
import { listEntries, deleteEntry, MOOD_EMOJI } from './storage.js';

export default function History() {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    listEntries().then(setEntries);
  }, []);

  async function handleDelete(id) {
    await deleteEntry(id);
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  if (entries == null) return <div className="loading-inline">Loading…</div>;
  if (entries.length === 0) {
    return (
      <div className="empty">
        <p>No check-ins yet.</p>
        <p className="muted">Log your first mood to see it here.</p>
      </div>
    );
  }

  const grouped = groupByDay(entries);
  return (
    <div className="history">
      {grouped.map(([day, items]) => (
        <section key={day}>
          <h3 className="day-heading">{day}</h3>
          <ul className="entry-list">
            {items.map((e) => (
              <li key={e.id} className="entry">
                <span className="entry-emoji" aria-hidden>
                  {MOOD_EMOJI[e.mood]}
                </span>
                <div className="entry-body">
                  <div className="entry-time">{formatTime(e.ts)}</div>
                  {e.notes && <div className="entry-notes">{e.notes}</div>}
                </div>
                <button
                  className="entry-delete"
                  onClick={() => handleDelete(e.id)}
                  aria-label="Delete entry"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function groupByDay(entries) {
  const groups = {};
  for (const e of entries) {
    const day = new Date(e.ts).toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    (groups[day] ||= []).push(e);
  }
  return Object.entries(groups);
}

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  });
}
