import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = ()=>{
    const { user, isAuthenticated } = useAuth0();
    return (
    isAuthenticated &&
    <div>
        <p>{user.nickname}</p>
        <p>{user.email}</p>
        <img src={user.picture } />
    </div>)
}

export default MyAccount;