/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user, loading}=useContext(AuthContext)
    const location=useLocation();

    if(loading || isAdminLoading){
        return <p className="text-5xl text-center">Loading.....</p>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;
