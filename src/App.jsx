import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BestInstantRamen from './pages/BestInstantRamen.jsx'
import BestRamenCookbooks from './pages/BestRamenCookbooks.jsx'
import RamenStyles from './pages/RamenStyles.jsx'
import Gear from './pages/Gear.jsx'
import QuickShoyu from './pages/QuickShoyu.jsx'
import SoftBoiledEgg from './pages/SoftBoiledEgg.jsx'
import WhichRamenToOrder from './pages/WhichRamenToOrder.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="best-instant-ramen" element={<BestInstantRamen />} />
          <Route path="best-ramen-cookbooks" element={<BestRamenCookbooks />} />
          <Route path="ramen-styles" element={<RamenStyles />} />
          <Route path="gear" element={<Gear />} />
          <Route path="which-ramen-to-order" element={<WhichRamenToOrder />} />
          <Route path="recipes/quick-shoyu" element={<QuickShoyu />} />
          <Route path="recipes/soft-boiled-ramen-egg" element={<SoftBoiledEgg />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
