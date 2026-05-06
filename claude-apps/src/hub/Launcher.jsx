import { Link } from 'react-router-dom';
import { apps } from './apps.js';

export default function Launcher() {
  return (
    <div className="launcher">
      <header className="launcher-header">
        <h1>snApps</h1>
      </header>
      <div className="launcher-grid">
        {apps.map((app) => (
          <Link key={app.id} to={`/apps/${app.id}`} className="app-tile">
            <div className="app-icon" aria-hidden>
              {app.emoji}
            </div>
            <div className="app-title">{app.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
