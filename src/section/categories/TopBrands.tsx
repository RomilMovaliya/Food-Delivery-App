import { Box, Typography } from '@mui/material';
import React from 'react';
import brand1 from '../../assets/Images/CategoriesImg/brand1.png';
import brand2 from '../../assets/Images/CategoriesImg/brand2.png';
import brand3 from '../../assets/Images/CategoriesImg/brand3.png';
import brand4 from '../../assets/Images/CategoriesImg/brand4.png';
import brand5 from '../../assets/Images/CategoriesImg/brand5.png';
import brand6 from '../../assets/Images/CategoriesImg/brand6.png';
import { Link } from 'react-router-dom';

interface Brand {
    id: number,
    name: string,
    image: string
}


const TopBrands: React.FC = () => {


    const topBrandsdetail: Brand[] = [
        {
            id: 1,
            name: `La Pino'z Pizza`,
            image: brand1
        },

        {
            id: 2,
            name: `McDonald's`,
            image: brand2
        },

        {
            id: 3,
            name: `Starbucks`,
            image: brand4
        },

        {
            id: 4,
            name: `Burger King`,
            image: brand3
        },


        {
            id: 5,
            name: `KFC`,
            image: brand5
        },


        {
            id: 6,
            name: `Coffee Culture`,
            image: brand6
        },
    ];


    return (
        <>
            <Box sx={{
                marginInline: '60px',
                marginTop: '120px'
            }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Top brands for you
                </Typography>

                {/* Wrapping all the items in a horizontal scrollable container */}
                <Box
                    sx={{
                        display: 'flex', // Align items in a row
                        overflowX: 'auto', // Enable horizontal scrolling
                        scrollbarWidth: "none",
                        gap: 6, // Space between items
                        paddingBottom: 2, // Optional: Adds padding at the bottom if scroll is visible
                    }}
                >


                    {topBrandsdetail.map(brand => (

                        <Link key={brand.id} to={`/detailView/${brand.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                            < Box sx={{
                                // border: '2px solid yellow',

                                width: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '200px',
                                cursor: 'pointer',
                            }}>
                                <Box component='img' sx={{
                                    height: '140px',
                                    width: '140px',
                                    paddingTop: '2px'
                                }} src={brand.image} />
                                <Typography fontWeight={700} sx={{
                                    paddingTop: '40px',
                                }}>
                                    {brand.name}
                                </Typography>
                            </Box>
                        </Link>
                    ))}

                </Box>

            </Box >
        </>
    );
}

export default TopBrands;
