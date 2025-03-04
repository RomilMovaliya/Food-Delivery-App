import { Box, Button, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import headerItem1 from '../../assets/Images/DetailViewImg/headerItem1.png'
import headerItem2 from '../../assets/Images/DetailViewImg/headerItem2.png';
import headerItem3 from '../../assets/Images/DetailViewImg/headerItem3.png';

const OrderOnline = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const recommendedItems = [
        { name: 'Recommended' },
        { name: 'pizzas (50)' },
        { name: 'Classic Pizzas For Classic Maniacs (10)' },
        { name: 'Garlic Breads (7)' },
        { name: 'Lasagna (3)' },
        { name: 'Desserts (2)' }
    ];

    return (
        <>
            <Stack sx={{
                flexDirection: 'row',
                '@media (max-width:600px)': {
                    flexDirection: 'column',
                    marginInline: '50px'
                },

            }} spacing={2} alignItems="flex-start"> {/* Added spacing and aligned items */}
                <Box sx={{ maxWidth: 400, padding: 2, marginLeft: 0 }}>


                    {recommendedItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            selected={selectedIndex === index}
                            onClick={() => handleListItemClick(index)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: 2,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                "&.Mui-selected": {
                                    bgcolor: "#FFC300",
                                    color: "#fff",
                                    fontWeight: 'bold',
                                },
                                "&:hover": {
                                    bgcolor: "#FFC300",
                                    transform: 'scale(1.05)', // Slight scale effect on hover
                                },
                            }}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </Box>

                {/* Vertical line */}
                <Box sx={{
                    height: '500px',
                    width: '2px',
                    backgroundColor: '#FFC300',
                    marginTop: 3,
                    marginBottom: 20,
                    '@media (max-width:600px)': {
                        height: '0px',
                        width: '0px',
                    },
                }} />

                <Stack >
                    <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Recommended</Typography>

                    {/* Recommended content */}
                    <Box marginTop='10px' marginInline='70px' sx={{

                        '@media (max-width:1090px)': {
                            marginInline: '60px',  // Adjust the marginInline for screen widths <= 1090px
                        },


                    }}>
                        <Stack sx={{

                            flexDirection: {
                                lg: 'row',       // Use 'row' for large screens and above
                                sm: 'row',
                                md: 'row'     // Use 'column' for small screens, you can adjust this as needed
                            },

                            '@media (max-width:830px)': {
                                flexDirection: 'column',  // Adjust the marginInline for screen widths <= 1090px
                            },

                        }} marginBlock={2} >
                            <Box component='img' src={headerItem1} sx={{
                                height: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },

                                width: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },

                                '@media (max-width:830px)': {
                                    display: 'flex',
                                    width: '200px',
                                    marginInline: '30px',
                                    justifyContent: 'center',  // Adjust the marginInline for screen widths <= 1090px
                                },
                            }} borderRadius={4} />
                            <Stack sx={{
                                margin: {
                                    md: 2,
                                    sm: 1
                                }
                            }}>
                                <Typography>Margherita Pizza</Typography>
                                <Typography sx={{
                                    marginTop: {
                                        md: 2,
                                        sm: 1,
                                        lg: 2
                                    },

                                    fontSize: {
                                        lg: 20,
                                        md: 15,
                                        sm: 12
                                    }
                                }} >A Classic Cheesy Margharita. Can't Go Wrong.</Typography>
                                <Typography sx={{

                                    fontSize: {
                                        md: '20px',
                                        sm: '20px'
                                    },
                                    marginTop: {
                                        md: 1,
                                        sm: 1,
                                        lg: 2
                                    }
                                }}>₹140</Typography>
                                <Button variant="contained" sx={{
                                    fontSize: {
                                        md: 10,
                                        sm: 10,
                                        lg: 20
                                    },

                                    backgroundColor: '#FFA500', marginTop: '20px',
                                    '@media (max-width:1090px)': {
                                        marginTop: '10px',  // Adjust the marginInline for screen widths <= 1090px
                                    },

                                    '@media (max-width:1070px)': {
                                        marginTop: '5px',  // Adjust the marginInline for screen widths <= 1090px
                                    },
                                }}>Add To Cart</Button>
                            </Stack>

                        </Stack>


                        <Stack sx={{
                            flexDirection: {
                                lg: 'row',       // Use 'row' for large screens and above
                                sm: 'row',
                                md: 'row'     // Use 'column' for small screens, you can adjust this as needed
                            },

                            '@media (max-width:830px)': {
                                flexDirection: 'column',  // Adjust the marginInline for screen widths <= 1090px
                            },

                        }} marginBlock={2} >
                            <Box component='img' src={headerItem2} sx={{
                                height: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },

                                width: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },
                                '@media (max-width:830px)': {
                                    display: 'flex',
                                    width: '200px',
                                    marginInline: '30px',
                                    justifyContent: 'center',  // Adjust the marginInline for screen widths <= 1090px
                                },
                            }} borderRadius={4} />
                            <Stack sx={{
                                margin: {
                                    md: 2,
                                    sm: 1
                                }
                            }}>
                                <Typography>Margherita Pizza</Typography>
                                <Typography sx={{
                                    marginTop: {
                                        md: 2,
                                        sm: 1,
                                        lg: 2
                                    },

                                    fontSize: {
                                        lg: 20,
                                        md: 15,
                                        sm: 12
                                    }
                                }} >A Classic Cheesy Margharita. Can't Go Wrong.</Typography>
                                <Typography sx={{

                                    fontSize: {
                                        md: '20px',
                                        sm: '20px'
                                    },
                                    marginTop: {
                                        md: 1,
                                        sm: 1,
                                        lg: 2
                                    }
                                }}>₹140</Typography>
                                <Button variant="contained" sx={{
                                    fontSize: {
                                        md: 10,
                                        sm: 10,
                                        lg: 20
                                    },

                                    backgroundColor: '#FFA500', marginTop: '20px',
                                    '@media (max-width:1090px)': {
                                        marginTop: '10px',  // Adjust the marginInline for screen widths <= 1090px
                                    },

                                    '@media (max-width:1070px)': {
                                        marginTop: '5px',  // Adjust the marginInline for screen widths <= 1090px
                                    },
                                }}>Add To Cart</Button>
                            </Stack>

                        </Stack>


                        <Stack sx={{
                            flexDirection: {
                                lg: 'row',       // Use 'row' for large screens and above
                                sm: 'row',
                                md: 'row'     // Use 'column' for small screens, you can adjust this as needed
                            },

                            '@media (max-width:830px)': {
                                flexDirection: 'column',  // Adjust the marginInline for screen widths <= 1090px
                            },

                        }} marginBlock={2} >
                            <Box component='img' src={headerItem3} sx={{
                                height: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },

                                width: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },
                                '@media (max-width:830px)': {
                                    display: 'flex',
                                    width: '200px',
                                    marginInline: '30px',
                                    justifyContent: 'center',  // Adjust the marginInline for screen widths <= 1090px
                                },
                            }} borderRadius={4} />
                            <Stack sx={{
                                margin: {
                                    md: 2,
                                    sm: 1
                                }
                            }}>
                                <Typography>Margherita Pizza</Typography>
                                <Typography sx={{
                                    marginTop: {
                                        md: 2,
                                        sm: 1,
                                        lg: 2
                                    },

                                    fontSize: {
                                        lg: 20,
                                        md: 15,
                                        sm: 12
                                    }
                                }} >A Classic Cheesy Margharita. Can't Go Wrong.</Typography>
                                <Typography sx={{

                                    fontSize: {
                                        md: '20px',
                                        sm: '20px'
                                    },
                                    marginTop: {
                                        md: 1,
                                        sm: 1,
                                        lg: 2
                                    }
                                }}>₹140</Typography>
                                <Button variant="contained" sx={{
                                    fontSize: {
                                        md: 10,
                                        sm: 10,
                                        lg: 20
                                    },

                                    backgroundColor: '#FFA500', marginTop: '20px',
                                    '@media (max-width:1090px)': {
                                        marginTop: '10px',  // Adjust the marginInline for screen widths <= 1090px
                                    },

                                    '@media (max-width:1070px)': {
                                        marginTop: '5px',  // Adjust the marginInline for screen widths <= 1090px
                                    },
                                }}>Add To Cart</Button>
                            </Stack>

                        </Stack>


                        <Stack sx={{
                            flexDirection: {
                                lg: 'row',       // Use 'row' for large screens and above
                                sm: 'row',
                                md: 'row'     // Use 'column' for small screens, you can adjust this as needed
                            },

                            '@media (max-width:830px)': {
                                flexDirection: 'column',  // Adjust the marginInline for screen widths <= 1090px
                            },

                        }} marginBlock={2} >
                            <Box component='img' src={headerItem1} sx={{
                                height: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },

                                width: {
                                    sm: '150px',
                                    md: '190px',
                                    lg: '200px'
                                },
                                '@media (max-width:830px)': {
                                    display: 'flex',
                                    width: '200px',
                                    marginInline: '30px',
                                    justifyContent: 'center',  // Adjust the marginInline for screen widths <= 1090px
                                },
                            }} borderRadius={4} />
                            <Stack sx={{
                                margin: {
                                    md: 2,
                                    sm: 1
                                }
                            }}>
                                <Typography>Margherita Pizza</Typography>
                                <Typography sx={{
                                    marginTop: {
                                        md: 2,
                                        sm: 1,
                                        lg: 2
                                    },

                                    fontSize: {
                                        lg: 20,
                                        md: 15,
                                        sm: 12
                                    }
                                }} >A Classic Cheesy Margharita. Can't Go Wrong.</Typography>
                                <Typography sx={{

                                    fontSize: {
                                        md: '20px',
                                        sm: '20px'
                                    },
                                    marginTop: {
                                        md: 1,
                                        sm: 1,
                                        lg: 2
                                    }
                                }}>₹140</Typography>
                                <Button variant="contained" sx={{
                                    fontSize: {
                                        md: 10,
                                        sm: 10,
                                        lg: 20
                                    },

                                    backgroundColor: '#FFA500', marginTop: '20px',
                                    '@media (max-width:1090px)': {
                                        marginTop: '10px',  // Adjust the marginInline for screen widths <= 1090px
                                    },

                                    '@media (max-width:1070px)': {
                                        marginTop: '5px',  // Adjust the marginInline for screen widths <= 1090px
                                    },
                                }}>Add To Cart</Button>
                            </Stack>

                        </Stack>




                    </Box>
                </Stack>


            </Stack>


        </>
    );
};

export default OrderOnline;
