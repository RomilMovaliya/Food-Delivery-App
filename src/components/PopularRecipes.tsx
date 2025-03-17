import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { leftImg, rightImg } from '../assets/index';


const PopularRecipes: React.FC = () => {

    const [value, setvalue] = React.useState(0);


    const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
        setvalue(newValue);
    };


    return (
        <>
            <section id="recipes" style={{ marginTop: 40 }}>
                <Container className="content" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', position: 'relative' }} >
                    <Typography fontSize={40} fontWeight={700}>Popular Recipes</Typography>
                    {/* Add custom left and right side images using `::before` and `::after` */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-50px",
                            left: 0,
                            right: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: -1,
                        }}
                    >
                        {/* Left side image */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-50px",
                                left: 0,
                                height: "100%",
                                width: "100px",
                                backgroundImage: { leftImg },
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100px 150px",
                            }}
                        />
                        {/* Right side image */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-50px",
                                right: 0,
                                height: "100%",
                                width: "100px",
                                backgroundImage: { rightImg },
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100px 150px",
                            }}
                        />
                    </Box>

                    {/* Tabs */}
                    <Box id="tabs" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Tabs value={value} onChange={handleTabChange} textColor="inherit" indicatorColor="primary">
                            <Tab
                                label="Pizza"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 0 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 0 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',

                                }}
                            />
                            <Tab
                                label="Sides"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 1 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 1 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Chicken"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 2 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 2 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Dessert"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 3 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 3 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Drinks"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 4 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 4 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                        </Tabs>
                    </Box>
                </Container>
            </section>



        </>
    )
}

export default PopularRecipes