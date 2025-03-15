import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import card1 from "../../assets/Images/FoodCardImg/card1.png";
import card2 from "../../assets/Images/FoodCardImg/card2.png";
import card3 from "../../assets/Images/FoodCardImg/card3.png";

const foodCards = [
    { title: "Veggie Friendly", places: "29 Places Near You", image: card1 },
    { title: "Trending this week", places: "29 Places Near You", image: card2 },
    { title: "Authentic", places: "29 Places Near You", image: card3 },
];

const FoodCard: React.FC = () => {
    return (

        <Box sx={{
            marginBottom: '20px',

            marginLeft: '60px', // my own jugad for responsiveness
            marginRight: '30px' // my own jugad for responsiveness
        }}>


            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{ width: "100%", marginTop: 4 }}
            >
                {foodCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: { xs: 250, sm: 350, md: 400 },
                                borderRadius: "12px",
                                overflow: "hidden",

                                backgroundImage: `url(${card.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                transition: "0.3s ease-in-out",
                                "&:hover": { filter: "brightness(1.1)" },
                            }}
                        >
                            {/* Dark Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(0, 0, 0, 0.5)",
                                }}
                            />

                            {/* Text Content */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: 20,
                                    zIndex: 10,
                                    color: "white",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: "18px", sm: "24px", md: "28px" },
                                        fontWeight: "bold",
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                                    }}
                                >
                                    {card.places}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default FoodCard;
