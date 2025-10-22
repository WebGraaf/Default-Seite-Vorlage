import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Fuehrerscheine from './pages/Fuehrerscheine';
import KlasseA from './pages/KlasseA';
import KlasseB from './pages/KlasseB';
import KlasseC from './pages/KlasseC';
import KlasseD from './pages/KlasseD';
import KlasseT from './pages/KlasseT';
import Anmelden from './pages/Anmelden';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Components from './pages/Components';
import ComponentsTest from './pages/ComponentsTest';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fuehrerscheine" element={<Fuehrerscheine />} />
          <Route path="/fuehrerscheine/klasse-a" element={<KlasseA />} />
          <Route path="/fuehrerscheine/klasse-b" element={<KlasseB />} />
          <Route path="/fuehrerscheine/klasse-c" element={<KlasseC />} />
          <Route path="/fuehrerscheine/klasse-d" element={<KlasseD />} />
          <Route path="/fuehrerscheine/klasse-t" element={<KlasseT />} />
          <Route path="/anmelden" element={<Anmelden />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components-test" element={<ComponentsTest />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
