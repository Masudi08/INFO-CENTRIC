import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            await login(userName, password);
            navigate("/Dashboard", { replace: true });
        } catch (err) {
            setError(err.message || "Wrong username or password");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className={styles.logBody}>
            <form onSubmit={handleSubmit} className={styles.formm}>
                <h2>LOG IN</h2>
                {error && (
                    <div className={styles.errorBox}>
                        ⚠{error}
                    </div>
                )}
                <div className={styles.inputField}>
                    <label htmlFor="userName">userName:</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setError('')}
                        style={{ width: '202px' }}
                    />
                    <br />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="password">Password:</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setError('')}
                            required
                            style={{ width: '170px' }}
                        />
                        <span className={styles.eyeIcon} onClick={() => setShowPass(!showPass)}>
                            {showPass ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>

                <button type="submit" disabled={submitting}>
                    {submitting ? "Logging in…" : "Log in"}
                </button>
                <br />
                <p>Don't have an account? <NavLink to='/Registration'>Signup</NavLink></p>
            </form>
        </div>
    );
}

export default Login;