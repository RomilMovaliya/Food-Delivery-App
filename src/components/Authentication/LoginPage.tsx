import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { yellow } from '@mui/material/colors';

const LoginPage = () => {
    // State for email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission logic
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };



    return (
        <>
            <Box
                marginTop={10}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                {/* Login Form */}
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
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

                    {/* Login button */}
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
                        Login
                    </Button>
                </form>
            </Box>


        </>
    );
};

export default LoginPage;
