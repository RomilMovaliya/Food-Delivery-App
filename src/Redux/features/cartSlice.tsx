import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string,
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // If the item exists and quantity is less than 5, increase the quantity
                if (existingItem.quantity < 5) {
                    existingItem.quantity += 1;
                } else {
                    toast.error('Maximum quantity of 5 reached for this item!');
                }

            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;