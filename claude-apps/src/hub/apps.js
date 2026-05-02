// Registry of mini-apps.
// `component` is a function returning a dynamic import — keeps each app in its own chunk
// so initial load only fetches the launcher shell, not every mini-app's code.
//
// Convention: a mini-app must be self-contained in src/apps/<id>/ and must not import
// from another mini-app's directory.

export const apps = [
  {
    id: 'mood',
    title: 'Mood Check-In',
    emoji: '🌤️',
    description: 'Log how you feel throughout the day.',
    component: () => import('../apps/mood/MoodApp.jsx'),
  },
];
