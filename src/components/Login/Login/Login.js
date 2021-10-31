import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div> <br /><br />
            <h2>Please Login using Google</h2> <br />
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button><br /><br /><br /><br />
        </div>
    );
};

export default Login;