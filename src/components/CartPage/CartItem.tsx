import { Box, Button, Stack, TextField, Typography, Grid } from '@mui/material'
import cartImg from '../../assets/Images/CartImg/cartImg.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store/store';
import { decrementQuantity, incrementQuantity, removeItem } from '../../Redux/features/cartSlice';
import Lottie from 'lottie-react';
import emptyCartAnimation from '../../assets/Images/EmptyBox.json';


const CartItem = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id));
        const updatedItem = items.find((item) => item.id === id);
        if (updatedItem) {
            handleQuantityChange(updatedItem); // This ensures the item is removed if the quantity is 0
        }
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id));
        setTimeout(() => {  // Ensure the state is updated before checking the quantity
            const updatedItem = items.find((item) => item.id === id);
            if (updatedItem) {
                handleQuantityChange(updatedItem);  // Remove item if quantity is 0
            }
        }, 0);
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    // Remove item automatically when quantity reaches 0
    const handleQuantityChange = (item: { id: number; quantity: number }) => {
        if (item.quantity === 0) {
            dispatch(removeItem(item.id)); // Remove item from cart when quantity is 0
        }
    };

    // Calculate the total price of all items in the cart
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <>
            <Typography marginTop='100px' marginInline={3} fontSize={30} fontWeight={600} fontFamily={'Poppins'} >
                Your Cart
            </Typography>


            {items.length === 0 ? (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',

                }}>
                    <Typography fontWeight={500} fontFamily={'Poppins'} sx={{
                        position: 'absolute', zIndex: 2,
                        fontSize: {
                            xs: 20,
                            sm: 25,
                            lg: 30
                        },

                        marginTop: {
                            xs: 20,
                            lg: 10
                        },

                        '@media(max-width:420px)': {
                            marginInline: 2,
                            marginTop: 30
                        }
                    }}>
                        Oops! No items Found in the cart
                    </Typography>
                    <Lottie animationData={emptyCartAnimation} loop={false} autoplay={true} height='100px' width='100px' style={{
                        position: 'absolute',
                        zIndex: 0,
                        marginTop: 500
                    }} />
                </Box>

            ) : (
                <Grid container spacing={3} sx={{ marginBottom: 3 }} width="90%" m="auto">
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id} sx={{
                            marginTop: {
                                xs: 5,
                                lg: 4,
                            },
                            '@media (max-width:600px)': {
                                marginTop: '20px'
                            },
                            '@media (max-width:400px)': {
                                marginTop: '10px'
                            },
                        }}>
                            <Box
                                sx={{
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)',  // Adding box-shadow
                                    borderRadius: 2,
                                    '@media (max-width:600px)': {
                                        borderRadius: 4,
                                    },
                                    transition: 'box-shadow 0.3s ease',  // Smooth transition for shadow
                                    '&:hover': {
                                        boxShadow: '0 6px 12px 4px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
                                    },
                                }}
                            >
                                <Box
                                    component='img'
                                    src={item.image}
                                    alt='cart item'
                                    sx={{
                                        height: 'auto',
                                        width: '100%',
                                        maxHeight: '280px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Box display='flex' justifyContent='space-between' mt={2}>
                                    <Typography fontSize={20} fontWeight={700}>
                                        {item.name}
                                    </Typography>
                                    <Typography fontSize={25} fontWeight={700} color='#FFA500'>
                                        ₹{item.price}
                                    </Typography>
                                </Box>
                                <Typography variant='body2' color='textSecondary' mt={1}>
                                    A Classic Cheesy Margharita. Can't Go Wrong.
                                </Typography>

                                <Box display='flex' justifyContent='space-between' mt={2}>
                                    <TextField
                                        sx={{
                                            width: { xs: '100%', sm: '270px' }, // Responsive width
                                        }}
                                        hiddenLabel
                                        id={`filled-hidden-label-small-${item.id}`}
                                        placeholder='Apply coupon code'
                                        variant='filled'
                                        size='small'
                                    />

                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: '#FFA500',
                                            width: 'auto',
                                            paddingX: 3,
                                        }}
                                    >
                                        Apply
                                    </Button>
                                </Box>

                                <Stack direction={'row'} margin={3} marginInline={2} spacing={1}>
                                    <Button onClick={() => handleDecrement(item.id)} sx={{ color: 'black', fontSize: '20px' }}>-</Button>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px' }}>
                                        {item.quantity}
                                    </Typography>
                                    <Button onClick={() => handleIncrement(item.id)} sx={{ backgroundColor: '#FFA500', color: 'white', fontSize: '20px' }}>+</Button>
                                </Stack>

                                <Box display={'flex'} justifyContent={'space-between'} marginInline={2} marginBlock={1}>
                                    <Typography color='#848484'>Subtotal</Typography>
                                    <Typography color='#FFC300' fontSize='20px' fontWeight={400}>
                                        ₹{item.price * item.quantity}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        height: '2px',
                                        width: '100%',
                                        backgroundColor: '#999999',
                                        marginBlock: 2,
                                    }}
                                />

                                <Box display={'flex'} justifyContent={'space-between'} marginInline={2} marginBlock={1}>
                                    <Typography color='#848484'>Total</Typography>
                                    <Typography color='#FFC300' fontSize='20px' fontWeight={400}>
                                        ₹{totalPrice}
                                    </Typography>
                                </Box>

                                <Button
                                    variant='contained'
                                    size='large'
                                    sx={{
                                        backgroundColor: '#FFA500',
                                        width: '90%',
                                        marginInline: '20px',
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                    }}
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Remove from Cart
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default CartItem;
