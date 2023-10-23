
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'

import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* index routes render into their parent's Outlet at their parent's URL */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
