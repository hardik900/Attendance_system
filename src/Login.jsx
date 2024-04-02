import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill input fields');
        } else {
            logIn(username, password);
        }
    };

    const logIn = (username, password) => {
        const storedUsers = JSON.parse(localStorage.getItem('data'));

        if (!storedUsers) {
            alert('No user data found. Please sign up first.');
            navigate("/")
            return;
        }

        const user = storedUsers.find((user) => user.username === username && user.password === password);

        if (user) {
            // Successful login
            localStorage.setItem('loggedInUser', JSON.stringify(username));
            // Redirect the user to another page, or perform any other action
            alert('Successful login');
            navigate("/attendance")
        } else {
            alert('Incorrect username or password.');
        }
    };

    return (
        <div className='register_heading'>
            <div className="heading">
                <h1>Login Page</h1>
            </div>
            <div className='Register_container'>
                <div className='Register'>
                    <form >
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </form>
                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                </div>
                <div className='register_buttons'>
                    <NavLink to="/"><button className="register_button button">Register</button></NavLink>
                    <button type="submit" onClick={handleSubmit} >Log In</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
