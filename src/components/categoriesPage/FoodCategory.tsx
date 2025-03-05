import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import fc1 from '../../assets/Images/FoodCategoryImg/FC1.png';
import fc2 from '../../assets/Images/FoodCategoryImg/FC2.png';
import fc3 from '../../assets/Images/FoodCategoryImg/FC3.png';
import fc5 from '../../assets/Images/FoodCategoryImg/FC4.png';
import fc4 from '../../assets/Images/FoodCategoryImg/FC5.png';
import fc6 from '../../assets/Images/FoodCategoryImg/FC6.png';

const foodItems = [
    { image: fc1, name: "Vadapav" },
    { image: fc2, name: "Panipuri" },
    { image: fc3, name: "Pav Bhaji" },
    { image: fc4, name: "Ice-Cream" },
    { image: fc5, name: "Sandwich" },
    { image: fc6, name: "Pizza" }
];

const FoodCategory = () => {
    return (
        <Box sx={{ marginTop: '20px', marginInline: '60px' }}>
            <Typography variant="h5" fontWeight="bold" mb={3}>
                Food According to Weather
            </Typography>

            <Grid container spacing={5} justifyContent="center">
                {foodItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: 3,
                                bgcolor: "white",
                                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition
                                '&:hover': {
                                    transform: 'scale(1.08)', // Slightly enlarges the card
                                    boxShadow: 6, // Increases shadow on hover
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover", // Ensures image fills the box without stretching
                                }}
                            />
                            <Box sx={{ p: 2, textAlign: "left" }}>
                                <Typography variant="h6" fontWeight={700}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    20 Min
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FoodCategory;
