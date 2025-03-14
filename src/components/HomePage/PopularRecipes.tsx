import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import {
    bread1, bread2, bread3, bread4, bread5, bread6, bread7, cafesides1, cafesides2, cafesides3, cafesides4, cafesides5, cafesides6, cafesides7, burg1, burg2, burg3, burg4, burg5, burg6, piz1, piz2, piz3, piz4, piz5, piz6, piz7, piz8, piz9,
    dessert1, dessert2, dessert3, dessert4, dessert5
} from '../../assets/index'


import leftImg from '../../assets/Images/left-side.png';
import rightImg from '../../assets/Images/right-side.png';

import { yellow } from "@mui/material/colors";
import { ShoppingBag } from "@mui/icons-material";

const PopularRecipes: React.FC = () => {
    // Define state for active tab
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleTabChange = (newValue: number) => {
        setValue(newValue);
        setSelectedCategory(buttonItem[newValue]); // Set the selected category when tab is changed
    };

    const buttonItem = ["Pizza", "Dessert", "Sides", "Garlic Breads", "Burgers"];

    // Define a state for selected category
    const [selectedCategory, setSelectedCategory] = useState("Pizza");



    interface TabItems {
        title: string;
        time: string;
        image: string;
        description: string;
        price: string;
        category?: string;
    }


    const tabItems: TabItems[][] = [
        [

            {
                image: piz1,
                title: "Mushroom Delight",
                time: "32 min",
                description: "Fresh mushrooms with a hint of garlic and herbs.",
                price: "₹190",
                category: "Pizza"
            },
            {
                image: piz2,
                title: "Spicy Veggie Pizza",
                time: "32 min",
                description: "Spicy toppings with a generous layer of cheese.",
                price: "₹200",
                category: "Pizza"
            },
            {
                image: piz3,
                title: "Mexican Wave Pizza",
                time: "32 min",
                description: "Mexican-style pizza with jalapenos and spicy sauce.",
                price: "₹240",
                category: "Pizza"
            },
            {
                image: piz4,
                title: "Tandoori Paneer Pizza",
                time: "35 min",
                description: "Paneer marinated in tandoori spices, baked to perfection.",
                price: "₹250",
                category: "Pizza"
            },
            {
                image: piz5,
                title: "Classic Pepperoni",
                time: "36 min",
                description: "Classic pepperoni with a rich cheese topping.",
                price: "₹250",
                category: "Pizza"
            },
            {
                image: piz6,
                title: "Pepperoni Pizza",
                time: "40 min",
                description: "Pepperoni slices on a bed of gooey cheese.",
                price: "₹220",
                category: "Pizza"
            },
            {

                image: piz7,
                title: "Classic Hawaiian",
                time: "10 min",
                description: "Sweet pineapple and ham on a cheese pizza.",
                price: "₹240",
                category: "Pizza"
            },
            {
                image: piz8,
                title: "Classic Margherita",
                time: "25 min",
                description: "A timeless margherita for cheese lovers.",
                price: "₹260",
                category: "Pizza"
            },

            {
                image: piz9,
                title: "Veggie Supreme",
                time: "32 mins",
                description: "Loaded with bell peppers, onions, olives, and more.",
                price: "₹180",
                category: "Pizza"
            },
        ],
        [
            {
                image: dessert1,
                title: 'Chocolate Overload McFlurry with Oreo',
                time: '10 min',
                description: 'chocolate ice cream with Oreo cookies and hot fudge sauce.',
                price: "₹140",
                category: "Dessert"
            },

            {
                image: dessert2,
                title: 'MangoBurst McFlurry with Oreo Medium',
                time: '15 min',
                description: 'mango ice cream with Oreo cookies and hot fudge sauce.',
                price: "₹150",
                category: "Dessert"
            },
            {
                image: dessert3,
                title: 'Hot Fudge Sundae',
                time: '10 min',
                description: 'hot fudge sauce over creamy vanilla ice cream.',
                price: "₹160",
                category: "Dessert"
            },

            {
                image: dessert4,
                title: 'McFlurry Oreo Medium',
                time: '10 min',
                description: 'mcflurry with Oreo cookies and hot fudge sauce.',
                price: "₹170",
                category: "Dessert"
            },
            {
                image: dessert5,
                title: 'Strawberry Sundae',
                time: '10 min',
                description: 'Cstrawberry sauce over creamy vanilla ice cream.',
                price: "₹50",
                category: "Dessert"
            }
        ],

        [
            {
                image: cafesides1,
                title: 'Loaded Cheesy Fries',
                time: '10 min',
                description: 'Crispy fries topped with melted cheese sauce and bacon bits.',
                price: "₹160",
                category: "Sides"
            },
            {
                image: cafesides2,
                title: 'Cheesy Potato Wedges',
                time: '10 min',
                description: 'Crispy potato wedges topped with melted cheese sauce.',
                price: "₹130",
                category: "Sides"
            },
            {
                image: cafesides3,
                title: 'Creamy Mashed Potatoes',
                time: '10 min',
                description: 'Smooth, buttery mashed potatoes with signature gravy.',
                price: "₹100",
                category: "Sides"
            },
            {
                image: cafesides4,
                title: 'Onion Rings',
                time: '10 min',
                description: 'Crispy onion rings served with a tangy dipping sauce.',
                price: "₹120",
                category: "Sides"
            },
            {
                image: cafesides5,
                title: 'Corn on the Cob',
                time: '10 min',
                description: 'Freshly steamed corn on the cob, served with a buttery finish.',
                price: "₹100",
                category: "Sides"
            },
            {
                image: cafesides6,
                title: 'Sweet Potato Fries',
                time: '10 min',
                description: 'Crispy sweet potato fries, lightly seasoned and served with a dipping sauce.',
                price: "₹90",
                category: "Sides"
            },
            {
                image: cafesides7,
                title: 'Mashed Potato with Gravy',
                time: '10 min',
                description: 'Creamy mashed potatoes served with a rich, savory gravy.',
                price: "₹120",
                category: "Sides"
            }
        ],

        [
            {
                image: bread1,
                title: 'Stuffed Garlic Bread',
                time: '10 min',
                description: 'Garlic bread stuffed with mozzarella and herbs.',
                price: "₹150",
                category: "Garlic Breads"
            },
            {
                image: bread2,
                title: 'Chili Garlic Bread',
                time: '10 min',
                description: 'Spicy chili and garlic spread over crispy bread.',
                price: "₹150",
                category: "Garlic Breads"
            },
            {
                image: bread3,
                title: 'Garlic Cheese Sticks',
                time: '10 min',
                description: 'Cheesy sticks with a garlic twist.',
                price: "₹130",
                category: "Garlic Breads"
            },
            {
                image: bread4,
                title: 'Herb Garlic Bread',
                time: '10 min',
                description: 'Garlic bread sprinkled with Italian herbs.',
                price: "₹140",
                category: "Garlic Breads"
            },
            {
                image: bread5,
                title: 'Butter Garlic Bread',
                time: '10 min',
                description: 'Buttery garlic bread served warm.',
                price: "₹100",
                category: "Garlic Breads"
            },
            {
                image: bread6,
                title: 'Cheese Garlic Bread',
                time: '10 min',
                description: 'Crispy garlic bread topped with melted cheese.',
                price: "₹110",
                category: "Garlic Breads"
            },
            {
                image: bread7,
                title: 'Plain Garlic Bread',
                time: '10 min',
                description: 'Classic garlic bread, perfect for dipping.',
                price: "₹120",
                category: "Garlic Breads"
            }
        ],


        [
            {
                image: burg1,
                title: 'Big Mac',
                time: '10 min',
                description: 'Iconic double-decker burger with special sauce, lettuce, cheese, pickles, and onions.',
                price: "₹260",
                category: "Burger"
            },
            {
                image: burg2,
                title: 'Angry Whopper',
                time: '10 min',
                description: 'Flame-grilled beef patty topped with spicy jalapeños, onions, and a zesty sauce.',
                price: "₹220",
                category: "Burger"
            },
            {
                image: burg3,
                title: 'Double Crunch Burger',
                time: '10 min',
                description: 'Double beef patties, crunchy pickles, cheese, lettuce, and a special sauce on a soft bun.',
                price: "₹270",
                category: "Burger"
            },
            {
                image: burg4,
                title: 'Chicken Zinger Deluxe',
                time: '10 min',
                description: 'Spicy double-breaded chicken fillet with fresh lettuce, tomato, and mayo on a toasted bun.',
                price: "₹240",
                category: "Burger"
            },

            {
                image: burg5,
                title: 'Plant-Based Rebel Whopper',
                time: '10 min',
                description: 'Plant-based patty with all the classic Whopper toppings.',
                price: "₹230",
                category: "Burger"
            },
            {
                image: burg6,
                title: 'BBQ Bacon Whopper',
                time: '10 min',
                description: 'Flame-grilled beef patty topped with crispy bacon, smoky BBQ sauce, and fresh lettuce.',
                price: "₹230",
                category: "Burger"
            }
        ]
    ]



    // Filter tabItems based on selectedCategory
    const filteredTabItems = tabItems[value].filter((item) => item.category === selectedCategory);

    return (
        <Box className="content" sx={{ position: 'relative', marginTop: '80px' }}>
            {/* Title Section */}
            <Typography fontFamily={'Poppins'} sx={{
                fontSize: {
                    lg: '2rem',
                    xs: '20px',
                    sm: '2rem',
                    md: '2rem',
                }, textAlign: "center", marginBottom: "1rem", fontWeight: 600
            }}>
                Popular Recipes
            </Typography>

            {/* left-side image */}
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


                }}
            />
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
                    top: '-60px',
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
                    top: '-90px',
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
                marginInline: '90px',
                marginTop: '70px',
            }}>
                {buttonItem.map((item, index) => (
                    <button

                        key={index}
                        onClick={() => handleTabChange(index)}  // Handle tab change and set category

                        style={{

                            fontWeight: 600,
                            backgroundColor: value === index ? yellow[700] : '#ECEEF6',
                            color: value === index ? 'white' : 'black',
                            height: '50px',
                            borderRadius: '30px',
                            border: 'none'
                            // '&:hover': {
                            //     backgroundColor: value === index ? yellow[600] : '#D1D9E6',
                            // },
                        }}
                    >
                        {item}  {/* Display the name from the array */}
                    </button>
                ))}
            </Box>

            {/* Horizontal Scrollable Recipe Cards */}
            <Box sx={{
                marginTop: '30px',
                display: "flex",
                overflowX: "auto",
                gap: "1.5rem",
                marginInline: "3rem",
                paddingBottom: "3rem",
                scrollbarWidth: "none",
                scrollbarColor: "#888 transparent",
                "&::-webkit-scrollbar": { height: "8px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
                "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
            }}>

                {filteredTabItems.length === 0 ? (
                    <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
                        No items found
                    </Typography>
                ) :
                    (filteredTabItems.map((tabItem, index) => (
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
                            <Box component="img" className="item-image" src={tabItem.image} alt="" sx={{
                                height: "8rem",
                                width: "8rem",
                                borderRadius: "1rem",
                                marginBottom: "1rem",
                                objectFit: "cover"
                            }} />
                            <Box className="title-and-time" sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Typography variant="h6" className="item">{tabItem.title}</Typography>
                            </Box>
                            <Typography className="description light-text" sx={{

                                textAlign: "center",
                                marginBottom: "2rem",
                                fontSize: "14px"
                            }}>{tabItem.description}</Typography>
                            <Typography className="price" fontSize={20} fontWeight={500}>{tabItem.price}</Typography>

                            <Box className="triangle" sx={{
                                position: "absolute",
                                bottom: "-1.5rem",
                                left: "40%",
                                transform: "rotate(45deg)",
                                height: "3rem",
                                width: "3rem",
                                backgroundColor: "white",
                                borderRight: "3px solid #ECEEF6",
                                borderBottom: "3px solid #ECEEF6",
                                borderRadius: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
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
                    )))}
            </Box>
        </Box>
    );
};

export default PopularRecipes;