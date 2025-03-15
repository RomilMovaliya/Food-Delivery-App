import { Box, Stack, Typography } from '@mui/material'
import menu1 from '../../assets/Images/DetailViewImg/menu1.jpg'
import mcdMenu from '../../assets/Images/DetailViewImg/mcdManu.jpg'
const Menu = () => {
    return (
        <>
            <Box sx={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 3, marginInline: {
                    lg: '160px',
                    xs: '30px'
                }
            }}>
                <Box sx={{
                    width: '500px', paddingInline: '30px', '@media (max-width:600px)': {
                        marginLeft: '0px',
                        width: '200px'
                    }
                }}><Typography fontSize={24} fontWeight="200" textAlign={'left'}>Menu</Typography></Box>

                <Stack flexDirection={{
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row'
                }} justifyContent="center" gap={{
                    xs: 3,
                    lg: 3,
                    md: 3,
                    sm: 3
                }} marginTop={2} marginInline={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            src={mcdMenu}
                            height="250px"
                            width="200px"
                            sx={{ borderRadius: '15px' }}
                        />
                        <Typography sx={{ marginTop: 1 }}>Dining Menu</Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            src={menu1}
                            height="250px"
                            width="200px"

                            sx={{ borderRadius: '15px' }}
                        />
                        <Typography sx={{ marginTop: 1 }}>Takeaway Menu</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Menu
