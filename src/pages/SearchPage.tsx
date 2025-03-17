
import { Link, useParams } from 'react-router';
import { restaurantsData } from '../data/RestaurantData';
import { itemsData } from '../data/OrderOnlineData';
import { Box, Typography, Stack, Button } from '@mui/material';
import { AllItems, ItemDetailType } from "../types/type";
import Lottie from 'lottie-react';

import { noDataFoundAnimation } from '../assets/index';

const SearchPage = () => {
    const { selectedCity, searchValue } = useParams<{
        selectedCity: string;
        searchValue: string;
    }>();


    let matchedRestaurant: ItemDetailType[] = [];
    let matchedMealItems: AllItems[] = [];

    if (searchValue && selectedCity) {
        matchedRestaurant = restaurantsData.filter(
            (restaurant) =>
                restaurant.area.toLowerCase().includes(selectedCity.toLowerCase()) &&
                (restaurant.category
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                    restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    restaurant.area.toLowerCase().includes(searchValue.toLowerCase()))
        );

        matchedMealItems = itemsData.filter((meal) => {
            let sentence = meal.category.toLowerCase();
            // Check if 'recommended' is at the end and remove it
            if (sentence.endsWith('recommended')) {
                return false;

            }

            // Return the condition to filter the items
            return (
                meal.name.toLowerCase().includes(searchValue.toLowerCase()) || meal.category.toLowerCase().includes(searchValue.toLowerCase())
            );


        }


        );
    }

    return (
        <>

            {/* Display matched restaurants in horizontal line */}

            {matchedRestaurant.length > 0 || matchedMealItems.length > 0 ? (
                <>
                    {matchedRestaurant.length > 0 && (
                        <Box
                            mt={12}
                            marginInline={15}
                            marginBottom={5}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap', // Allow wrapping on smaller screens
                                gap: 4,
                            }}
                        >
                            {matchedRestaurant.map((restaurant) => (
                                <Box
                                    key={restaurant.id}
                                    sx={{
                                        boxShadow: '0 2px 8px 1px rgba(0,0,0,0.2)',
                                        borderRadius: 5,
                                        '&:hover': {
                                            boxShadow: '0 2px 8px 4px rgba(0,0,0,0.4)',
                                            cursor: 'pointer',
                                        },
                                        backgroundColor: 'rgba(236, 238, 246, 1)',
                                        width: { xs: '100%', sm: '45%', md: '22%' }, // Responsive width
                                    }}
                                >
                                    <Link
                                        to={`/detailView/${restaurant.id}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={restaurant.image}
                                            alt="Restaurants"
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                    transition: 'all 0.5s ease-in-out',
                                                    cursor: 'pointer',
                                                },
                                                padding: 5,
                                            }}
                                        />
                                        <Typography fontWeight={700} fontSize={20}>
                                            {restaurant.name}
                                        </Typography>
                                        <Stack

                                            spacing={1}
                                            paddingBottom={2}
                                            sx={{
                                                color: 'rgba(132, 132, 132, 1)',
                                                alignItems: 'center',
                                                fontFamily: 'Poppins',
                                            }}
                                        >
                                            <Typography fontFamily={'Poppins'}>{restaurant.area} </Typography>
                                            <Typography fontFamily={'Poppins'}>{restaurant.cost}</Typography>
                                        </Stack>
                                        <Stack direction={'row'} spacing={1} padding={1}>
                                            <Typography
                                                sx={{
                                                    backgroundColor: 'rgba(217, 217, 217, 1)',
                                                    borderRadius: 5,
                                                    padding: 0.5,
                                                    paddingInline: 1,
                                                    color: 'rgba(132, 132, 132, 1)',
                                                    fontSize: 12,
                                                }}
                                            >
                                                {restaurant.category}
                                            </Typography>
                                        </Stack>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* Display matched meal items in horizontal line */}
                    {matchedMealItems.length > 0 && (
                        <Box
                            mt={2}
                            marginInline={15}
                            marginBottom={5}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap', // Allow wrapping on smaller screens
                                gap: 4,
                            }}
                        >
                            {matchedMealItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        boxShadow: '0 2px 8px 1px rgba(0,0,0,0.2)',
                                        borderRadius: 5,
                                        '&:hover': {
                                            boxShadow: '0 2px 8px 4px rgba(0,0,0,0.4)',
                                            cursor: 'pointer',
                                        },
                                        backgroundColor: 'rgba(236, 238, 246, 1)',
                                        width: { xs: '100%', sm: '45%', md: '22%' }, // Responsive width
                                    }}
                                >
                                    <Box
                                        component="img"
                                        padding={2}
                                        src={item.image}
                                        sx={{
                                            width: '100%',
                                            height: '200px', // Set a fixed height for the image box
                                            objectFit: 'cover', // Ensure the image covers the box
                                            borderRadius: 4,
                                        }}
                                    />
                                    <Stack sx={{ padding: 2 }}>
                                        <Typography fontWeight={700} fontSize={20}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ color: '#848484', marginTop: 1, fontSize: 14 }}>
                                            {item.description}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                marginTop: 2,
                                                fontSize: 16,
                                                fontWeight: 700,
                                            }}
                                        >
                                            ₹{item.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#FFA500',
                                                color: 'white',
                                                marginTop: 2,
                                                width: '100%',
                                                borderRadius: 4,
                                                '&:hover': {
                                                    backgroundColor: '#FF8C00',
                                                },
                                            }}
                                        >
                                            Add To Cart
                                        </Button>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    )}
                </>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh', // Full viewport height to center the animation
                        flexDirection: 'column',
                        zIndex: 0, // Ensure the animation is in front
                    }}
                >
                    <Lottie animationData={noDataFoundAnimation} loop={true} autoplay={true} height='80px' width='80px' style={{
                        position: 'absolute',
                        zIndex: 0,
                        marginTop: 20,
                        marginInline: '20px'

                    }} />

                    <Typography variant="h6" sx={{ marginTop: 70, position: 'absolute', zIndex: 1, fontFamily: 'Poppins', fontSize: 25, fontWeight: '600', color: 'orange', textAlign: 'center', padding: 2 }}>
                        Oops! We couldn’t find that,<br /> but let us surprise you with something yummy!
                    </Typography>
                </Box>
            )}
        </>





    );
};

export default SearchPage;
