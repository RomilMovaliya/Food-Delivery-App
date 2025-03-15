import { Box, Button, ListItemText, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementQuantity, incrementQuantity } from '../../store/cartSlice';
import { RootState } from '../../store/store';
import { itemsData } from '../../data/OrderOnlineData';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const OrderOnline = () => {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();


    interface AllItems {
        id: number,
        name: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        category: string
    }


    const allItems: { [key: number]: AllItems[] } = {
        1: itemsData,

    }

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(''); // Default category

    const [items, setItems] = useState<AllItems[]>([]);

    const handleListItemClick = (index: number, category: string) => {
        setSelectedIndex(index);
        setSelectedCategory(category); // Set the selected category based on click
    };

    interface RecommendedItems {
        id: number,
        name: string,
        category: string
    }

    const recommendedItems: { [key: number]: RecommendedItems[] } = {
        1: [
            { id: 1, name: 'Recommended', category: `Lapino'z Recommended` },
            { id: 2, name: 'Pizzas (2)', category: 'Pizzas' },
            { id: 3, name: 'Classic Pizzas For Classic Maniacs (1)', category: 'classic Pizzas' },
            { id: 4, name: 'Lasagna (3)', category: 'Lasagna' },
            { id: 5, name: 'Sides (3)', category: 'Sides' },
            { id: 6, name: 'Desserts (5)', category: 'Desserts' },
        ],

        2: [
            { id: 1, name: 'Recommended', category: `McDonald's Recommended` },
            { id: 2, name: 'Burgers (5)', category: 'Burgers' },
            { id: 3, name: 'Cakes Brownies and Cookies (4)', category: 'Cakes Brownies and Cookies' },
            { id: 4, name: 'Fries (2)', category: 'Fries' },
            { id: 5, name: 'Chicken Nuggets (3)', category: 'Chicken Nuggets' },
            { id: 6, name: 'Desserts (1)', category: 'Desserts' },
        ],
        3: [
            { id: 1, name: 'Recommended', category: `Starbuck's Recommended` },
            { id: 2, name: 'Hot Coffee (1)', category: 'HotCoffee' },
            { id: 3, name: 'Cold Brew (1)', category: 'ColdBrew' },
            { id: 4, name: 'Bakery (1)', category: 'Bakery' },
            { id: 5, name: 'Refreshers (1)', category: 'Refreshers' },
            { id: 6, name: 'Frappuccino (1)', category: 'Frappuccino' },
        ],

        4: [
            { id: 1, name: 'Recommended', category: `BurgerKing Recommended` },
            { id: 2, name: 'Cheeseburger (5)', category: 'Burgers' },
            { id: 3, name: 'Fries (2)', category: 'Fries' },
            { id: 4, name: 'Coffee (4)', category: 'Coffee' },
            { id: 5, name: 'Beverages (4)', category: 'Beverages' },
        ],

        5: [
            { id: 1, name: 'Recommended', category: `KFC Recommended` },
            { id: 2, name: 'Veggie Pizza', category: 'Pizzas' },
            { id: 3, name: 'Snacks', category: 'KFCChicken' },
            { id: 4, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 5, name: 'Drinks', category: 'Beverages' },
        ],
        6: [
            { id: 1, name: 'Recommended', category: `CoffeeCulture Recommended` },
            { id: 2, name: 'Cafe Sides', category: 'Cafe Sides' },
            { id: 3, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 4, name: 'Garlic Bread', category: 'Garlic Bread' },
            { id: 5, name: 'Ice Cream', category: 'Desserts' },
        ],
    }





    const itemsInCart = useSelector((state: RootState) => state.cart.items);
    const { isLoggedIn } = useSelector((state: RootState) => state.user);


    const handleAddToCart = (item: { id: number; name: string; price: number, image: string, quantity: number }) => {

        if (!isLoggedIn) {
            toast.error('Hey there! Please login to proceed.');
            return;
        }

        const existingItem = itemsInCart.find(cartItem => cartItem.id === item.id);

        if (existingItem && existingItem.quantity >= 5) {
            toast.error('Maximum quantity of 5 reached for this item!');
        } else {
            dispatch(addItem(item)); // Add item to cart
            toast.success(`You’ve added ${item.name} to your cart. Time to dig in!!`);
        }
    };

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id)); // Increment quantity of item in cart

    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id)); // Decrement quantity of item in cart

    };

    const [allrecommendedItems, setAllRecommendedItems] = useState<RecommendedItems[]>([]);

    useEffect(() => {
        const brandId = parseInt(id || '0');
        if (recommendedItems[brandId]) {
            setAllRecommendedItems(recommendedItems[brandId]);
            // Set the default category after recommended items are loaded
            setSelectedCategory(recommendedItems[brandId][0].category);
        } else {
            setAllRecommendedItems([]);
        }


        // Set all items based on brandId
        if (allItems[brandId]) {
            setItems(allItems[brandId]);
        } else {
            setItems([]);
        }

    }, [id]);



    // Filter the items based on selected category
    const filteredItems = Object.values(allItems).flat().filter(item => item.category === selectedCategory);
    return (
        <>

            <Box sx={{
                marginInline: {
                    lg: '160px',
                    xs: '30px',
                },
                '@media (max-width:320px)': {
                    flexDirection: 'column',
                    marginInline: '10px',
                },

            }}>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        '@media (max-width:600px)': {
                            flexDirection: 'column',
                            marginInline: '20px',
                        },

                        '@media (max-width:850px)': {
                            flexDirection: 'column',
                            marginInline: '20px',
                        },


                    }}
                    spacing={2}
                    alignItems="flex-start"
                >
                    <Box sx={{ maxWidth: 400, padding: 2, marginLeft: 0 }}>
                        {allrecommendedItems.map((item, index) => (

                            <Button
                                key={index}

                                // selected={selectedIndex === index}
                                onClick={() => handleListItemClick(index, item.category)}
                                sx={{
                                    minWidth: {
                                        xs: 200,
                                        lg: 300
                                    },
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    backgroundColor: selectedIndex === index ? '#FFC300' : 'transparent',
                                    color: selectedIndex === index ? 'black' : 'inherit',


                                }}
                            >
                                <ListItemText primary={item.name} />

                            </Button>
                        ))}
                    </Box>

                    {/* Vertical line */}
                    <Box
                        sx={{
                            height: '500px',
                            width: '2px',
                            backgroundColor: '#FFC300',
                            marginTop: 3,
                            marginBottom: 20,

                            '@media (max-width:850px)': {
                                height: '0px',
                                width: '0px',
                            },
                        }}
                    />

                    <Stack>
                        <Typography variant="h4" sx={{
                            marginBottom: 2, fontWeight: 'bold', marginLeft: {
                                xs: '20px',
                                lg: '30px',


                            },

                            '@media (max-width:600px)': {
                                marginLeft: '0px'
                            },

                        }}>
                            {selectedCategory.split(' ').slice(1).join(' ')} {/* Display the selected category */}
                        </Typography>

                        {/* Recommended content */}
                        <Box marginTop="10px" marginInline="70px" sx={{ '@media (max-width:1090px)': { marginInline: '10px' } }}>
                            {filteredItems.map((item) => {
                                const itemInCart = itemsInCart.find((cartItem) => cartItem.id === item.id); // Get the item from cart

                                return (
                                    <Box
                                        key={item.id}
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: '300px 3fr', // Horizontal layout for larger screens

                                            '@media (max-width: 1206px)': {
                                                gridTemplateColumns: '300px 3fr', // Horizontal layout for larger screens
                                            },

                                            '@media (max-width: 830px)': {
                                                gridTemplateRows: '170px 3fr', // Adjust the rows layout for smaller screens
                                                padding: '10px',
                                                marginBlock: 0,
                                            },
                                            '@media (max-width: 780px)': {
                                                gridTemplateRows: '170px 3fr',
                                            },
                                            '@media (max-width: 700px)': {
                                                gridTemplateColumns: '1fr', // Change to vertical layout (single column)
                                                gridTemplateRows: 'auto',   // Auto-adjust rows for vertical layout
                                                padding: '20px',
                                            },
                                            '@media (max-width: 600px)': {
                                                gridTemplateColumns: '1fr', // Change to vertical layout (single column)
                                                gridTemplateRows: 'auto',   // Auto-adjust rows for vertical layout
                                                padding: '20px',
                                            },
                                            marginBlock: 2,
                                            borderRadius: '10px',
                                            padding: '20px',
                                            boxShadow: '0 6px 12px 1px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >







                                        <Box
                                            component="img"
                                            padding={2}
                                            src={item.image} // Loop through the images
                                            sx={{
                                                // border: '2px solid black',
                                                borderRadius: '10px',
                                                height: { sm: '150px', md: '190px', lg: '200px' },
                                                width: { sm: '150px', md: '190px', lg: '300px' },
                                                '@media (max-width:830px)': {
                                                    display: 'flex',
                                                    width: '200px',
                                                    marginInline: '30px',
                                                    justifyContent: 'center',
                                                },

                                                '@media (max-width:829px)': {
                                                    display: 'flex',
                                                    width: '150px',
                                                    marginInline: '20px',
                                                    justifyContent: 'center',
                                                },

                                                '@media (max-width:780px)': {
                                                    display: 'flex',
                                                    width: '150px',
                                                    marginInline: '5px',
                                                    justifyContent: 'center',
                                                },
                                            }}
                                            borderRadius={4}
                                        />
                                        <Stack sx={{ width: '100%', margin: { md: 2, sm: 1 } }}>
                                            <Typography>{item.name}</Typography>
                                            <Typography
                                                sx={{
                                                    marginTop: { md: 2, sm: 1, lg: 2 },
                                                    fontSize: { lg: 20, md: 15, sm: 12 },
                                                    color: '#848484',
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: { md: '20px', sm: '20px' },
                                                    marginTop: { md: 1, sm: 1, lg: 2 },
                                                }}
                                            >
                                                ₹{item.price}
                                            </Typography>

                                            <Box width='100%'>
                                                {/* Conditional rendering for Add to Cart or quantity adjustment */}
                                                {!itemInCart || itemInCart.quantity === 0 ? (
                                                    <Button
                                                        variant="contained"
                                                        sx={{ backgroundColor: '#FFA500', color: 'white', width: '100%' }}
                                                        onClick={() => handleAddToCart(item)} // Add item to cart
                                                        disabled={itemInCart?.quantity === 5} // Disable button if item quantity is 5
                                                    >
                                                        Add To Cart

                                                    </Button>
                                                ) : (
                                                    <Stack direction="row" spacing={1}>
                                                        <Button sx={{ fontWeight: '700', backgroundColor: '#F3F3F3', color: 'black' }} onClick={() => handleDecrement(item.id)}>-</Button>
                                                        <Typography sx={{ alignContent: 'center' }}>{itemInCart.quantity}</Typography>
                                                        <Button sx={{ backgroundColor: '#FFA500', color: 'white' }} onClick={() => handleIncrement(item.id)} disabled={itemInCart.quantity === 5}>+</Button>
                                                    </Stack>
                                                )}
                                            </Box>

                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Stack>
                </Stack>
            </Box >
        </>
    );
};

export default OrderOnline;