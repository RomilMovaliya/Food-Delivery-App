import { Box, Grid, Stack, Typography } from '@mui/material'
import brand1 from '../../assets/Images/CategoriesImg/brand1.png'
import brand2 from '../../assets/Images/CategoriesImg/brand2.png'
import brand4 from '../../assets/Images/CategoriesImg/brand3.png'
import brand3 from '../../assets/Images/CategoriesImg/brand4.png'
import brand5 from '../../assets/Images/CategoriesImg/brand5.png'
import brand6 from '../../assets/Images/CategoriesImg/brand6.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


const Restaurants = () => {

  const { id } = useParams<{ id: string }>();

  interface RestaurantsItem {
    id: number;
    name: string;
    location: string;
    price: string;
    categories: string[];
    image: string;
    headline?: string;
  }

  const [selectedRestaurantGroup, setSelectedRestaurantGroup] = useState<RestaurantsItem[] | null>(null);

  const restaurants: RestaurantsItem[][] = [
    [
      {
        id: 1,
        name: 'Coffee Culture',
        location: 'vesu, surat',
        price: '₹140',
        headline: 'Order Online Restaurants',
        categories: ['beverages', 'coffee'],
        image: brand1,
      },
      {
        id: 2,
        name: `McDonald's`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand2,
      },
      {
        id: 3,
        name: `Starbucks`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand3,
      },
      {
        id: 4,
        name: `burger king`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand4,
      },
      {
        id: 5,
        name: `KFC`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand5,
      },
      {
        id: 6,
        name: `Coffee Culture`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand6,
      }
    ],
    [
      {
        id: 1,
        name: 'Coffee Culture',
        location: 'vesu, surat',
        price: '₹140',
        headline: 'Dining Restaurants',
        categories: ['beverages', 'coffee'],
        image: brand1,
      },
      {
        id: 2,
        name: `McDonald's`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand2,
      },
      {
        id: 3,
        name: `Starbucks`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand3,
      },
      {
        id: 4,
        name: `burger king`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand4,
      }
    ],
    [
      {
        id: 1,
        name: 'Coffee Culture',
        location: 'vesu, surat',
        price: '₹140',
        headline: 'Nightlife And Clubs Restaurants',
        categories: ['beverages', 'coffee'],
        image: brand1,
      },
      {
        id: 2,
        name: `McDonald's`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand2,
      },
      {
        id: 3,
        name: `Starbucks`,
        location: 'vesu, surat',
        price: '₹140',
        categories: ['beverages', 'coffee'],
        image: brand3,
      }
    ]
  ];

  useEffect(() => {
    const brandId = parseInt(id);
    const brandIndex = brandId - 1;

    // Check if the brandIndex is valid and set the selected restaurant group accordingly
    if (brandIndex >= 0 && brandIndex < restaurants.length) {
      setSelectedRestaurantGroup(restaurants[brandIndex]);
    } else {
      setSelectedRestaurantGroup(null);
    }
  }, [id]);

  return (
    <>

      <Typography mt={13} marginInline={5} fontWeight={400} fontFamily={'Poppins'} fontSize={30}>
        {selectedRestaurantGroup && selectedRestaurantGroup[0]?.headline}
      </Typography>
      <Box mt={3} marginInline={5} marginBottom={5} sx={{
        display: 'grid',
        gridTemplateColumns: {
          sx: 'repeat(1,1fr)',
          sm: 'repeat(2,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(4,1fr)',
        },
        gap: 4,
      }}>

        {selectedRestaurantGroup?.map((restaurant) => (
          <Box key={restaurant.id} sx={{
            boxShadow: '0 2px 8px 1px rgba(0,0,0,0.2)',
            borderRadius: 5,
            '&:hover': {
              boxShadow: '0 2px 8px 4px rgba(0,0,0,0.4)',
              cursor: 'pointer'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(236, 238, 246, 1)'
          }}>
            <Link to={`/detailView/${restaurant.id}`} style={{
              textDecoration: 'none', color: 'black', display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Box component='img' src={restaurant.image} alt="Restaurants" sx={{
                width: '100%',
                height: 'auto',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'all 0.5s ease-in-out',
                  cursor: 'pointer'
                },
                padding: 5,
              }} />
              <Typography fontWeight={700} fontSize={20}>{restaurant.name}</Typography>
              <Stack direction={'row'} spacing={1} paddingBottom={2} sx={{
                color: 'rgba(132, 132, 132, 1)',
                alignItems: 'center'
              }}>
                <Typography>{restaurant.location} - </Typography>
                <Typography>{restaurant.price}</Typography>
              </Stack>

              <Stack direction={'row'} spacing={1} padding={1}>
                {restaurant.categories.map((category) => (
                  <Typography key={category} sx={{
                    backgroundColor: 'rgba(217, 217, 217, 1)',
                    borderRadius: 5,
                    padding: 0.5,
                    paddingInline: 1,
                    color: 'rgba(132, 132, 132, 1)',
                    fontSize: 12
                  }}>{category}</Typography>
                ))}
              </Stack>
            </Link>
          </Box>
        ))}

      </Box>
    </>
  )
}

export default Restaurants;
