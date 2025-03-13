import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type for user data
interface User {
    name: string;
    email: string;
    password: string;
}

// Type for initial state
interface UserState {
    users: User[];
    currentUser: User | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    isLoggedIn: false,
};

// Redux slice to manage user state
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Set users from localStorage or registration
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        // Set current user and login status
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        // Log out and clear user data
        logout: (state) => {
            state.currentUser = null;
            state.isLoggedIn = false;
        },
        // Reset password for the current user
        resetPassword: (state, action: PayloadAction<{ currentPassword: string; newPassword: string }>) => {
            if (state.currentUser && state.currentUser.password === action.payload.currentPassword) {
                state.currentUser.password = action.payload.newPassword;
            }
        },
    },
});

export const { setUsers, setCurrentUser, logout, resetPassword } = userSlice.actions;

export default userSlice.reducer;