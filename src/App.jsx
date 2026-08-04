import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Registration from './pages/Registration.jsx';
import './App.css';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App
