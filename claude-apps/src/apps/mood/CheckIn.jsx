import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEntry, MOOD_EMOJI, MOOD_LABEL } from './storage.js';

const MOODS = MOOD_EMOJI.map((emoji, value) => ({
  value,
  emoji,
  label: MOOD_LABEL[value],
})).reverse(); // show best → worst

export default function CheckIn() {
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  async function handleSave() {
    if (selected == null) return;
    setSaving(true);
    try {
      await addEntry({ ts: Date.now(), mood: selected, notes: notes.trim() });
      navigate('history');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="checkin">
      <h2>How do you feel right now?</h2>
      <div className="mood-options">
        {MOODS.map((m) => (
          <button
            key={m.value}
            className={`mood-option ${selected === m.value ? 'selected' : ''}`}
            onClick={() => setSelected(m.value)}
            aria-pressed={selected === m.value}
            aria-label={m.label}
          >
            <span className="mood-emoji">{m.emoji}</span>
            <span className="mood-label">{m.label}</span>
          </button>
        ))}
      </div>
      <textarea
        className="notes"
        placeholder="Notes (optional) — what's going on?"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
      />
      <button
        className="save"
        onClick={handleSave}
        disabled={selected == null || saving}
      >
        {saving ? 'Saving…' : 'Save check-in'}
      </button>
    </div>
  );
}
