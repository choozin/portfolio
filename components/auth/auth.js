import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
/* */
const Auth = () => {

    const { status, user } = useContext(AuthContext);

    return (
        <div>
            <h4>Authorization</h4>
            <span style={{ color: status.loggedIn ? "green" : "red" }}>Status: {status.loggedIn ? "Logged In as "+ user.userDetails.name : "Not Signed In" }</span>
            <div>
                {
                    status.loggedIn ? 
                        <button onClick={ status.logout }>Logout</button>
                        :
                        <button onClick={ status.login }>Login</button>
                }
            </div>
        </div>
    );

}

export default Auth;