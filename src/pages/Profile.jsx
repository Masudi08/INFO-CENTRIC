import styles from './Profile.module.css';
import {useAuth} from '../context/AuthContext';
export default function Profile(){
    const {user}=useAuth();
    return(
        <div>
            {user.name}
        </div>
    );
}
