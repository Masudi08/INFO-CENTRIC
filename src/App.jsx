import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Registration from './pages/Registration.jsx';
import './App.css';
import Login from './pages/Login.jsx';
import ScrollButton from './components/ScrollButton.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/About' element={<About/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
      <ScrollButton/>
    </div>
  );
}

export default App
