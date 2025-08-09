import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <HashRouter>
      <div className='App'>

        <Navbar />

        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
          </Routes>
        </main>

      </div>
    </HashRouter>
  );
}

export default App;