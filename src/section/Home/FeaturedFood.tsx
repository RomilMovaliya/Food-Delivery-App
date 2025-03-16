import { Box, Typography } from '@mui/material'
import { largerpic1 } from '../../assets/index'

const FeaturedFood = () => {
    return (
        <>
            <section id="foods" style={{ marginBlock: '80px' }}  >
                <Box
                    sx={{
                        backgroundImage: `url(${largerpic1})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        width: '100%',
                        height: '540px',
                    }}
                >

                    {/* Overlay with dark background */}
                    <Box sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '540px',
                        background: 'rgba(0, 0, 0, 0.46)',
                    }} />

                    {/* Text content */}
                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 10,
                            width: '100%',
                            top: '50%', // Center text vertically
                            transform: 'translateY(-50%)',
                            paddingLeft: '80px',
                            paddingRight: '40px',
                        }}
                    >


                        <Typography variant='h1'
                            sx={{
                                color: 'white',
                                fontSize: '60px'
                            }}>




                            fastest food <span style={{ color: 'orange' }}>delivery</span> in
                            the town</Typography>

                    </Box>
                </Box>
            </section>


        </>
    )
}

export default FeaturedFood
