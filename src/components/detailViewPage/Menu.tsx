import { Box, Stack, Typography } from '@mui/material'
import menu1 from '../../assets/Images/DetailViewImg/menu1.jpg'
const Menu = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
                <Box sx={{ width: '500px', paddingInline: '30px' }}><Typography fontSize={24} fontWeight="200" textAlign={'left'}>Menu</Typography></Box>

                <Stack direction="row" spacing={3} justifyContent="center" marginTop={2}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            src={menu1}
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
                        <Typography sx={{ marginTop: 1 }}>Dining Menu</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Menu
