import React from 'react'
import { food1, food2, food3 } from '../../assets/index';
import { Box, Typography } from '@mui/material'


const Offers: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: {
            xs: 'row', // Stack vertically on smaller screens
            sm: 'row',    // Align horizontally on larger screens
          },
          gap: {

            xs: '5px',
            sm: '10px',
            lg: '20px',
          },
          margin: { xs: '50px', sm: '50px', md: '200px' },
          marginTop: { md: '60px' },
          '@media (max-width:500px)': {  // Equivalent to xs screens
            margin: '20px'

          },
        }}
      >
        {/* Container 1 - Image with headline */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1, // Adjust flex property to allow more space
            position: 'relative',
            width: '100%', // Ensure full width on small screens
          }}
        >
          {/* Overlay Text */}
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              zIndex: 2,
              fontSize: {
                xs: '24px', // Adjust size for smaller screens
                sm: '30px',
                md: '60px',
                lg: '74px'
              },
              color: 'white',
              fontWeight: 'bolder',
              marginLeft: '5%',
              marginRight: '10%', // Adjust margin for smaller screens
            }}
          >
            buy 2 get 1 free
          </Typography>

          {/* Image */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Box component='img' src={food1}
              alt="Food" sx={{
                width: '100%',
                height: {
                  xs: '310px',
                  sm: '515px',
                  md: '420px',
                  lg: '620px'
                },
                '@media (max-width:500px)': {  // Equivalent to xs screens
                  height: '255px'

                }, '@media (max-width:350px)': {  // Equivalent to xs screens
                  height: '185px'

                },

                borderRadius: '16px',
              }} />
          </Box>
        </Box>

        {/* Container 2 - Two images */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: '0px',
              sm: '10px',
              md: '10px',
              lg: '15px'
            },
            flex: 1,
            width: '100%', // Ensure full width on smaller screens
          }}
        >
          {/* Image 1 */}
          <Box
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Box component='img'
              src={food2}
              alt="Food 2"
              sx={{
                width: '100%',
                height: {
                  xs: '155px',
                  sm: '250px',
                  md: '204px',
                  lg: '300px',
                },
                '@media (max-width:500px)': {  // Equivalent to xs screens
                  height: '125px'

                },
                '@media (max-width:350px)': {  // Equivalent to xs screens
                  height: '90px'

                },
                borderRadius: '16px',
              }}
            />
          </Box>

          {/* Image 2 */}
          <Box
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Box component='img'
              src={food3}
              alt="Food 3"
              sx={{
                width: '100%',
                height: {
                  xs: '155px', // Ensure it stays within screen bounds
                  sm: '250px',
                  md: '204px',
                  lg: '300px',
                },
                '@media (max-width:500px)': {  // Equivalent to xs screens
                  height: '125px'

                }, '@media (max-width:350px)': {  // Equivalent to xs screens
                  height: '90px'

                },
                borderRadius: '16px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Offers
