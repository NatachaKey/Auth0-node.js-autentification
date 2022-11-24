import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from './Secret';

const Logout = ()=>{
    const { logout, isAuthenticated } = useAuth0();
    return(
        isAuthenticated && <div>
        <button onClick={() => logout({ returnTo: window.location.origin })}> Log out </button>
  
        <Secret/>
        </div>
        )
}





export default Logout;