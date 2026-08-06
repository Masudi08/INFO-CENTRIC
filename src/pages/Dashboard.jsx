import styles from "./Dashboard.module.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import emailjs from '@emailjs/browser'
export default function Dashboard(){
    const[userName,setName]=useState('');
    const[userEmail,setEmail]=useState('');
    const[userMessage,setMessage]=useState('');
    const[title,setTitle]=useState('');
    const {user}=useAuth();
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
            <header>
                <div>
                    <h1>Welcome {user.name}</h1>
                    <p>
                        Which service do you need today?
                    </p>
                </div>
            </header>
            <main>
                <div className={styles.webDev}></div>
                <div className={styles.appDev}></div>
                <div className={styles.videoEdit}></div>
                <div className={styles.phoneFix}></div>
                <div className={styles.laptopFix}></div>
            </main>
            <footer>
                <form onSubmit={handleSubmit}>
                    <h1 style={{color:"#fff"}}>Enter the name of the service as the title</h1>
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