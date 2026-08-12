import { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import {FaInstagram,FaTwitter,FaLinkedin,FaYoutube,FaTiktok,FaWhatsapp} from 'react-icons/fa'

function Contact(){
    const[userName,setName]=useState('');
    const[userEmail,setEmail]=useState('');
    const[userMessage,setMessage]=useState('');
    const[title,setTitle]=useState('');
    const[isSending,setIsSending]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSending(true);
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
        }).catch((err)=>{
            console.error(err);
            alert("Something went wrong. Please try again.");
        }).finally(()=>{
            setIsSending(false);
        });
    };
    return(
        <div className={styles.body}>
            <section>
                <h1 style={{color:'white'}}>Send us an email</h1>
                <form onSubmit={handleSubmit}>
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
                    {!isSending?<button type='submit'>Send</button>:<button type='button'>Sending....</button>}
                    
                </form>
            </section>
            <section>
                <h2 style={{color:'white'}}>Call us📞:0110000000
                    <br />
                    Message<FaWhatsapp/>: 0111000000
                </h2>
            </section>
            <section>
                <ul className={styles.socialHandles}>
                    <li><a href="https://instagram" target='_blank' rel='noopener noreferrer' className={styles.insta}><FaInstagram/> Instagram</a></li>
                    <li><a href="https://twitter" target='_blank' rel='noopener noreferrer' className={styles.twitter}><FaTwitter/> Twitter</a></li>
                    <li><a href="https://linkedin" target='_blank' rel='noopener noreferrer' className={styles.linkedin}><FaLinkedin/> Linkedin</a></li>
                    <li><a href="https://youtube" target='_blank' rel='noopener noreferrer' className={styles.youtube}><FaYoutube/> Youtube</a></li>
                    <li><a href="https://tiktok" target='_blank' rel='noopener noreferrer' className={styles.tiktok}><FaTiktok/> Tiktok</a></li>
                </ul>
            </section>
        </div>
    );
}
export default Contact;
