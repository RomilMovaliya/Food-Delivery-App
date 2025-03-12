// src/pages/ProfilePage.tsx

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, resetPassword, setUsers } from '../../Redux/features/authSlice';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const { currentUser, isLoggedIn } = useSelector((state) => state.user);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Effect to check if user is logged in
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/auth');
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        dispatch(logout()); // Dispatch to log out the user
        navigate('/auth/');
    };

    const handlePasswordReset = () => {
        if (currentUser?.password !== currentPassword) {
            setErrorMessage('Current password is incorrect.');
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setErrorMessage('New passwords do not match.');
            return;
        }

        // Update password in the users array
        const users = JSON.parse(window.localStorage.getItem('users') || '[]');

        // Find the current user
        const updatedUsers = users.map((user: any) => {
            if (user.email === currentUser?.email) {
                return { ...user, password: newPassword }; // Update password
            }
            return user;
        });

        // Update the users list in localStorage
        window.localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Update state in Redux (to reflect the change in the UI)
        dispatch(setUsers(updatedUsers));

        // Clear form fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setErrorMessage('');
        toast('Password updated successfully!')
        // alert('Password updated successfully!');
    };

    return (
        <Box marginTop={{
            xs: 13,

            lg: 10
        }} marginBottom={{
            xs: 2,

            lg: 5
        }} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{
            '@media (max-width:430px)': {
                marginInline: '30px'
            }
        }}>
            {currentUser ? (
                <>
                    <Typography sx={{ fontSize: '30px', fontFamily: 'Poppins', fontWeight: '700', color: yellow[700] }}>
                        Welcome, {currentUser.name}!
                    </Typography>
                    <Typography sx={{
                        fontSize: '18px', fontFamily: 'Poppins', fontWeight: '500', color: yellow[700], marginTop: 2, '@media (max-width:430px)': {
                            marginInline: '30px',
                            fontSize: '15px'
                        }
                    }}>
                        Email: {currentUser.email}
                    </Typography>

                    {/* Password Reset Form */}
                    <Box marginTop={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ width: '100%', maxWidth: '400px' }}>
                        <Typography sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', color: yellow[700], marginBottom: 2 }}>
                            Reset Password
                        </Typography>

                        <TextField
                            fullWidth
                            label="Current Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="New Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Confirm New Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        {errorMessage && <Typography sx={{ color: 'red', marginTop: 1 }}>{errorMessage}</Typography>}

                        <Button
                            variant="contained"
                            onClick={handlePasswordReset}
                            sx={{ backgroundColor: yellow[700], width: '100%', marginTop: 2, padding: '12px' }}
                        >
                            Reset Password
                        </Button>

                        {/* Logout Button */}
                        <Button
                            variant="contained"
                            onClick={handleLogout}
                            sx={{
                                backgroundColor: yellow[700], width: '100%', marginTop: {
                                    xs: 2,
                                    lg: 2
                                }, padding: '12px'
                            }}
                        >
                            Logout
                        </Button>
                    </Box>


                </>
            ) : (
                <Typography sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '500', color: yellow[700] }}>Loading...</Typography>
            )}
        </Box>
    );
};

export default ProfilePage;