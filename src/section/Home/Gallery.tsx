// import { Box, Dialog, DialogActions, DialogContent, Grid, IconButton, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import gridImg1 from '../assets/Images/Rectangle 50.png';
// import gridImg2 from '../assets/Images/Rectangle 51.png';
// import gridImg3 from '../assets/Images/Rectangle 52.png';
// import gridImg4 from '../assets/Images/Rectangle 53.png';
// import gridImg5 from '../assets/Images/Rectangle 54.png';
// import gridImg6 from '../assets/Images/Rectangle 55.png';
// import { Margin, Repeat } from '@mui/icons-material';

// const Gallery: React.FC = () => {

//     const [open, setOpen] = useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     }

//     const handleClose = () => {
//         setOpen(false);
//     }

//     return (
//         <>
//             <section id="social-media">
//                 <Box classNameName="grid-contanier"
//                     sx={{
//                         margin: {
//                             lg: '100px',
//                             md: '80px',
//                             sm: '30px',
//                         },
//                         display: 'grid',
//                         position: 'relative',
//                         gridTemplateColumns: {
//                             sm: 'repeat(2, 1fr)',
//                             lg: 'repeat(3,1fr)',
//                             md: ' repeat(2, 1fr)',

//                         },
//                         gridRowGap: {
//                             lg: '15px',
//                             md: '5px',
//                             sm: '5px'

//                         },
//                         gridColumnGap: {
//                             lg: '20px',
//                             md: '10px',
//                             sm: '10px'
//                         }
//                     }}


//                 >



//                     <Box component='img' src={gridImg1} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />

//                     <Box component='img' src={gridImg2} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />
//                     <Box component='img' src={gridImg3} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />
//                     <Box component='img' src={gridImg4} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />
//                     <Box component='img' src={gridImg5} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />
//                     <Box component='img' src={gridImg6} alt="" sx={{
//                         width: '100%',
//                         justifyContent: 'center',
//                         height: {
//                             lg: '300px',
//                             md: '200px',
//                             sm: '150px'
//                         }
//                     }} />

//                     <Box classNameName="bgcolor" sx={{
//                         position: 'absolute',
//                         zIndex: 0,
//                         width: '100%',
//                         height: '100%',
//                         backgroundColor: 'rgba(25, 31, 44, 0.49)'
//                     }} />

//                     <Box classNameName="inner-grid-container" sx={{
//                         width: '100%',
//                         height: '100%',
//                         position: 'absolute',
//                         zIndex: 1,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}>


//                         <Box classNameName="popup-box" sx={{
//                             width: '50%',
//                             padding: {
//                                 lg: '30px 90px',
//                                 md: '10px 10px',
//                                 sm: '10px 10px'
//                             },
//                             borderRadius: '8px',
//                             color: 'white',
//                             textAlign: 'center',
//                             backgroundColor: 'rgba(246, 183, 22, 1)'
//                         }}>
//                             <Typography sx={{
//                                 fontSize: {
//                                     lg: '25px',
//                                     md: '20px'
//                                 }, color: 'white'
//                             }}  >Follow Us On Instagram To See Pictures Taken By Our Customers</Typography>



//                             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px', alignItems: 'center' }}>
//                                 <IconButton onClick={handleClickOpen}>
//                                     <InstagramIcon sx={{ fontSize: '20px', color: 'white' }} />
//                                 </IconButton>
//                                 <Typography variant="body1" sx={{ fontSize: '20px', color: 'white' }}>
//                                     :@santorins
//                                 </Typography>
//                             </Box>

//                         </Box>
//                     </Box>
//                 </Box>
//             </section>
//         </>
//     )
// }

// export default Gallery

import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
    gridImg1, gridImg2, gridImg3, gridImg4, gridImg5, gridImg6
} from '../../assets/index';

const Gallery: React.FC = () => {
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setOpen(false);
    // }

    return (
        <>
            <section id="social-media">
                <Box className="grid-contanier"
                    sx={{
                        '@keyframes appear': {
                            from: {
                                opacity: 0,
                                transform: 'scale(0.5)',
                            },
                            to: {
                                opacity: 1,
                                transform: 'scale(1)',
                            },
                        },
                        animation: 'appear 1s linear',  // Apply animation
                        margin: {
                            lg: '100px',
                            md: '80px',
                            sm: '30px',
                            xs: '20px'
                        },
                        display: 'grid',
                        position: 'relative',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',  // 2 columns on extra small screens (<=600px)
                            sm: 'repeat(2, 1fr)',  // 2 columns on small screens
                            md: 'repeat(3, 1fr)',  // 3 columns on medium screens
                            lg: 'repeat(3, 1fr)',  // 3 columns on large screens
                        },
                        gridRowGap: {
                            lg: '15px',
                            md: '10px',
                            sm: '5px',
                            xs: '5px',
                        },
                        gridColumnGap: {
                            lg: '20px',
                            md: '15px',
                            sm: '10px',
                            xs: '10px',
                        },
                    }}
                >
                    <Box component='img' src={gridImg1} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />
                    <Box component='img' src={gridImg2} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />
                    <Box component='img' src={gridImg3} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />
                    <Box component='img' src={gridImg4} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />
                    <Box component='img' src={gridImg5} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />
                    <Box component='img' src={gridImg6} alt="" sx={{
                        width: '100%',
                        height: {
                            lg: '300px',
                            md: '250px',
                            sm: '200px',
                            xs: '150px',
                        },
                        objectFit: 'cover',
                    }} />

                    <Box className="bgcolor" sx={{
                        position: 'absolute',
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(25, 31, 44, 0.49)',
                    }} />

                    <Box className="inner-grid-container" sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box className="popup-box" sx={{
                            width: '80%',
                            maxWidth: '600px',
                            padding: {
                                lg: '30px 90px',
                                md: '20px 50px',
                                sm: '15px 30px',
                                xs: '10px 20px',
                            },
                            borderRadius: '8px',
                            color: 'white',
                            textAlign: 'center',
                            backgroundColor: 'rgba(246, 183, 22, 1)',
                        }}>
                            <Typography sx={{
                                fontSize: {
                                    lg: '25px',
                                    md: '20px',
                                    sm: '18px',
                                    xs: '16px',
                                },
                                color: 'white',
                            }}>
                                Follow Us On Instagram To See Pictures Taken By Our Customers
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '20px',
                                gap: '10px',
                                alignItems: 'center',
                            }}>
                                <IconButton >
                                    <InstagramIcon sx={{ fontSize: '24px', color: 'white' }} />
                                </IconButton>
                                <Typography variant="body1" sx={{
                                    fontSize: {
                                        lg: '20px',
                                        md: '18px',
                                        sm: '16px',
                                        xs: '14px',
                                    },
                                    color: 'white',
                                }}>
                                    :@santorins
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </section>
        </>
    );
}

export default Gallery;
