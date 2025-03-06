import React, { useState } from 'react'
import brand1 from '../../assets/Images/CategoriesImg/brand1.png';
import { Box, Button, Stack, Typography } from '@mui/material'

const HeroSection = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);  // Initialize as null to have no button selected initially

    const handleButtonClick = (index) => {
        setSelectedIndex(index);  // Set the selected index when a button is clicked
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
                <Stack direction={'row'} alignItems={'center'}>
                    <Box component='img' src={brand1} sx={{
                        height: '200px',
                        width: '200px',
                        '@media (max-width:600px)': {
                            height: '100px',
                            width: '100px',
                        },
                    }} />
                    <Box>
                        <Typography>
                            La Pino'z Pizza
                        </Typography>
                        <Typography>
                            Pizza, Fast Food, Beverages
                        </Typography>
                        <Typography>
                            Average Cost: 700rs per 2 person
                        </Typography>
                        <Typography>
                            Vesu, Surat
                        </Typography>

                        <Typography >
                            <Stack direction={'row'}>
                                <Box color='red'>Open now </Box> 11am - 11pm (Today)
                            </Stack>
                        </Typography>

                        <Stack direction={'row'}
                            spacing={{
                                md: 2,
                                lg: 2,
                                sm: 2,
                                xs: 1
                            }}> {/* Added spacing between buttons */}
                            {/* Button for "Order online" */}
                            <Button

                                variant="outlined"
                                onClick={() => handleButtonClick(0)}  // Set selectedIndex to 0 for "Order online"
                                sx={{
                                    borderColor: '#FFC300',
                                    '&:hover': {
                                        backgroundColor: '#FFA500',
                                        color: 'white'
                                    },

                                    bgcolor: selectedIndex === 0 ? "#FFA500" : "transparent", // Highlight if selected
                                    color: selectedIndex === 0 ? "#fff" : "black",  // Text color change if selected
                                    fontWeight: selectedIndex === 0 ? 'bold' : 'normal', // Emphasizing the selected item
                                    '@media (max-width:600px)': {
                                        fontSize: '10px'  // Corrected 'size' to 'fontSize'
                                    },

                                }}
                            >
                                Order online
                            </Button>

                            {/* Button for "Directions" */}
                            <Button
                                variant="outlined"
                                onClick={() => handleButtonClick(1)}  // Set selectedIndex to 1 for "Directions"
                                sx={{
                                    borderColor: '#FFC300',
                                    '&:hover': {
                                        backgroundColor: '#FFA500',
                                        color: 'white'
                                    },
                                    bgcolor: selectedIndex === 1 ? "#FFA500" : "transparent", // Highlight if selected
                                    color: selectedIndex === 1 ? "#fff" : "black",  // Text color change if selected
                                    fontWeight: selectedIndex === 1 ? 'bold' : 'normal', // Emphasizing the selected item
                                    '@media (max-width:600px)': {
                                        fontSize: '10px'  // Corrected 'size' to 'fontSize'
                                    },
                                }}
                            >
                                Directions
                            </Button>

                            {/* Button for "Share" */}
                            <Button
                                variant="outlined"
                                onClick={() => handleButtonClick(2)}  // Set selectedIndex to 2 for "Share"
                                sx={{
                                    borderColor: '#FFC300',
                                    '&:hover': {
                                        backgroundColor: '#FFA500',
                                        color: 'white'
                                    },
                                    bgcolor: selectedIndex === 2 ? "#FFA500" : "transparent", // Highlight if selected
                                    color: selectedIndex === 2 ? "#fff" : "black",  // Text color change if selected
                                    fontWeight: selectedIndex === 2 ? 'bold' : 'normal', // Emphasizing the selected item
                                    '@media (max-width:600px)': {
                                        fontSize: '10px'  // Corrected 'size' to 'fontSize'
                                    },
                                }}
                            >
                                Share
                            </Button>
                        </Stack>
                    </Box>


                </Stack>


            </Box>



        </>
    )
}

export default HeroSection;
