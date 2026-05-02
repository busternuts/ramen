import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useMemo } from 'react';
import Launcher from './hub/Launcher.jsx';
import { apps } from './hub/apps.js';

export default function App() {
  const routes = useMemo(
    () =>
      apps.map((app) => ({
        ...app,
        Component: lazy(app.component),
      })),
    []
  );

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Launcher />} />
        {routes.map(({ id, Component }) => (
          <Route key={id} path={`/apps/${id}/*`} element={<Component />} />
        ))}
        <Route path="*" element={<Launcher />} />
      </Routes>
    </Suspense>
  );
}

function Loading() {
  return <div className="loading">Loading…</div>;
}
