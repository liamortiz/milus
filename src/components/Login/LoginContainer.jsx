import React, { useState } from 'react';

const LoginContainer = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleEmailChange({ target }) {
        setEmail(target.value);
    }

    function handlePasswordChange({ target }) {
        setPassword(target.value);
    }

    return (
        <div id="login-container">
            <h2>Welcome Back!</h2>
            <p><span>Milus</span> the smart job application tracker.</p>
            <form onSubmit={handleSubmit}>
                <span>Email</span>
                <input type="email" onChange={handleEmailChange}/>
                <span>Password</span>
                <input type="password" onChange={handlePasswordChange}/>
                <button type="submit">Login</button>
                <a href="">or register</a>
            </form>
        </div>
    )
}
export default LoginContainer;