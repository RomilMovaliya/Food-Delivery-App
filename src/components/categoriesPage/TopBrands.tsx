import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import brand1 from '../../assets/Images/CategoriesImg/brand1.png';
import brand2 from '../../assets/Images/CategoriesImg/brand2.png';
import brand3 from '../../assets/Images/CategoriesImg/brand3.png';
import brand4 from '../../assets/Images/CategoriesImg/brand4.png';
import brand5 from '../../assets/Images/CategoriesImg/brand5.png';
import brand6 from '../../assets/Images/CategoriesImg/brand6.png';
import { Navigate, useNavigate } from 'react-router';
import { useParams } from 'react-router';


const TopBrands: React.FC = () => {


    return (
        <>
            <Box sx={{
                marginInline: '60px',
                marginTop: '100px'
            }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Top brands for you
                </Typography>

                {/* Wrapping all the items in a horizontal scrollable container */}
                <Box
                    sx={{
                        display: 'flex', // Align items in a row
                        overflowX: 'auto', // Enable horizontal scrolling
                        gap: 6, // Space between items
                        paddingBottom: 2, // Optional: Adds padding at the bottom if scroll is visible
                    }}
                >
                    {/* Brand Item 1 */}
                    <Box sx={{
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
                        }} src={brand1} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            La Pino'z Pizza
                        </Typography>
                    </Box>

                    {/* Brand Item 2 */}
                    <Box sx={{

                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        cursor: 'pointer',
                    }} >
                        <Box component='img' sx={{
                            height: '140px',
                            width: '140px',
                            paddingTop: '2px'
                        }} src={brand2} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            McDonald's
                        </Typography>
                    </Box>

                    {/* Brand Item 3 */}
                    <Box sx={{

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
                        }} src={brand3} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            Starbucks
                        </Typography>
                    </Box>

                    {/* Brand Item 4 */}
                    <Box sx={{

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
                        }} src={brand4} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            Burger King
                        </Typography>
                    </Box>

                    {/* Brand Item 5 */}
                    <Box sx={{

                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        cursor: 'pointer',
                    }} >
                        <Box component='img' sx={{
                            height: '140px',
                            width: '140px',
                            paddingTop: '2px'
                        }} src={brand5} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            KFC
                        </Typography>
                    </Box>



                    {/* Brand Item 6 */}
                    <Box sx={{

                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        cursor: 'pointer',
                    }} >
                        <Box component='img' sx={{
                            height: '140px',
                            width: '140px',
                            paddingTop: '2px'
                        }} src={brand6} />
                        <Typography fontWeight={700} sx={{
                            paddingTop: '40px',
                        }}>
                            KFC
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </>
    );
}

export default TopBrands;
