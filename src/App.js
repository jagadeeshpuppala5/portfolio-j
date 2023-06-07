import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import AboutMe from './container/AboutMe';
import Portfolio from './container/Portfolio';
import ContactMe from './container/ContactMe';
import Navbar from './container/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
