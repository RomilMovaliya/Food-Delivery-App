import { Box, Button, Stack, TextField, Typography, Grid } from '@mui/material'
import React from 'react'
import cartImg from '../../assets/Images/CartImg/cartImg.png'



const CartItem = () => {
    return (
        <>
            <Typography marginTop='120px' marginInline={3} fontSize={30} fontFamily={'Poppins'} fontWeight={500} sx={{

            }}>Your Cart</Typography>


            <Grid container spacing={3} sx={{ marginBottom: 3 }} width="90%" m="auto">
                {[1, 2, 3, 4, 5].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item} sx={{
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

                    }} >
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
                                src={cartImg}
                                alt='cart item'
                                sx={{
                                    height: 'auto',
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                }}
                            />
                            <Box display='flex' justifyContent='space-between' mt={2}>
                                <Typography fontSize={20} fontWeight={700}>
                                    Margherita Pizza
                                </Typography>
                                <Typography fontSize={25} fontWeight={700} color='#FFA500'>
                                    ₹140
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
                                    id={`filled-hidden-label-small-${item}`}
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
                                <Button sx={{ color: 'black', fontSize: '20px' }}>-</Button>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px' }}>
                                    01
                                </Typography>
                                <Button sx={{ backgroundColor: '#FFA500', color: 'white', fontSize: '20px' }}>+</Button>
                            </Stack>

                            <Box display={'flex'} justifyContent={'space-between'} marginInline={2} marginBlock={1}>
                                <Typography color='#848484'>Subtotal</Typography>
                                <Typography color='#FFC300' fontSize='20px' fontWeight={400}>
                                    ₹120
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
                                    ₹140
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
                            >
                                Order Now
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid >
        </>
    )
}

export default CartItem
