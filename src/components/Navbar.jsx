import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
/*main*/
function Navbar(){
    const[isOpen,setIsOpen]=useState(false);
    const{user,logout}=useAuth();
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}><span>I</span><span>N</span><span>F</span><span>O</span><span>-</span><span>C</span><span>E</span><span>N</span><span>T</span><span>R</span><span>I</span><span>C</span></div>

            {/* Changing state */}
            <button className={styles.navbarToggle} onClick={()=>setIsOpen(!isOpen)}>
                ...
            </button>
            <ul className={`${styles.navbarLinks} ${isOpen? styles.active:""}`}>
                <li><NavLink to="/" className={({isActive})=> isActive? styles.activeLink:styles.navLink}>Home</NavLink></li>
                <li><NavLink to="/Dashboard" className={({isActive})=> isActive? styles.activeLink:styles.navLink}>Dashboard</NavLink></li>
                <li><NavLink to="/Services" className={({isActive})=> isActive? styles.activeLink:styles.navLink}>Services</NavLink></li>
                <li><NavLink to="/About" className={({isActive})=> isActive? styles.activeLink:styles.navLink}>About</NavLink></li>
                <li><NavLink to="/Contact" className={({isActive})=> isActive? styles.activeLink:styles.navLink}>Contact</NavLink></li>
                <li>{user?<button className={styles.button}onClick={logout}>Logout</button>:<NavLink to="/Login" className={({isActive})=>{isActive? styles.activeLink:styles.navLink}}>Login</NavLink>}</li>
            </ul>
        </nav>
    );
}

export default Navbar;