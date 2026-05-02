import { useEffect, useState } from 'react';
import { listEntries } from './storage.js';

export default function Insights() {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    listEntries().then(setEntries);
  }, []);

  if (entries == null) return <div className="loading-inline">Loading…</div>;
  if (entries.length < 3) {
    return (
      <div className="empty">
        <p>Not enough data yet.</p>
        <p className="muted">
          Log at least 3 check-ins to see patterns. You have {entries.length}.
        </p>
      </div>
    );
  }

  const byHour = avgByHour(entries);

  return (
    <div className="insights">
      <h3>Average mood by hour</h3>
      <div className="hour-chart">
        {byHour.map((h) => (
          <div
            key={h.hour}
            className="hour-col"
            title={
              h.count > 0
                ? `${h.hour}:00 — avg ${h.avg.toFixed(1)}, ${h.count} check-in${h.count === 1 ? '' : 's'}`
                : `${h.hour}:00 — no data`
            }
          >
            <div
              className="hour-bar"
              style={{
                height: h.avg != null ? `${(h.avg / 5) * 100}%` : '0%',
                opacity: h.count === 0 ? 0.15 : 1,
              }}
            />
            <span className="hour-label">{h.hour % 6 === 0 ? h.hour : ''}</span>
          </div>
        ))}
      </div>
      <p className="muted small">
        5 = great, 0 = bad. Empty bars mean no check-ins for that hour yet.
      </p>
    </div>
  );
}

function avgByHour(entries) {
  const buckets = Array.from({ length: 24 }, (_, hour) => ({
    hour,
    sum: 0,
    count: 0,
    avg: null,
  }));
  for (const e of entries) {
    const h = new Date(e.ts).getHours();
    buckets[h].sum += e.mood;
    buckets[h].count += 1;
  }
  for (const b of buckets) {
    if (b.count > 0) b.avg = b.sum / b.count;
  }
  return buckets;
}
