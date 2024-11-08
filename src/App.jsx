import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './pages/Introduction';
import MemeGenerators from './pages/MemeGenerator';
import FunFacts from './pages/FunFacts';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Fandom from './pages/Fandom';
import DeepShowerThoughts from './pages/DeepShowerThoughts';
import './components/Header.css';
import './components/General.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/MemeGenerator" element={<MemeGenerators />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fandom" element={<Fandom />} />
          <Route path="/FunFacts" element={<FunFacts />} />
          <Route path="/DeepShowerThoughts" element={<DeepShowerThoughts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
