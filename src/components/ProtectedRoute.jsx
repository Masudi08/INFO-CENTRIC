import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function ProtectedRoute(){
    const {user}=useAuth();
    if(!user){//if not logged in.
        return <Navigate to="/" replace />
    }
    return <Outlet/>;
}