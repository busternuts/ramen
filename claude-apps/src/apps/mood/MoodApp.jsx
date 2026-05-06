import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import CheckIn from './CheckIn.jsx';
import History from './History.jsx';
import Insights from './Insights.jsx';
import './mood.css';

export default function MoodApp() {
  return (
    <div className="mood-app">
      <MoodHeader />
      <Routes>
        <Route index element={<CheckIn />} />
        <Route path="history" element={<History />} />
        <Route path="insights" element={<Insights />} />
      </Routes>
    </div>
  );
}

function MoodHeader() {
  const navigate = useNavigate();
  return (
    <header className="mood-header">
      <div className="mood-header-row">
        <button
          className="back"
          onClick={() => navigate('/')}
          aria-label="Back to apps"
        >
          ‹ snApps
        </button>
        <h1>Mood</h1>
        <span className="header-spacer" aria-hidden />
      </div>
      <nav className="mood-tabs">
        <NavLink to="" end>
          Check-In
        </NavLink>
        <NavLink to="history">History</NavLink>
        <NavLink to="insights">Insights</NavLink>
      </nav>
    </header>
  );
}
