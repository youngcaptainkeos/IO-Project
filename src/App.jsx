import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './pages/Introduction';
import RandomGenerators from './pages/RandomGenerators';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Fandom from './pages/Fandom';
import './components/Header.css';
import './components/General.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/random-generators" element={<RandomGenerators />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fandom" element={<Fandom />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
