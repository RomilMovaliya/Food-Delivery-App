import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Restaurants = () => {

  const { id } = useParams<{ id: string }>();

  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [headline, setHeadline] = useState<string>("");

  // Fetch filtered restaurants based on id
  const getData = async () => {
    const response = await fetch("http://localhost:3001/api/restaurantService/");
    const result = await response.json();

    // Filter data here based on the id param
    filterRestaurants(parseInt(id || '1'), result.data); // Pass result.data to the filter
  };

  // Filter restaurants based on the headline
  const filterRestaurants = (id: number, data: any[]) => {
    let filteredData;
    let headlineText = "";

    switch (id) {
      case 1:
        filteredData = data.filter((restaurant) => restaurant.headline === "Order Online Restaurants");
        headlineText = "Order Online Restaurants";
        break;
      case 2:
        filteredData = data.filter((restaurant) => restaurant.headline === "Dining Restaurants");
        headlineText = "Dining Restaurants";
        break;
      case 3:
        filteredData = data.filter((restaurant) => restaurant.headline === "Nightlife And Clubs Restaurants");
        headlineText = "Nightlife And Clubs Restaurants";
        break;
      default:
        filteredData = data; // Show all if no valid filter is selected
        headlineText = "All Restaurants";
    }


    setFilteredRestaurants(filteredData); // Set the filtered list
    setHeadline(headlineText); // Set the headline text
  };

  useEffect(() => {
    getData(); // Fetch data on initial load
  }, []);

  useEffect(() => {
    getData(); // Fetch again when `id` changes
  }, [id]);

  return (
    <>
      {/* Display the headline for the selected category */}
      <Typography mt={13} marginInline={5} fontWeight={400} fontFamily={'Poppins'} fontSize={30}>
        {headline}
      </Typography>

      {/* Display the filtered restaurants */}
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

        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Box key={restaurant.id} sx={{
              boxShadow: '0 2px 8px 1px rgba(0,0,0,0.2)',
              borderRadius: 5,
              '&:hover': {
                boxShadow: '0 2px 8px 4px rgba(0,0,0,0.4)',
                cursor: 'pointer'
              },
              backgroundColor: 'rgba(236, 238, 246, 1)'
            }}>
              <Link to={`/detailView/${restaurant.id}`} style={{
                textDecoration: 'none', color: 'black', display: 'flex',
                fontFamily: 'Poppins', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <Box component='img' src={restaurant.image} alt="Restaurant Image" sx={{
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
                  alignItems: 'center',
                  fontFamily: 'Poppins',
                }}>
                  <Typography fontFamily={'Poppins'}>{restaurant.location} - </Typography>
                  <Typography fontFamily={'Poppins'}>{restaurant.price}</Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} padding={1}>
                  {restaurant.categories.map((category: string) => (
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
          ))
        ) : (
          <p>No restaurants found for this filter.</p>
        )}
      </Box>
    </>
  );
}

export default Restaurants;
