import { Box, Grid, Grid2, Stack } from '@mui/material'
import React from 'react'
import headerItem1 from '../../assets/Images/DetailViewImg/headerItem1.png';
import headerItem2 from '../../assets/Images/DetailViewImg/headerItem2.png';
import headerItem3 from '../../assets/Images/DetailViewImg/headerItem3.png';


const Header = () => {
    return (
        <>
            <Stack sx={{
                flexDirection: {
                    lg: 'row',
                    md: 'row',
                    sm: 'row',
                    xs: 'column'
                },
                gap: '10px',
                marginTop: '80px',
                marginInline: '15px',
                '@media (max-width:600px)': {
                    marginTop: '110px',
                    gap: '5px'
                },
            }}>
                <Box width='100%'>
                    <Box component='img' src={headerItem1} height='570px' width='100%' />
                </Box>
                <Box width='50%'>
                    <Stack sx={{
                        flexDirection: {
                            lg: 'column',
                            md: 'column',
                            sm: 'column',
                            xs: 'row'
                        },
                        gap: '10px',
                        '@media (max-width:600px)': {
                            gap: '5px',

                        },

                    }}>
                        <Box component='img' src={headerItem2} height='280px' width='100%' sx={{
                            '@media (max-width:600px)': {
                                gap: '5px',
                                height: '250px'
                            }
                        }} />
                        <Box component='img' src={headerItem3} height='280px' width='100%' sx={{
                            '@media (max-width:600px)': {
                                gap: '5px',
                                height: '250px'
                            }
                        }} />
                    </Stack>

                </Box>
            </Stack>

        </>
    )
}

export default Header
