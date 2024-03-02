import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col  items-center min-h-screen w-full h-full bg-black text-white overflow-x-hidden relative">
      <Router>
        
        <NavBar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
