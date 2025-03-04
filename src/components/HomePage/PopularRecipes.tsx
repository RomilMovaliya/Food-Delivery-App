import { Box, Tab, Tabs, Typography } from "@mui/material";
import pizo2 from "../../assets/Images/pizo2.png"; // Ensure correct path
import { ShoppingBag } from "@mui/icons-material";
import React, { useState } from "react"; // Import useState for managing tabs
import leftImg from '../../assets/Images/left-side.png';
import rightImg from '../../assets/Images/right-side.png'; // Ensure correct import for left image

const PopularRecipes = () => {
    // Define state for active tab
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleTabChange = (event, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className="content" sx={{ position: 'relative', marginTop: '20px' }}>
            {/* Recipe Cards Section */}
            <Box sx={{
                padding: {
                    xs: '4rem',
                    lg: '2rem'
                }
            }}>
                {/* Title Section */}
                <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "1rem", fontWeight: 600 }}>
                    Popular Recipes
                </Typography>

                {/* Left-side image */}
                <Box
                    sx={{

                        position: "absolute",
                        height: {
                            xs: '135px',
                            sm: '140px',
                            lg: '170px'
                        }, // Adjust this to match the image height
                        width: {
                            xs: '80px',
                            sm: '85px',
                            lg: '100px'
                        },  // Adjust this to match the image width
                        top: '-40px',
                        left: 0,
                        background: `url(${leftImg}) no-repeat left top`,
                        backgroundSize: 'cover', // Adjust background size as needed
                    }}
                />

                {/* Right-side image */}
                <Box
                    sx={{

                        position: "absolute",
                        height: {
                            xs: '135px',
                            sm: '140px',
                            lg: '170px'
                        }, // Adjust this to match the image height
                        width: {
                            xs: '80px',
                            sm: '85px',
                            lg: '100px'
                        },  // 
                        top: '-60px',
                        right: 0,
                        background: `url(${rightImg}) no-repeat right top`, // Use the correct variable for the right image
                        backgroundSize: 'cover',
                    }}
                />

                {/* Tabs Section */}
                <Box id="tabs" sx={{
                    display: 'flex', justifyContent: 'center'
                }}>
                    <Tabs value={value} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" >
                        <Tab
                            label="Pizza"
                            sx={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: value === 0 ? '#FFC300' : '#ECEEF6',
                                color: value === 0 ? 'white' : 'black',
                                '&:hover': { backgroundColor: '#FFC300' },
                                transition: 'background-color 0.3s ease',
                                marginRight: '1rem', // Add margin between tabs
                            }}
                        />
                        <Tab
                            label="Sides"
                            sx={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: value === 1 ? '#FFC300' : '#ECEEF6',
                                color: value === 1 ? 'white' : 'black',
                                '&:hover': { backgroundColor: '#FFC300' },
                                transition: 'background-color 0.3s ease',
                                marginRight: '1rem', // Add margin between tabs
                            }}
                        />
                        <Tab
                            label="Chicken"
                            sx={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: value === 2 ? '#FFC300' : '#ECEEF6',
                                color: value === 2 ? 'white' : 'black',
                                '&:hover': { backgroundColor: '#FFC300' },
                                transition: 'background-color 0.3s ease',
                                marginRight: '1rem', // Add margin between tabs
                            }}
                        />
                        <Tab
                            label="Dessert"
                            sx={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: value === 3 ? '#FFC300' : '#ECEEF6',
                                color: value === 3 ? 'white' : 'black',
                                '&:hover': { backgroundColor: '#FFC300' },
                                transition: 'background-color 0.3s ease',
                                marginRight: '1rem', // Add margin between tabs
                            }}
                        />
                        <Tab
                            label="Drinks"
                            sx={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: value === 4 ? '#FFC300' : '#ECEEF6',
                                color: value === 4 ? 'white' : 'black',
                                '&:hover': { backgroundColor: '#FFC300' },
                                transition: 'background-color 0.3s ease',
                                marginRight: '1rem', // Add margin between tabs
                            }}
                        />
                    </Tabs>
                </Box>

                {/* Horizontal Scrollable Recipe Cards */}
                <Box sx={{
                    marginTop: '30px',
                    display: "flex",
                    overflowX: "auto",
                    gap: "1.5rem",
                    paddingBottom: "1rem",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 transparent",
                    "&::-webkit-scrollbar": { height: "8px" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
                    "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
                }}>
                    {[...Array(6)].map((_, index) => (
                        <Box key={index} className="card1" sx={{
                            flex: "0 0 250px", // Fixed width for horizontal scrolling
                            padding: "2rem 1rem",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "2px solid #ECEEF6",
                            borderRadius: "1rem",
                            maxWidth: "300px",
                        }}>
                            <Box component="img" className="item-image" src={pizo2} alt="" sx={{
                                height: "8rem",
                                width: "8rem",
                                marginBottom: "2rem",
                                objectFit: "cover"
                            }} />
                            <Box className="title-and-time" sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Typography variant="h6" className="item">Eatalian Pizza</Typography>
                                <Typography className="light-text">32mins</Typography>
                            </Box>
                            <Typography className="description light-text" sx={{
                                alignSelf: "flex-start",
                                marginBottom: "2rem",
                                fontSize: "14px"
                            }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                            <Typography className="price" fontSize={20} fontWeight={500}>5000NGN</Typography>

                            <Box className="triangle" sx={{
                                position: "absolute",
                                bottom: "-1.5rem",
                                left: "40%",
                                transform: "rotate(45deg)",
                                height: "3rem",
                                width: "3rem",
                                backgroundColor: "white",
                                borderRight: "2px solid #ECEEF6",
                                borderBottom: "2px solid #ECEEF6",
                                borderRadius: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Box className="circle" sx={{
                                    transform: "rotate(-45deg)",
                                    backgroundColor: "white",
                                    border: "2px solid #ECEEF6",
                                    padding: "0.4rem",
                                    borderRadius: "50%",
                                    background: "#F6B716",

                                }}>
                                    <ShoppingBag sx={{
                                        fontSize: "1rem", // Set the size of the icon
                                        color: "black",   // Set the icon color
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PopularRecipes;
