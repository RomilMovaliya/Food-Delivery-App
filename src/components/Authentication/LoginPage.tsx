import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { yellow } from '@mui/material/colors';

const LoginPage = () => {
    // States for both Login and Register forms
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State to toggle between Login and Register forms
    const [isRegister, setIsRegister] = useState(false);

    // Handle form submission for Login
    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        console.log("Login - Email:", email);
        console.log("Login - Password:", password);
    };

    // Handle form submission for Register
    const handleRegisterSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        setName('');
        setConfirmPassword('');
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Register - Name:", name);
        console.log("Register - Email:", email);
        console.log("Register - Password:", password);
    };

    return (
        <Box
            marginTop={10}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            {/* Toggle between Login and Register */}
            <form onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <Typography
                    sx={{
                        direction: 'center',
                        fontSize: '30px',
                        fontFamily: 'Poppins',
                        fontWeight: '700',
                        color: yellow[700],
                    }}
                >
                    {isRegister ? 'Register' : 'Login'}
                </Typography>

                {/* Conditionally render the Name input field for Register */}
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

                {/* Email input */}
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password input */}
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Confirm Password input (only for Register) */}
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

                {/* Submit button */}
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: yellow[700],
                        width: '100%',
                        marginTop: 2,
                        padding: '12px',
                    }}
                >
                    {isRegister ? 'Register' : 'Login'}
                </Button>
            </form>

            {/* Toggle between Login and Register forms */}
            <Button
                onClick={() => setIsRegister(!isRegister)}
                sx={{
                    marginTop: 2,
                    color: yellow[700],
                }}
            >
                {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
            </Button>
        </Box>
    );
};

export default LoginPage;
