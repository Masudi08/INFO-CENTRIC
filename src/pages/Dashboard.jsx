import { NavLink } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import emailjs from '@emailjs/browser'
export default function Dashboard(){
    const[userName,setName]=useState('');
    const[userEmail,setEmail]=useState('');
    const[userMessage,setMessage]=useState('');
    const[title,setTitle]=useState('');
    const[profileOpen,setProfileOpen]=useState(false);
    const {user}=useAuth();
    const {logout}=useAuth();
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_wrvnxmr',
            'template_w32jliv',
            e.target,
            'M1QKnvuf2kJY7lw6M'
        ).then(()=>{
            alert('Message sent!');
            setName('');
            setEmail('');
            setMessage('');
            setTitle('');
        }).catch((err)=>console.error(err));
    }
    return(
        <div className={styles.body}>
            <div className={styles.bodyy}>
                <div>
                    <header>
                        <div className={styles.headerArea}>
                            <div>
                                <h1>Welcome {user.name}</h1>
                                <p>
                                    Which service do you need today?
                                </p>
                            </div>
                            
                            <button 
                                onClick={()=>setProfileOpen(!profileOpen)}
                                style={
                                    {
                                        fontSize:'15px',
                                        backgroundColor:"#333B2D",
                                        padding:'10px',
                                        width:"79px",
                                        height:'59px',
                                        borderRadius:'20px',
                                        color:"white"
                                    }
                                }>Toggle profile
                            </button> 
                            
                        </div>
                    </header>
                    <main>
                        <div className={styles.webDev}></div>
                        <div className={styles.appDev}></div>
                        <div className={styles.videoEdit}></div>
                        <div className={styles.phoneFix}></div>
                        <div className={styles.laptopFix}></div>
                    </main>
                </div>
                {profileOpen&& (
                    <div className={styles.profileTab}>
                        <section className={styles.profileTop}>
                            <div
                                style={{width:"70px",height:'70px',borderRadius:"35px",fontSize:'30px',backgroundColor:"green",display:'flex',alignItems:'center',justifyContent:'center'}}
                                >{user.name[0]}
                            </div>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{user.name}</div>
                            <br/>
                            ----{user.email}----
                        </section>
                        <section className={styles.profileBottom}>
                            <ul style={{listStyle:"none"}}>
                                <li><NavLink to='/Settings' style={{textDecoration:'none',color:'white'}}>Settings</NavLink></li>
                                <li><NavLink to='/Language' style={{textDecoration:'none',color:'white'}}>Language</NavLink></li>
                                <li><NavLink to='/Help' style={{textDecoration:'none',color:'white'}}>Help</NavLink></li>
                            </ul>
                            <button onClick={logout}
                                style={{height:'30px',borderRadius:'15px',backgroundColor:'#333B2D',color:"#fff"}}
                            >Sign out</button>
                        </section>
                    </div>
                )}
            </div>
            <footer>
                <form onSubmit={handleSubmit}>
                    <h1 style={{color:"#fff",fontSize:'20px'}}>Enter the name of the service as the title</h1>
                    <input
                        type="text" 
                        name='title' 
                        className={styles.title} 
                        placeholder='Title' 
                        value={title} 
                        onChange={(e)=>{setTitle(e.target.value)}}
                        required
                    />
                    <input 
                        type="text" 
                        name='name' 
                        className={styles.userName} 
                        placeholder='Your Name' 
                        value={userName} 
                        onChange={(e)=>{setName(e.target.value)}}
                        required
                    />   
                    <input 
                        type="email" 
                        name='email' 
                        className={styles.userEmail} 
                        placeholder='Your Email' 
                        value={userEmail}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                    />
                    <textarea 
                        name="message" 
                        className={styles.userMessage} 
                        placeholder='message' 
                        value={userMessage}
                        onChange={(e)=>{setMessage(e.target.value)}} 
                        required
                    />
                    <button type='submit'>Send</button>
                </form>
            </footer>
    </div>
    );
}