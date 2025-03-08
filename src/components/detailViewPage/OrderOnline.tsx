import { Box, Button, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import headerItem1 from '../../assets/Images/DetailViewImg/headerItem1.png';
import headerItem2 from '../../assets/Images/DetailViewImg/headerItem2.png';
import headerItem3 from '../../assets/Images/DetailViewImg/headerItem3.png';
import burger1 from '../../assets/Images/DetailViewImg/burger1.jpg';
import burger2 from '../../assets/Images/DetailViewImg/burger2.jpg';
import burger3 from '../../assets/Images/DetailViewImg/burger3.jpg';
import burger4 from '../../assets/Images/DetailViewImg/burger4.jpg';
import burger5 from '../../assets/Images/DetailViewImg/burger5.jpg';
import chicken1 from '../../assets/Images/DetailViewImg/burger1.jpg';
import chicken2 from '../../assets/Images/DetailViewImg/burger2.jpg';
import chicken3 from '../../assets/Images/DetailViewImg/burger3.jpg';
import chicken4 from '../../assets/Images/DetailViewImg/burger4.jpg';
import chicken5 from '../../assets/Images/DetailViewImg/burger5.jpg';
import desserts1 from '../../assets/Images/DetailViewImg/desserts1.png';
import desserts2 from '../../assets/Images/DetailViewImg/desserts2.png';
import desserts3 from '../../assets/Images/DetailViewImg/desserts3.png';
import desserts4 from '../../assets/Images/DetailViewImg/desserts4.png';
import desserts5 from '../../assets/Images/DetailViewImg/desserts5.png';
import lapinoz1 from '../../assets/Images/DetailViewImg/lapinoz1.jpg';
import lapinoz2 from '../../assets/Images/DetailViewImg/lapinoz2.jpg';
import lapinoz3 from '../../assets/Images/DetailViewImg/lapinoz3.jpg';
import sides1 from '../../assets/Images/DetailViewImg/sides1.jpg';
import sides2 from '../../assets/Images/DetailViewImg/sides2.jpg';
import sides3 from '../../assets/Images/DetailViewImg/sides3.jpg';
import lasagna1 from '../../assets/Images/DetailViewImg/lasagna1.jpg';
import lasagna2 from '../../assets/Images/DetailViewImg/lasagna2.jpg';
import lasagna3 from '../../assets/Images/DetailViewImg/lasagna3.jpg';

import starbucks1 from '../../assets/Images/DetailViewImg/starbuck1.jpg';
import starbucks2 from '../../assets/Images/DetailViewImg/starbuck2.jpg';
import starbucks3 from '../../assets/Images/DetailViewImg/starbuck3.jpg';
import starbucks4 from '../../assets/Images/DetailViewImg/starbuck4.jpg';
import starbucks5 from '../../assets/Images/DetailViewImg/starbuck5.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementQuantity, incrementQuantity } from '../../Redux/features/cartSlice';
import { RootState } from '../../Redux/store/store';
import { useParams } from 'react-router';

const OrderOnline = () => {
    const dispatch = useDispatch();

    interface AllItems {

        name: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        category: string
    }

    type category = 'Recommended' | 'RecommendedPizza';

    const [items, setItems] = useState<AllItems[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<category>('Recommended'); // State for selected category


    const allItems: { [key: number]: AllItems[] } = {
        1: [
            { name: 'Big Mac®', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Burgers' },
            { name: 'Quarter Pounder®* with Cheese', image: burger2, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Burgers' },
            { name: 'Double Quarter Pounder®* with Cheese', image: burger3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },
            { name: 'Quarter Pounder®* with Cheese Deluxe', image: burger4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },
            { name: 'Double Cheeseburger', image: burger5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },
            { name: 'Chocolate Overload McFlurry with Oreo Small', image: desserts1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Recommended' },
            { name: 'MangoBurst McFlurry with Oreo (M)', image: desserts2, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'RecommendedPizza' },
            { name: 'Hot Fudge Sundae', image: desserts3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'RecommendedPizza' },
            { name: 'McFlurry Oreo ( M )', image: desserts4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'RecommendedPizza' },
            { name: 'Strawberry Sundae', image: desserts5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'RecommendedPizza' },
            { name: 'McCrispy™', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Chicken' },
            { name: 'Deluxe McCrispy™', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Chicken' },
            { name: 'Spicy McCrispy™', image: burger1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
            { name: 'Spicy Deluxe McCrispy™', image: burger1, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
            { name: 'McChicken®', image: burger1, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
            { name: 'Chocolate Overload McFlurry with Oreo Small', image: desserts1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Desserts' },
            { name: 'MangoBurst McFlurry with Oreo (M)', image: desserts2, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Desserts' },
            { name: 'Hot Fudge Sundae', image: desserts3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
            { name: 'McFlurry Oreo ( M )', image: desserts4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
            { name: 'Strawberry Sundae', image: desserts5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
            { name: 'Tomatoes Pizza', image: lapinoz1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Pizzas' },
            { name: 'Onions Pizza', image: lapinoz2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Pizzas' },
            { name: 'Sweet Corns Pizza', image: lapinoz3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Pizzas' },
            { name: 'Plain Garlic Bread', image: sides1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
            { name: 'Cheesy Garlic Bread', image: sides2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
            { name: 'Paneer Tikka Garlic Bread', image: sides3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
            { name: 'Veg Lasagna - Rosy Red', image: lasagna1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
            { name: 'Veg Lasagna - Pesto', image: lasagna2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
            { name: 'Veg Lasagna - Creamy White', image: lasagna3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
            { name: 'Pink Drink', image: starbucks5, price: 160, description: 'A vibrant mix of strawberry açaí and coconut flavors, bursti...', quantity: 1, category: 'ColdBrew' },
            { name: 'Caramel Macchiato', image: starbucks2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'HotCoffee' },
            { name: 'Butter Croissant', image: starbucks1, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Bakery' },
            { name: 'Java Chip Frappuccino', image: starbucks3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Frappuccino' },
            { name: 'Strawberry Açaí Refresher', image: starbucks4, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Refreshers' },
        ],
    }

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index: number, category: string) => {
        setSelectedIndex(index);

    };



    const { id } = useParams<{ id: string }>();

    interface RecommendedItems {
        id: number,
        name: string,
        category: string
    }

    const [recommendedItems, setRecommendedItems] = useState<RecommendedItems[]>([]);

    const recommendedItemsById: { [key: number]: RecommendedItems[] } = {
        1: [
            { id: 1, name: 'Recommended', category: 'RecommendedPizza' },
            { id: 2, name: 'Pizzas (50)', category: 'Pizzas' },
            { id: 3, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 4, name: 'Lasagna', category: 'Lasagna' },
            { id: 5, name: 'Sides (3)', category: 'Sides' },
            { id: 6, name: 'Desserts (2)', category: 'Desserts' },
        ],

        2: [
            { id: 1, name: 'Recommended', category: 'Recommended' },
            { id: 2, name: 'Burgers (2)', category: 'Burgers' },
            { id: 3, name: 'Chicken (2)', category: 'Chicken' },
            { id: 4, name: 'Breakfast (1)', category: 'Breakfast' },
            { id: 5, name: 'Sides (3)', category: 'Sides' },
            { id: 6, name: 'Desserts (1)', category: 'Desserts' },
        ],
        3: [
            { id: 1, name: 'Recommended', category: 'Recommended' },
            { id: 2, name: 'Hot Coffee (1)', category: 'HotCoffee' },
            { id: 3, name: 'Cold Brew (1)', category: 'ColdBrew' },
            { id: 4, name: 'Bakery (1)', category: 'Bakery' },
            { id: 5, name: 'Refreshers (1)', category: 'Refreshers' },
            { id: 6, name: 'Frappuccino (1)', category: 'Frappuccino' },
        ],

        4: [
            { id: 1, name: 'Recommended', category: 'Recommended' },
            { id: 2, name: 'Cheeseburger', category: 'Burgers' },
            { id: 3, name: 'Fries', category: 'Sides' },
            { id: 4, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 5, name: 'Iced Tea', category: 'Drinks' },
        ],

        5: [
            { id: 1, name: 'Recommended', category: 'Recommended' },
            { id: 2, name: 'Veggie Pizza', category: 'Pizzas' },
            { id: 3, name: 'Caesar Salad', category: 'Salads' },
            { id: 4, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 5, name: 'Lemonade', category: 'Drinks' },
        ],
        6: [
            { id: 1, name: 'Recommended', category: 'Recommended' },
            { id: 2, name: 'Spaghetti', category: 'Pastas' },
            { id: 3, name: 'Classic Pizzas For Classic Maniacs (10)', category: 'Pizzas' },
            { id: 4, name: 'Garlic Breadsticks', category: 'Sides' },
            { id: 5, name: 'Ice Cream', category: 'Desserts' },
        ],
    };

    useEffect(() => {
        const brandId = parseInt(id);
        if (recommendedItemsById[brandId]) {
            setRecommendedItems(recommendedItemsById[brandId]);
        } else {
            setRecommendedItems([]);
        }


        // Set all items based on brandId
        if (allItems[brandId]) {
            setItems(allItems[brandId]);
        } else {
            setItems([]);
        }

    }, [id]);


    // Handle category selection
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    // Filter items based on selected category
    const filteredItems = Object.values(allItems).flat().filter(item => item.category === selectedCategory);




    const itemsInCart = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (item: { id: number; name: string; price: number }) => {
        dispatch(addItem(item)); // Add item to cart
    };

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id)); // Increment quantity of item in cart
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id)); // Decrement quantity of item in cart
    };



    return (
        <>
            <Stack
                sx={{
                    flexDirection: 'row',
                    '@media (max-width:600px)': {
                        flexDirection: 'column',
                        marginInline: '20px',
                    },


                }}
                spacing={2}
                alignItems="flex-start"
            >
                <Box sx={{ maxWidth: 400, padding: 2, marginLeft: 0 }}>
                    {recommendedItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            selected={selectedIndex === index}
                            onClick={() => handleCategoryClick(item.category)}
                            sx={{
                                minWidth: {
                                    xs: 200,
                                    lg: 300
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: 2,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&.Mui-selected': {
                                    bgcolor: '#FFC300',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                },
                                '&:hover': {
                                    bgcolor: '#FFC300',
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
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
                        '@media (max-width:600px)': {
                            height: '0px',
                            width: '0px',
                        },
                    }}
                />

                <Stack>
                    <Typography variant="h4" sx={{
                        marginBottom: 2, fontWeight: 'bold', marginLeft: {
                            xs: '20px',
                            lg: '30px'
                        },

                    }}>
                        {selectedCategory} {/* Display the selected category */}
                    </Typography>

                    {/* Recommended content */}
                    <Box marginTop="10px" marginInline="70px" sx={{ '@media (max-width:1090px)': { marginInline: '60px' } }}>
                        {filteredItems.map((item, idx) => {
                            const itemInCart = itemsInCart.find((cartItem) => cartItem.id === item.id); // Get the item from cart

                            return (
                                <Stack
                                    key={item.id}
                                    sx={{
                                        flexDirection: { lg: 'row', sm: 'row', md: 'row', '@media (max-width:830px)': 'column', '@media (max-width:780px)': 'column' },
                                        marginBlock: 2,
                                        borderRadius: '10px',
                                        boxShadow: '0 6px 12px 4px rgba(0, 0, 0, 0.3)',
                                        '@media (max-width:600px)': {
                                            padding: '20px'
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        padding={2}
                                        src={item.image} // Loop through the images
                                        sx={{
                                            borderRadius: '10px',
                                            height: { sm: '150px', md: '190px', lg: '200px' },
                                            width: { sm: '150px', md: '190px', lg: '200px' },
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
                                    <Stack sx={{ margin: { md: 2, sm: 1 } }}>
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

                                        {/* Conditional rendering for Add to Cart or quantity adjustment */}
                                        {!itemInCart ? (
                                            <Button
                                                variant="outlined"
                                                sx={{ backgroundColor: '#FFA500', color: 'white' }}
                                                onClick={() => handleAddToCart(item)} // Add item to cart
                                            >
                                                Add To Cart
                                            </Button>
                                        ) : (
                                            <Stack direction="row" spacing={1}>
                                                <Button sx={{ fontWeight: '700', backgroundColor: '#F3F3F3', color: 'black' }} onClick={() => handleDecrement(item.id)}>-</Button>
                                                {/* Display the quantity from the Redux store */}
                                                <Typography sx={{ alignContent: 'center' }}>{itemInCart.quantity}</Typography>
                                                <Button sx={{ backgroundColor: '#FFA500', color: 'white' }} onClick={() => handleIncrement(item.id)}>+</Button>
                                            </Stack>
                                        )}
                                    </Stack>
                                </Stack>
                            );
                        })}
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default OrderOnline;
