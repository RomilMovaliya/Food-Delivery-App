import {
    burger1, burger2, burger3, burger4, burger5,
    chicken1, chicken2, chicken3, chicken4, chicken5,
    desserts1, desserts2, desserts3, desserts4, desserts5,
    lapinoz1, lapinoz2, lapinoz3, sides1, sides2, sides3,
    lasagna1, lasagna2, lasagna3, starbucks1, starbucks2, starbucks3, starbucks4, starbucks5,
    cake1, cake2, cake3, cake4,
    fries1, fries2,
    chickenpc1, chickenpc2, chickenpc3, beverages1, beverages2, beverages3, beverages4,
    coffee1, coffee2, coffee3, coffee4,
    kfcChicken1, kfcChicken2, kfcChicken3, kfcChicken4,
    bread1, bread2, bread3, bread4, bread5, bread6, bread7,
    cafesides1, cafesides2, cafesides3, cafesides4, cafesides5, cafesides6, cafesides7

} from '../assets/index';

export const itemsData = [

    //lapino'z recommended
    { id: 1, name: 'Hot Fudge Sundae', image: desserts3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended`, },
    { id: 2, name: 'McFlurry Oreo ( M )', image: desserts4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended` },
    { id: 3, name: 'Plain Garlic Bread', image: sides1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended` },
    { id: 4, name: 'Cheesy Garlic Bread', image: sides2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended` },
    { id: 5, name: 'Sweet Corns Pizza', image: lapinoz3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended` },
    { id: 6, name: 'Strawberry Sundae', image: desserts5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: `Lapino'z Recommended` },

    //mcdonald's recommended

    {
        id: 7,
        name: 'Treat Combo',
        image: cake1,
        price: 171,
        description: 'Delight in the luxurious pairing of a chocolate jar dessert with a classic cappuccino, combining rich, creamy indulgence with the bold, aromatic flavors of espresso.',
        quantity: 1,
        category: 'McDonald\'s Recommended'
    },


    {
        id: 8,
        name: '9 Pc Chicken Nuggets',
        image: chickenpc2,
        price: 214,
        description: '9 pieces of our iconic crispy, golden fried Chicken McNuggets!',
        quantity: 1,
        category: 'McDonald\'s Recommended'
    },





    { id: 9, name: 'Double Quarter Pounder®* with Cheese', image: burger3, description: 'Two quarter pound 100% beef patties with cheese, onions, pickles, mustard, and ketchup.', price: 250, quantity: 1, category: 'McDonald\'s Recommended' },

    {
        id: 10,
        name: 'Fries (Regular)',
        image: fries2,
        price: 79,
        description: 'World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.',
        quantity: 1,
        category: 'McDonald\'s Recommended'
    },

    { id: 11, name: 'Double Cheeseburger', image: burger5, description: 'Two 100% beef patties with cheese, pickles, onions, mustard, and ketchup.', price: 180, quantity: 1, category: 'McDonald\'s Recommended' },

    //Starbuck's Recommended
    { id: 12, name: 'Pink Drink', image: starbucks5, description: 'A vibrant mix of strawberry açaí and coconut flavors, bursting with refreshing taste.', price: 160, quantity: 1, category: 'Starbuck\'s Recommended' },
    { id: 13, name: 'Caramel Macchiato', image: starbucks2, description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and caramel drizzle.', price: 170, quantity: 1, category: 'Starbuck\'s Recommended' },
    { id: 14, name: 'Butter Croissant', image: starbucks1, description: 'A flaky, buttery pastry that pairs perfectly with your favorite coffee.', price: 170, quantity: 1, category: 'Starbuck\'s Recommended' },
    { id: 15, name: 'Java Chip Frappuccino', image: starbucks3, description: 'A blend of coffee, milk, and ice with mocha sauce and Frappuccino chips, topped with whipped cream.', price: 200, quantity: 1, category: 'Starbuck\'s Recommended' },
    { id: 16, name: 'Strawberry Açaí Refresher', image: starbucks4, description: 'A refreshing blend of sweet strawberry flavors accented by notes of passion fruit and açaí.', price: 150, quantity: 1, category: 'Starbuck\'s Recommended' },



    //BurgerKing's Recommended
    {
        id: 17,
        name: 'Hot Chocolate',
        image: coffee1,
        price: 110,
        description: 'A rich, creamy, and indulgent hot chocolate made with the finest cocoa, perfect for warming up on a chilly day.',
        quantity: 1,
        category: 'BurgerKing Recommended'
    },

    {
        id: 18,
        name: 'Mocha Cappuccino small',
        image: coffee2,
        price: 110,
        description: 'A delightful blend of espresso, steamed milk, and a touch of chocolate syrup, topped with frothy milk foam.',
        quantity: 1,
        category: 'BurgerKing Recommended'
    },
    { id: 19, name: 'Impossible Whopper', image: burger3, description: 'A plant-based patty topped with tomatoes, fresh lettuce, mayonnaise, ketchup, pickles, and onions on a sesame seed bun.', price: 250, quantity: 1, category: 'BurgerKing Recommended' },




    //KFC Recommended
    { id: 22, name: 'Original Recipe Chicken', image: chicken1, description: 'Juicy, tender chicken pieces seasoned with the Colonel\'s secret blend of 11 herbs and spices.', price: 200, quantity: 1, category: 'KFC Recommended' },
    { id: 23, name: 'Zinger Burger', image: chicken2, description: 'A spicy, crispy chicken fillet with lettuce and mayonnaise on a toasted bun.', price: 180, quantity: 1, category: 'KFC Recommended' },
    { id: 24, name: 'Popcorn Chicken', image: chicken3, description: 'Bite-sized pieces of tender, juicy chicken, seasoned and breaded to perfection.', price: 150, quantity: 1, category: 'KFC Recommended' },
    { id: 25, name: 'Chicken Bucket', image: chicken4, description: 'A bucket of our famous Original Recipe chicken, perfect for sharing.', price: 500, quantity: 1, category: 'KFC Recommended' },
    { id: 26, name: 'Chicken Wings', image: chicken5, description: 'Spicy, crispy chicken wings perfect for any meal.', price: 200, quantity: 1, category: 'KFC Recommended' },
    { id: 27, name: 'Spaghetti Carbonara', image: lasagna1, description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', price: 220, quantity: 1, category: 'CoffeeCulture Recommended' },
    { id: 28, name: 'Margherita Pizza', image: lasagna2, description: 'A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.', price: 250, quantity: 1, category: 'CoffeeCulture Recommended' },
    { id: 29, name: 'Garlic Bread', image: lasagna3, description: 'Toasted bread topped with garlic butter and herbs.', price: 100, quantity: 1, category: 'CoffeeCulture Recommended' },
    { id: 30, name: 'Caesar Salad', image: lasagna1, description: 'A classic salad made with romaine lettuce, croutons, and Caesar dressing.', price: 150, quantity: 1, category: 'CoffeeCulture Recommended' },
    { id: 31, name: 'Chocolate Cake', image: lasagna2, description: 'A rich, moist chocolate cake topped with chocolate frosting.', price: 200, quantity: 1, category: 'CoffeeCulture Recommended' },


    { id: 32, name: 'Big Mac®', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Burgers' },
    { id: 33, name: 'Quarter Pounder®* with Cheese', image: burger2, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Burgers' },
    { id: 34, name: 'Double Quarter Pounder®* with Cheese', image: burger3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },
    { id: 35, name: 'Quarter Pounder®* with Cheese Deluxe', image: burger4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },
    { id: 36, name: 'Double Cheeseburger', image: burger5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Burgers' },



    { id: 37, name: 'McCrispy™', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Chicken' },
    { id: 38, name: 'Deluxe McCrispy™', image: burger1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Chicken' },
    { id: 39, name: 'Spicy McCrispy™', image: burger1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
    { id: 40, name: 'Spicy Deluxe McCrispy™', image: burger1, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
    { id: 41, name: 'McChicken®', image: burger1, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Chicken' },
    { id: 42, name: 'Chocolate Overload McFlurry with Oreo Small', image: desserts1, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 140, quantity: 1, category: 'Desserts' },
    { id: 43, name: 'MangoBurst McFlurry with Oreo (M)', image: desserts2, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', price: 150, quantity: 1, category: 'Desserts' },
    { id: 44, name: 'Hot Fudge Sundae', image: desserts3, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
    { id: 45, name: 'McFlurry Oreo ( M )', image: desserts4, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
    { id: 46, name: 'Strawberry Sundae', image: desserts5, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Desserts' },
    { id: 47, name: 'Tomatoes Pizza', image: lapinoz1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Pizzas' },
    { id: 48, name: 'Onions Pizza', image: lapinoz2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Pizzas' },
    { id: 49, name: 'Sweet Corns Pizza', image: lapinoz3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'classic Pizzas' },
    { id: 50, name: 'Plain Garlic Bread', image: sides1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
    { id: 51, name: 'Cheesy Garlic Bread', image: sides2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
    { id: 52, name: 'Paneer Tikka Garlic Bread', image: sides3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Sides' },
    { id: 53, name: 'Veg Lasagna - Rosy Red', image: lasagna1, price: 160, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
    { id: 54, name: 'Veg Lasagna - Pesto', image: lasagna2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
    { id: 55, name: 'Veg Lasagna - Creamy White', image: lasagna3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Lasagna' },
    { id: 56, name: 'Pink Drink', image: starbucks5, price: 160, description: 'A vibrant mix of strawberry açaí and coconut flavors, bursti...', quantity: 1, category: 'ColdBrew' },
    { id: 57, name: 'Caramel Macchiato', image: starbucks2, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'HotCoffee' },
    { id: 58, name: 'Butter Croissant', image: starbucks1, price: 170, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Bakery' },
    { id: 59, name: 'Java Chip Frappuccino', image: starbucks3, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Frappuccino' },
    { id: 60, name: 'Strawberry Açaí Refresher', image: starbucks4, price: 50, description: 'Crispy chicken patty with lettuce, tomato, and creamy mayo on a toasted bun.', quantity: 1, category: 'Refreshers' },



    {
        id: 61,
        name: 'Treat Combo',
        image: cake1,
        price: 171,
        description: 'Delight in the luxurious pairing of a chocolate jar dessert with a classic cappuccino, combining rich, creamy indulgence with the bold, aromatic flavors of espresso.',
        quantity: 1,
        category: 'Cakes Brownies and Cookies'
    },
    {
        id: 62,
        name: 'Chocochip Muffin',
        image: cake2,
        price: 142,
        description: 'Enjoy a dense chocochip muffin, with melty chocolate chips for a choco-lover\'s delight',
        quantity: 1,
        category: 'Cakes Brownies and Cookies'
    },
    {
        id: 63,
        name: 'Choco Crunch Cookie',
        image: cake3,
        price: 95,
        description: 'Grab the choco crunch cookies packed with chocolate chips for the perfect crunch',
        quantity: 1,
        category: 'Cakes Brownies and Cookies'
    },
    {
        id: 64,
        name: 'Refresh Combo',
        image: cake4,
        price: 171,
        description: 'Indulge in the perfect pairing of a brownie with a refreshing iced coffee, combining rich, chocolatey goodness with the cool, invigorating flavors of coffee.',
        quantity: 1,
        category: 'Cakes Brownies and Cookies'
    },

    {
        id: 65,
        name: 'Fries (Large)',
        image: fries1,
        price: 140,
        description: 'World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.',
        quantity: 1,
        category: 'Fries'
    },
    {
        id: 66,
        name: 'Fries (Regular)',
        image: fries2,
        price: 79,
        description: 'World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.',
        quantity: 1,
        category: 'Fries'
    },
    {
        id: 67,
        name: '20 Pc Chicken Nuggets',
        image: chickenpc1,
        price: 422,
        description: '20 pieces of our iconic crispy, golden fried Chicken McNuggets!',
        quantity: 1,
        category: 'Chicken Nuggets'
    },
    {
        id: 68,
        name: '9 Pc Chicken Nuggets',
        image: chickenpc2,
        price: 214,
        description: '9 pieces of our iconic crispy, golden fried Chicken McNuggets!',
        quantity: 1,
        category: 'Chicken Nuggets'
    },
    {
        id: 69,
        name: '4 Pcs Chicken Nuggets',
        image: chickenpc3,
        price: 110,
        description: '4 pieces of our iconic crispy, golden fried Chicken McNuggets!',
        quantity: 1,
        category: 'Chicken Nuggets'
    },

    {
        id: 70,
        name: 'Coca Float',
        image: beverages1,
        price: 110,
        description: 'Coke + Ice Cream= Bliss',
        quantity: 1,
        category: 'Beverages'
    },


    {
        id: 71,
        name: 'Fanta Float',
        image: beverages2,
        price: 110,
        description: 'Fanta + Ice Cream= Bliss',
        quantity: 1,
        category: 'Beverages'
    },

    {
        id: 72,
        name: 'Berry Blast Thick Shake',
        image: beverages3,
        price: 110,
        description: 'Rich Creamy Black Currant Thick Shake',
        quantity: 1,
        category: 'Beverages'
    },

    {
        id: 73,
        name: 'Mango Thick Shake',
        image: beverages4,
        price: 110,
        description: 'Our Signature mango thick shake.',
        quantity: 1,
        category: 'Beverages'
    },


    {
        id: 74,
        name: 'Hot Chocolate',
        image: coffee1,
        price: 110,
        description: 'A rich, creamy, and indulgent hot chocolate made with the finest cocoa, perfect for warming up on a chilly day.',
        quantity: 1,
        category: 'Coffee'
    },

    {
        id: 75,
        name: 'Mocha Cappuccino small',
        image: coffee2,
        price: 110,
        description: 'A smooth and creamy coffee made with espresso and steamed milk, perfect for those who love a mild coffee flavor.',
        quantity: 1,
        category: 'Coffee'
    },

    {
        id: 76,
        name: 'Cafe Latte (Small)',
        image: coffee3,
        price: 110,
        description: 'A spiced, aromatic tea blend made with black tea and a mix of warming spices, served with steamed milk for a rich, flavorful experience.',
        quantity: 1,
        category: 'Coffee'
    },

    {
        id: 77,
        name: 'Masala Chai',
        image: coffee4,
        price: 110,
        description: 'A traditional Indian spiced tea with black tea and a variety of spices, served with steamed milk.',
        quantity: 1,
        category: 'Coffee'
    },


    {
        id: 78,
        name: '1 pc Smoky Red Chicken',
        image: kfcChicken1,
        price: 110,
        description: '1pc smoky grilled chicken',
        quantity: 1,
        category: 'KFCChicken'
    },

    {
        id: 79,
        name: '1 pc Hot & Crispy Chicken',
        image: kfcChicken2,
        price: 110,
        description: 'Get the 1piece Hot & Crispy Chicken',
        quantity: 1,
        category: 'KFCChicken'
    },

    {
        id: 80,
        name: '4pc Hot & Crispy Chicken',
        image: kfcChicken3,
        price: 110,
        description: '4 pcs of signature Hot & crispy chicken at a deal price',
        quantity: 1,
        category: 'KFCChicken'
    },

    {
        id: 81,
        name: '2 pc Hot & Crispy Chickeni',
        image: kfcChicken4,
        price: 110,
        description: 'Get 2 piece Hot & Crispy Chicken',
        quantity: 1,
        category: 'KFCChicken'
    },

    {
        id: 82,
        name: 'Classic Garlic Bread',
        image: bread1,
        price: 110,
        description: 'A classic garlic bread with a crispy, golden crust, loaded with a generous garlic butter spread.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 83,
        name: 'Cheesy Garlic Bread',
        image: bread2,
        price: 110,
        description: 'A flavorful twist on the classic, topped with melted cheese and a rich garlic butter mix.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 84,
        name: 'Herb Garlic Bread',
        image: bread3,
        price: 110,
        description: 'A savory garlic bread infused with a blend of fresh herbs for an aromatic experience.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 85,
        name: 'Garlic Parmesan Bread',
        image: bread4,
        price: 110,
        description: 'Garlic bread topped with a layer of melted parmesan cheese, offering a cheesy, garlicky flavor.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 86,
        name: 'Spicy Garlic Bread',
        image: bread5,
        price: 110,
        description: 'For those who love a little heat, this garlic bread is spiced up with chili flakes and a zesty garlic spread.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 87,
        name: 'Garlic Butter Breadsticks',
        image: bread6,
        price: 110,
        description: 'Soft and fluffy breadsticks drenched in garlic butter, perfect for dipping into your favorite sauce.',
        quantity: 1,
        category: 'Garlic Bread'
    },

    {
        id: 88,
        name: 'Garlic & Olive Oil Bread',
        image: bread7,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Garlic Bread'
    },


    {
        id: 89,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides1,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    // here below 3 data is commented due to image size issue/
    {
        id: 90,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides2,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    {
        id: 91,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides3,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    {
        id: 92,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides4,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    {
        id: 93,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides5,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    {
        id: 94,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides6,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },

    {
        id: 95,
        name: 'Garlic & Olive Oil Bread',
        image: cafesides7,
        price: 110,
        description: 'A rustic garlic bread drizzled with high-quality olive oil and roasted to a perfect crisp.',
        quantity: 1,
        category: 'Cafe Sides'
    },





]