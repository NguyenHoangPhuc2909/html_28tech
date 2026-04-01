import { Navigate, Outlet } from "react-router";

function PrivateRoutes(){
    const isLogin = false;
    return(
        <>
        {isLogin ? (<Outlet/>) : (<Navigate to="/login"/>)} 
        </>
    );
}

export default PrivateRoutes;