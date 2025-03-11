import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsers, setCurrentUser } from '../../Redux/features/authSlice';

// Utility function to get users from localStorage
const getUsersFromLocalStorage = () => {
    const storedData = window.localStorage.getItem('users');
    return storedData ? JSON.parse(storedData) : [];
};

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const notify = () => toast("Wow so easy!");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const users = getUsersFromLocalStorage(); // Get existing users from localStorage

        if (isRegister) {
            if (password !== confirmPassword) {
                alert("Passwords don't match.");
                return;
            }

            // Check if email already exists
            const existingUser = users.find(user => user.email === email);
            if (existingUser) {
                alert('User with this email already exists!');
                return;
            }

            // Add the new user to the array
            const newUser = { name, email, password };
            users.push(newUser);
            window.localStorage.setItem('users', JSON.stringify(users));

            // Dispatch user data to Redux
            dispatch(setUsers(users));
            dispatch(setCurrentUser(newUser));

            alert('Registration successful!');
            window.localStorage.setItem('isLoggedIn', 'true');
            navigate('/profile');
        } else {
            // Handle login logic
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                alert('Login successful!');
                dispatch(setUsers(users));
                dispatch(setCurrentUser(user));

                window.localStorage.setItem('isLoggedIn', 'true');
                navigate('/profile');
            } else {
                alert('Invalid email or password.');
            }
        }
    };

    return (
        <Box marginTop={15} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <form onSubmit={onSubmitHandler} style={{ width: '100%', maxWidth: '400px' }}>
                <Typography sx={{ fontSize: '30px', fontFamily: 'Poppins', fontWeight: '700', color: yellow[700] }}>
                    {isRegister ? 'Register' : 'Login'}
                </Typography>

                {isRegister && (
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}

                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isRegister && (
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: yellow[700], width: '100%', marginTop: 2, padding: '12px' }}
                >
                    {isRegister ? 'Register' : 'Login'}
                </Button>
            </form>

            <Button
                onClick={() => setIsRegister(!isRegister)}
                sx={{ marginTop: 2, color: yellow[700] }}
            >
                {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
            </Button>
        </Box>
    );
};

export default AuthPage;