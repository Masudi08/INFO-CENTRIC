import styles from './Registration.module.css'
import { useState } from 'react';
import { replace, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {Country} from 'country-state-city'
import {FaEye,FaEyeSlash} from 'react-icons/fa';
function Registration(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[showPass,setShowPass]=useState(false);
    const[confirmPass,setConfirm]=useState('');
    const[showConfirmPass,setShowConfirm]=useState(false);
    const[country,setCountry]=useState('');
    const countries=Country.getAllCountries();
    const[error,setError]=useState('');
    const {login}=useAuth();
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(password===confirmPass){
            const fakeUser={email,name};
            login(fakeUser);
            navigate("/Dashboard",{replace:true});
            setName('');
            setEmail('');
            setPassword('');
            setConfirm('');
            setCountry('');
            setError('');
        }else{
            setError("Passwords do not match.");
        }
    }
    return(
        <div className={styles.body}>
            <form onSubmit={handleSubmit} className={styles.formm}>
                <h1>Sign up</h1>
                <div className={styles.sect}>
                    <label htmlFor="userName">Name:</label>
                    <input 
                        type="text" 
                        name='userName' 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        required 
                    />
                </div>
                <div className={styles.sect}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="userEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                <div className={styles.sect}>
                    <label htmlFor="country">Country:</label>
                    <select name="country" value={country} onChange={(e)=>{setCountry(e.target.value)}}>
                        <option value="">Select Country</option>
                        {countries.map((c)=>(
                          <option key={c.isoCode} value={c.isoCode}>
                            {c.name}
                          </option>  
                        ))}
                    </select>
                </div>
                <div className={styles.sect}>
                    <label htmlFor="userPass">Password:</label>
                    <div className={styles.inputWrapper}>
                        <input 
                            type={showPass?"text":"password"}
                            name="userPass" 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}} 
                            required
                        />
                        <span className={styles.eyeIcon} onClick={()=>setShowPass(!showPass)}>
                            {showPass? <FaEye/>:<FaEyeSlash/>}
                        </span>
                    </div>
                </div>
                <div className={styles.sect}>
                    <label htmlFor="confirmPass"> Confirm Password:</label>
                    <div className={styles.inputWrapper}>
                        <input 
                            type={showConfirmPass? "text":"password"} 
                            name="confirmPass" 
                            value={confirmPass} 
                            onChange={(e)=>{setConfirm(e.target.value)}} 
                            required
                        />
                        <span className={styles.eyeIcon} onClick={()=>setShowConfirm(!showConfirmPass)}>
                            {showConfirmPass? <FaEye/>:<FaEyeSlash/>}
                        </span>
                    </div>
                </div>
                {error && (
                    <div className={styles.errorBox}>
                        ⚠{error}
                    </div>
                )}
                <div className={styles.sect}>
                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </div>
    );
}
export default Registration;