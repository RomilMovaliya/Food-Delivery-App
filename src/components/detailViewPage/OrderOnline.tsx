import { Box, Button, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import headerItem1 from '../../assets/Images/DetailViewImg/headerItem1.png';
import headerItem2 from '../../assets/Images/DetailViewImg/headerItem2.png';
import headerItem3 from '../../assets/Images/DetailViewImg/headerItem3.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementQuantity, incrementQuantity } from '../../Redux/features/cartSlice';
import { RootState } from '../../Redux/store/store';

const OrderOnline = () => {
    const dispatch = useDispatch();

    const allItems = [
        { id: 1, name: 'Margherita Pizza', price: 140, quantity: 1, category: 'Pizzas' },
        { id: 2, name: 'Double Cheese Margherita Pizza', price: 150, quantity: 1, category: 'Pizzas' },
        { id: 3, name: 'Garden Delight Pizza', price: 160, quantity: 1, category: 'Pizzas' },
        { id: 4, name: 'Lovers Bite Pizza', price: 170, quantity: 1, category: 'Pizzas' },
        { id: 5, name: 'Garlic Bread', price: 50, quantity: 1, category: 'Garlic Breads' },
        { id: 6, name: 'Cheese Garlic Bread', price: 60, quantity: 1, category: 'Garlic Breads' },
        { id: 7, name: 'Classic Lasagna', price: 200, quantity: 1, category: 'Lasagna' },
        { id: 8, name: 'Chocolate Cake', price: 120, quantity: 1, category: 'Desserts' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Recommended'); // Default category

    const handleListItemClick = (index: number, category: string) => {
        setSelectedIndex(index);
        setSelectedCategory(category); // Set the selected category based on click
    };

    const recommendedItems = [
        { name: 'Recommended', category: 'Recommended' },
        { name: 'Pizzas (50)', category: 'Pizzas' },
        { name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
        { name: 'Garlic Breads (7)', category: 'Garlic Breads' },
        { name: 'Lasagna (3)', category: 'Lasagna' },
        { name: 'Desserts (2)', category: 'Desserts' },
    ];

    const recommendedImages = [headerItem1, headerItem2, headerItem3]; // Add images here

    const itemsInCart = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (item: { id: number; name: string; price: number }) => {
        dispatch(addItem(item)); // Add item to cart
    };

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id)); // Increment quantity of item in cart
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id)); // Decrement quantity of item in cart
    };

    // Filter the items based on selected category
    const filteredItems = allItems.filter(item => selectedCategory === 'Recommended' || item.category === selectedCategory);

    return (
        <>
            <Stack
                sx={{
                    flexDirection: 'row',
                    '@media (max-width:600px)': {
                        flexDirection: 'column',
                        marginInline: '20px',
                    },


                }}
                spacing={2}
                alignItems="flex-start"
            >
                <Box sx={{ maxWidth: 400, padding: 2, marginLeft: 0 }}>
                    {recommendedItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            selected={selectedIndex === index}
                            onClick={() => handleListItemClick(index, item.category)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: 2,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&.Mui-selected': {
                                    bgcolor: '#FFC300',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                },
                                '&:hover': {
                                    bgcolor: '#FFC300',
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </Box>

                {/* Vertical line */}
                <Box
                    sx={{
                        height: '500px',
                        width: '2px',
                        backgroundColor: '#FFC300',
                        marginTop: 3,
                        marginBottom: 20,
                        '@media (max-width:600px)': {
                            height: '0px',
                            width: '0px',
                        },
                    }}
                />

                <Stack>
                    <Typography variant="h4" sx={{
                        marginBottom: 2, fontWeight: 'bold', marginLeft: {
                            xs: '20px',
                            lg: '30px'
                        },

                    }}>
                        {selectedCategory} {/* Display the selected category */}
                    </Typography>

                    {/* Recommended content */}
                    <Box marginTop="10px" marginInline="70px" sx={{ '@media (max-width:1090px)': { marginInline: '60px' } }}>
                        {filteredItems.map((item, idx) => {
                            const itemInCart = itemsInCart.find((cartItem) => cartItem.id === item.id); // Get the item from cart

                            return (
                                <Stack
                                    key={item.id}
                                    sx={{
                                        flexDirection: { lg: 'row', sm: 'row', md: 'row', '@media (max-width:830px)': 'column', '@media (max-width:780px)': 'column' },
                                        marginBlock: 2,
                                        borderRadius: '10px',
                                        boxShadow: '0 6px 12px 4px rgba(0, 0, 0, 0.3)',
                                        '@media (max-width:600px)': {
                                            padding: '20px'
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        padding={2}
                                        src={recommendedImages[idx % recommendedImages.length]} // Loop through the images
                                        sx={{
                                            borderRadius: '10px',
                                            height: { sm: '150px', md: '190px', lg: '200px' },
                                            width: { sm: '150px', md: '190px', lg: '200px' },
                                            '@media (max-width:830px)': {
                                                display: 'flex',
                                                width: '200px',
                                                marginInline: '30px',
                                                justifyContent: 'center',
                                            },

                                            '@media (max-width:829px)': {
                                                display: 'flex',
                                                width: '150px',
                                                marginInline: '20px',
                                                justifyContent: 'center',
                                            },

                                            '@media (max-width:780px)': {
                                                display: 'flex',
                                                width: '150px',
                                                marginInline: '5px',
                                                justifyContent: 'center',
                                            },
                                        }}
                                        borderRadius={4}
                                    />
                                    <Stack sx={{ margin: { md: 2, sm: 1 } }}>
                                        <Typography>{item.name}</Typography>
                                        <Typography
                                            sx={{
                                                marginTop: { md: 2, sm: 1, lg: 2 },
                                                fontSize: { lg: 20, md: 15, sm: 12 },
                                                color: '#848484',
                                            }}
                                        >
                                            A Classic Cheesy Margharita. Can't Go Wrong.
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { md: '20px', sm: '20px' },
                                                marginTop: { md: 1, sm: 1, lg: 2 },
                                            }}
                                        >
                                            ₹{item.price}
                                        </Typography>

                                        {/* Conditional rendering for Add to Cart or quantity adjustment */}
                                        {!itemInCart ? (
                                            <Button
                                                variant="outlined"
                                                sx={{ backgroundColor: '#FFA500', color: 'white' }}
                                                onClick={() => handleAddToCart(item)} // Add item to cart
                                            >
                                                Add To Cart
                                            </Button>
                                        ) : (
                                            <Stack direction="row" spacing={1}>
                                                <Button sx={{ fontWeight: '700', backgroundColor: '#F3F3F3', color: 'black' }} onClick={() => handleDecrement(item.id)}>-</Button>
                                                {/* Display the quantity from the Redux store */}
                                                <Typography sx={{ alignContent: 'center' }}>{itemInCart.quantity}</Typography>
                                                <Button sx={{ backgroundColor: '#FFA500', color: 'white' }} onClick={() => handleIncrement(item.id)}>+</Button>
                                            </Stack>
                                        )}
                                    </Stack>
                                </Stack>
                            );
                        })}
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default OrderOnline;
