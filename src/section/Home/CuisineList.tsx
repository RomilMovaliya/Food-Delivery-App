import { Box, Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';
import { cuisineImg1, cuisineImg2, cuisineImg3, dish1, dish2, dish3 } from '../../assets/index'
import { Link } from 'react-router-dom';


interface RestaurantsData {
  id: number;
  name: string;
  image: string;
  description: string;
}

const CuisineList: React.FC = () => {


  const restaurantsData: RestaurantsData[] = [
    {
      id: 1,
      name: 'Order Online',
      image: cuisineImg1,
      description: 'Get your favourite food delivered to your doorstep'
    },
    {
      id: 2,
      name: 'Dinning Out',
      image: cuisineImg2,
      description: 'dine out at your favourite restaurant'
    },
    {
      id: 3,
      name: 'Nightlife and Clubs',
      image: cuisineImg3,
      description: 'enjoy the nightlife and clubs with your friends'
    }
  ];
  return (
    <>
      <section id="items">
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25px',
          marginInline: {
            xs: '30px',
            md: '40px',
            lg: '50px'
          }
        }}>
          <Box
            sx={{
              display: 'flex',
              gap: {
                xs: '10px',
                sm: '20px',
                md: '30px',
                lg: '40px'
              },
              padding: {
                xs: '2px',
                sm: '20px',
                lg: '10px'
              },
              justifyContent: 'flex-start',
              overflowX: 'auto',
              scrollbarWidth: "none",
              whiteSpace: 'nowrap',
              marginInline: {
                sm: '20px',
                md: '60px',
                lg: '50px'
              }

            }}
          >

            {restaurantsData.map((restaurant) => (
              <Box
                key={restaurant.id}
                className="box"
                sx={{
                  width: {
                    xs: '300px',
                    sm: '250px',
                    md: '300px',
                    lg: '400px'
                  },
                  height: {
                    xs: '200px',
                    sm: '160px',
                    md: '210px',
                    lg: '280px'
                  },
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.5s',
                  },
                  borderRadius: '32px',
                  textAlign: 'center',
                  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }} >

                  <Card>
                    <CardMedia
                      component="img"
                      image={restaurant.image}
                      alt={restaurant.name}
                      sx={{
                        height: {
                          xs: '120px',
                          sm: '95px',
                          md: '135px',
                          lg: '200px'
                        },
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ padding: '5px 10px' }}>
                      <Typography variant="h6">{restaurant.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {restaurant.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}

          </Box>
        </Box>
      </section>




      <Box id="best-item" sx={{ marginInline: '114px', }}>
        <Box className="best-item-content" sx={{
          marginTop: '50px', marginInline: {
            xs: '0px',
            sm: '10px',
            md: '25px',
            lg: '34px'
          },

          //   '@media (max-width: 370px)': {

          //     marginInline: '80px',
          // },

        }}>
          <Typography fontSize={38} fontWeight={550} sx={{ color: 'rgba(255, 194, 0, 1)' }}>
            our best delivered cuisines
          </Typography>

          <Typography fontSize={16} fontFamily={'Poppins'} color='rgba(0, 0, 0, 1)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </Typography>



        </Box>






        <Stack direction={"row"} sx={{
          paddingBlock: 3, paddingInline: 3, display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: {
            xs: 'column',
            sm: 'column',
            lg: 'row'
          }
        }}>
          {/* dish item 1 */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={'center'} spacing={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* dish image */}
              <Box component='img' src={dish1} sx={{ objectFit: "cover" }} alt="dish1.jpeg" width={{ xs: 160, lg: 150 }} height={150} borderRadius={100} />


              <Typography fontSize={19} fontFamily={'Poppins'} color='black' textAlign={'center'} fontWeight={400}>Chicken Noodles</Typography>
              {/* line */}

            </Box>
          </Stack>



          <Box sx={{
            height: {
              xs: '50px',
              sm: '50px',
              lg: '2px'

            }, width: {
              xs: '2px',
              sm: '2px',
              lg: '250px'
            }, backgroundColor: 'orange', margin: '10px 30px'
          }}></Box>


          {/* dish item 1 */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={'center'} spacing={3}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* dish image */}
              <img style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} src={dish2} alt="dish1.jpeg" />
              <Typography fontSize={19} fontFamily={'Poppins'} color='black' textAlign={'center'} fontWeight={400}>Chicken Noodles</Typography>
              {/* line */}

            </Container>
          </Stack>

          <Box sx={{
            height: {
              xs: '50px',
              sm: '50px',
              lg: '2px'

            }, width: {
              xs: '2px',
              sm: '2px',
              lg: '250px'
            }, backgroundColor: 'orange', margin: '10px 30px'
          }}></Box>

          {/* dish item 1 */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={'center'} spacing={3}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* dish image */}
              <img style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} src={dish3} alt="dish1.jpeg" />
              <Typography fontSize={19} fontFamily={'Poppins'} color='black' textAlign={'center'} fontWeight={400}>Chicken Noodles</Typography>
              {/* line */}

            </Container>
          </Stack>




        </Stack>


      </Box>
    </>





  );
};

export default CuisineList;
