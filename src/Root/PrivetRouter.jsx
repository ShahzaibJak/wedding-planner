import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../useAuthContext";

const PrivetRouter = ({children}) => {
    const {user, loading} = useAuthContext()
    const location = useLocation()
console.log(location.pathname);
    if(loading){
        return <span className="loading loading-dots loading-sm"></span>
    }
    if(user){
return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRouter;