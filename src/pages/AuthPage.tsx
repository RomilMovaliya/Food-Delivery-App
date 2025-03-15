import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import { yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsers, setCurrentUser } from '../store/authSlice';
import Lottie from 'lottie-react';
import registersuccessAnimation from '../assets/Images/registersuccessAnimation.json';
import { toast } from 'react-toastify';
// Utility function to get users from localStorage
const getUsersFromLocalStorage = (): UserType[] => {
    const storedData = window.localStorage.getItem('users');
    return storedData ? JSON.parse(storedData) : [];
};

interface UserType {
    name: string,
    email: string,
    password: string
}

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control Lottie popup visibility
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);



    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const users: UserType[] = getUsersFromLocalStorage(); // Get existing users from localStorage
        console.log(typeof users);

        if (isRegister) {
            if (password !== confirmPassword) {

                toast.error("Passwords don't match.");
                return;
            }

            // Check if email already exists
            const existingUser = users.find((user: UserType) => user.email === email);
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

            // Show success animation (Lottie)
            setShowSuccessPopup(true); // Trigger Lottie animation

            setTimeout(() => {
                setShowSuccessPopup(false); // Hide the popup after 3 seconds
                window.localStorage.setItem('isLoggedIn', 'true');
                navigate('/profile');
            }, 3200);


        } else {
            // Handle login logic
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                setShowAlert(true); // Show the success alert

                dispatch(setUsers(users));
                dispatch(setCurrentUser(user));

                window.localStorage.setItem('isLoggedIn', 'true');
                navigate('/profile');

                //Optionally hide the alert after a few seconds
                setTimeout(() => {
                    setShowAlert(false); // Hide alert after 3 seconds
                }, 3000);
            } else {
                alert('Invalid email or password.');
            }
        }
    };

    return (

        <Box marginTop={15} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{

            '@media (max-width:430px)': {
                marginInline: '30px'
            }
        }}>




            {/* Lottie Animation Popup (Only visible when showSuccessPopup is true) */}
            {showSuccessPopup ? (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '60%',
                        left: '50%',
                        width: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 3,
                        borderRadius: 2,
                        zIndex: 9999,
                    }}
                >
                    <Lottie
                        animationData={registersuccessAnimation}
                        loop={false}
                        autoplay={true}
                        height={150}
                        width={150}
                    />
                    <Typography sx={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 2 }}>
                        Registration Successful!
                    </Typography>
                </Box>
            ) : (
                <>
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

                    {/* Conditional Alert for successful login */}
                    {showAlert && (
                        <Alert severity="success">Login successful!</Alert>

                    )}


                </>

            )}


        </Box>
    );
};

export default AuthPage;