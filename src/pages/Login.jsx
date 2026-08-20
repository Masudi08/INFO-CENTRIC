import { NavLink, useNavigate} from 'react-router-dom';
import styles from './Login.module.css';
import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[showPass,setShowPass]=useState(false);
    const [error,setError]=useState("");
    const {login}=useAuth();
    const navigate=useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setError("");
        console.log("Submitting email:",email,", Password:",password);
        if(email==="masudi@gmail.com"&& password==="masudi"){
            const name="Masudi"
            const fakeUser={email,name};
            login(fakeUser);
            navigate("/Dashboard",{replace:true});            
        }else{
            setError("Wrong Email or Password");
        }
        setEmail("");
        setPassword("");    
    }
    return(
        <div className={styles.logBody}>
            <form onSubmit={handleSubmit} className={styles.formm}>
                <h2>LOG IN</h2>
                {error && (<div className={styles.errorBox}>
                    ⚠{error}
                </div>)}
                <div className={styles.inputField}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        onFocus={()=>(setError(''))}
                        style={{width:'202px'}}
                    />
                    <br />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="password">Password:</label>
                    <div className={styles.inputWrapper}>
                        <input 
                            type={showPass?"text":"password"}
                            name="password" 
                            id="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            onFocus={()=>{setError('')}}
                            required
                            style={{width:'170px'}}
                        />
                        <span className={styles.eyeIcon} onClick={(e)=>{setShowPass(!showPass)}}>
                            {showPass?<FaEye/>:<FaEyeSlash/>}
                        </span>
                    </div>
                </div>
                
                <button type='submit'>Log in</button><br />
                <p>Don't have an account?<NavLink to='/Registration'>Signup</NavLink></p>
            </form>
        </div>
    );
}
export default Login;