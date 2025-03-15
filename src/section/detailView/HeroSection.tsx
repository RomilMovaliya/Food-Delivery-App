import React, { useEffect, useState } from 'react'
import {
    brand1, brand2, brand3, brand4, brand5, brand6
} from '../../assets/index';
import { Box, Button, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router';
import { restaurantsData } from '../../data/RestaurantData';

interface ItemDetailType {
    id: number,
    image: string,
    name: string,
    item: string,
    cost: string,
    area: string,
    time: string,
    category?: string

}


const HeroSection: React.FC = () => {



    const { id } = useParams<{ id: string }>();



    interface BrandImg {
        id: number,
        image: string,

    }

    const [selectedBrandImg, setSelectedBrandImg] = useState<BrandImg | null>(null);

    const brandImg: BrandImg[] = [
        {
            id: 1,
            image: brand1,
        },

        {
            id: 2,
            image: brand2,
        },

        {
            id: 3,
            image: brand4,
        },

        {
            id: 4,
            image: brand3,
        },

        {
            id: 5,
            image: brand5,
        },

        {
            id: 6,
            image: brand6,
        }


    ];


    useEffect(() => {
        const barndId = parseInt(id || '0');
        const brand = brandImg.find((item) => barndId === item.id);
        setSelectedBrandImg(brand || null);
    }, [id]);



    const [selectedIndex, setSelectedIndex] = useState(0);  // Initialize as null to have no button selected initially
    const [selectedBrand, setSelectedBrand] = useState<ItemDetailType | null>(null);


    const handleButtonClick = (index: number) => {
        setSelectedIndex(index);  // Set the selected index when a button is clicked
    }



    const isOpenNow = () => {
        const currentTime = new Date();
        const openingTime = new Date();
        const closingTime = new Date();

        const [openingHour, openingMinute] = selectedBrand?.time.split(' - ')[0].split('am')[0].split(':').map(Number) || [0, 0];
        const [closingHour, closingMinute] = selectedBrand?.time.split(' - ')[1].split('pm')[0].split(':').map(Number) || [0, 0];

        openingTime.setHours(openingHour, openingMinute);
        closingTime.setHours(closingHour + 12, closingMinute);


        return currentTime >= openingTime && currentTime <= closingTime;
    };


    useEffect(() => {
        const barndId = parseInt(id || '0');
        const brand = restaurantsData.find((item) => barndId === item.id);
        setSelectedBrand(brand || null);
    }, [id]);


    if (!selectedBrand) {
        return <Typography>No any Brand Found.</Typography>
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
                <Stack sx={{
                    flexDirection: {
                        lg: 'row',
                        md: 'row',
                        sm: 'row'


                    },
                    '@media (max-width:600px)': {
                        flexDirection: 'column'
                    },
                }} alignItems={'center'}>
                    <Box component='img' src={selectedBrandImg?.image} sx={{
                        height: '180px',
                        width: '180px',
                        padding: '10px',

                    }} />
                    <Box>
                        <Typography>
                            {selectedBrand.name}
                        </Typography>
                        <Typography color='#999999'>
                            {selectedBrand.item}

                        </Typography>
                        <Stack direction={'row'}>
                            <Typography color='#999999'>
                                Average Cost:
                            </Typography>

                            <Typography ml={1}>
                                {selectedBrand.cost}
                            </Typography>
                        </Stack>

                        <Typography color='#999999'>
                            {selectedBrand.area}

                        </Typography>

                        <Typography >
                            <Stack direction={'row'} spacing={2}>

                                <Box color='red'>{(!isOpenNow) ? 'Close Now' : 'Open Now'}</Box> <Box color='#999999'>{selectedBrand.time} (Today)</Box>
                            </Stack>
                        </Typography>

                        <Stack direction={'row'}
                            mt={1}
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
