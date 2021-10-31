import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <h2>Place Login</h2>
            <button onClick={redirectGoogleLoginCurrentLocation}>Google Signin</button>
        </div>
    );
};

export default Login;