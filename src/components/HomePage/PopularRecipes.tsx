import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import pizo2 from "../../assets/Images/pizo2.png"; // Ensure correct path
import { ShoppingBag } from "@mui/icons-material";
import React, { useState } from "react"; // Import useState for managing tabs
import leftImg from '../../assets/Images/left-side.png';
import rightImg from '../../assets/Images/right-side.png'; // Ensure correct import for left image
import { yellow } from "@mui/material/colors";

const PopularRecipes = () => {
    // Define state for active tab
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleTabChange = (newValue: number) => {
        setValue(newValue);
    };

    const buttonItem = ["Pizza", "Sides", "Chicken", "Dessert", "Drinks"];

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



                {/* Tab Buttons */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',  // 2 columns on extra small screens
                        sm: 'repeat(3, 1fr)',  // 3 columns on small screens
                        md: 'repeat(5, 1fr)',  // 5 columns on medium and above
                    },

                    gap: '20px',
                    marginInline: '60px',
                    marginTop: '20px',
                }}>
                    {buttonItem.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => handleTabChange(index)} // Handle tab change on click
                            variant="contained"
                            sx={{
                                backgroundColor: value === index ? yellow[700] : '#ECEEF6',
                                color: value === index ? 'white' : 'black',
                                height: '50px',
                                borderRadius: '30px',
                                '&:hover': {
                                    backgroundColor: value === index ? yellow[600] : '#D1D9E6',
                                },
                            }}
                        >
                            {item}  {/* Display the name from the array */}
                        </Button>
                    ))}
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
        </Box >
    );
};

export default PopularRecipes;
