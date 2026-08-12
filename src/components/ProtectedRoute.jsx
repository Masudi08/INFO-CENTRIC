import { Navigate,Outlet,useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function ProtectedRoute(){
    const {user}=useAuth();
    const location=useLocation();
    if(!user){//if not logged in.
        return <Navigate to="/Registration"  state={{from:location}} replace />
    }
    return <Outlet/>;
}