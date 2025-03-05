import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Grid2, Stack, Typography } from '@mui/material';
import cuisineImg1 from '../../assets/Images/cuisineImg1.jpg'
import cuisineImg2 from '../../assets/Images/cuisineImg2.jpg'
import cuisineImg3 from '../../assets/Images/cuisineImg3.jpg'
import dish1 from '../../assets/Images/dish1.jpg'
import dish2 from '../../assets/Images/dish2.jpg'
import dish3 from '../../assets/Images/dish3.jpg'

const CuisineList: React.FC = () => {
  return (
    <>
      <section id="items">
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25px',
          marginInline: '20px'
        }}>
          <Box
            sx={{
              display: 'flex',
              gap: {
                xs: '10px',
                sm: '20px',
                md: '30px',
                lg: '50px'
              },
              padding: {
                xs: '10px',
                sm: '20px',
                lg: '10px'
              },
              justifyContent: 'flex-start',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              marginInline: {
                sm: '20px',
                md: '60px',
                lg: '50px'
              }

            }}
          >
            {/* Card 1 */}
            <Box
              className="box"
              sx={{
                height: {
                  xs: '200px',
                  sm: '160px',
                  md: '210px',
                  lg: '280px'
                },

                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.2)',

              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="190px"
                  image={cuisineImg1}
                  alt="Dinning Out 1"
                  sx={{
                    height: {
                      xs: '110px',
                      sm: '105px',
                      md: '125px',
                      lg: '190px'
                    },
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    objectFit: 'cover',

                  }}
                />
                <CardContent sx={{ padding: '20px 10px' }}>
                  <Typography variant="h6">Dinning Out</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore curated lists of top restaurants,
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Card 2 */}
            <Box
              className="box"
              sx={{
                height: {
                  xs: '200px',
                  sm: '160px',
                  md: '210px',
                  lg: '280px'
                },
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.2)',

              }}
            >
              <Card>
                <CardMedia
                  component="img"

                  image={cuisineImg2}
                  alt="Dinning Out 2"
                  sx={{
                    height: {
                      xs: '110px',
                      sm: '105px',
                      md: '125px',
                      lg: '190px'
                    },
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ padding: '20px 10px' }}>
                  <Typography variant="h6">Dinning Out</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore curated lists of top restaurants,
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Card 3 */}
            <Box
              className="box"
              sx={{
                height: {
                  xs: '200px',
                  sm: '190px',
                  md: '210px',
                  lg: '280px'
                },
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.2)',

              }}
            >
              <Card>
                <CardMedia
                  component="img"

                  image={cuisineImg3}
                  alt="Dinning Out 3"
                  sx={{
                    height: {
                      xs: '110px',
                      sm: '105px',
                      md: '125px',
                      lg: '190px'
                    },
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ padding: '20px 10px' }}>
                  <Typography variant="h6">Dinning Out</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore curated lists of top restaurants,
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </section>




      <Box id="best-item" sx={{ marginInline: '124px', }}>
        <Box className="best-item-content" sx={{
          marginTop: '50px', marginInline: {
            xs: '0px',
            sm: '10px',
            md: '25px',
            lg: '124px'
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
