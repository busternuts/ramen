import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BestInstantRamen from './pages/BestInstantRamen.jsx'
import RamenStyles from './pages/RamenStyles.jsx'
import Gear from './pages/Gear.jsx'
import QuickShoyu from './pages/QuickShoyu.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="best-instant-ramen" element={<BestInstantRamen />} />
          <Route path="ramen-styles" element={<RamenStyles />} />
          <Route path="gear" element={<Gear />} />
          <Route path="recipes/quick-shoyu" element={<QuickShoyu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
