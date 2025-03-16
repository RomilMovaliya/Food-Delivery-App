import { Box, Typography } from '@mui/material';
import React from 'react'
import { playstore, appstore, rectangle56 } from '../../assets/index'

const DownloadApp: React.FC = () => {





    return (
        <>


            <Box className="curv-card">
                <Box className="card-img" sx={{
                    left: 0,
                    right: 0,
                    margin: {
                        xs: '20px',
                        sm: '60px',
                        lg: '80px',
                    },
                    // border: '2px solid yellow',
                    paddingBottom: '0px',
                    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2), -3px -3px 6px rgba(0, 0, 0, 0.2)',
                    borderTopLeftRadius: {
                        xs: '90px',
                        lg: '178px'
                    },
                    borderBottomRightRadius: {
                        xs: '90px',
                        lg: '178px'
                    },
                    position: 'absolute',
                    zIndex: 0,  // Set zIndex to 0 or remove it
                }}>
                    <Box component='img' sx={{
                        borderTopLeftRadius: {
                            xs: '120px',
                            lg: '178px'
                        },
                        borderBottomRightRadius: {
                            xs: '120px',
                            lg: '178px'
                        },
                        width: '100%',
                        height: '100%'
                    }} src={rectangle56} alt="" />
                </Box>

                <Box className="content" sx={{
                    position: 'absolute',
                    zIndex: 1,  // Set zIndex to 0 or remove it
                    left: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '40%',
                    height: 'auto',
                    margin: {
                        xs: '25px',
                        sm: '60px',
                        lg: '100px',
                    },
                    marginLeft: {
                        xs: '40px',

                    },
                    marginTop: {
                        xs: '20px',
                        sm: '60px',
                        md: '160px',
                        lg: '150px'
                    },
                    '@media (max-width:899px)': {  // Equivalent to xs screens
                        marginTop: '85px'

                    },
                    '@media (max-width:600px)': {  // Equivalent to xs screens
                        marginTop: '80px'

                    },
                    '@media (max-width:462px)': {  // Equivalent to xs screens
                        marginTop: '40px'

                    },
                    '@media (max-width:360px)': {  // Equivalent to xs screens
                        marginTop: '20px',
                        fontSize: '20px'

                    },

                    textAlign: 'center',
                    padding: {
                        xs: '20px',
                        lg: '40px'
                    },
                    fontSize: {
                        xs: '28px',
                        lg: '68px',
                    },

                    fontWeight: 'bolder'

                }}>
                    <Typography sx={{

                        color: 'black',
                        fontSize: {
                            xs: '20px',
                            sm: '40px',
                            lg: '76px',
                        }, '@media (max-width:320px)': {  // Equivalent to xs screens
                            fontSize: '15px',
                        },
                        marginLeft: {
                            xs: '10px'
                        },


                        lineHeight: 1.4
                    }}  >download our app</Typography>
                    <Box className="appstore-box" sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        '@media (max-width:320px)': {  // Equivalent to xs screens
                            gap: '8px',
                        },
                        margin: {
                            xs: '5px',
                            sm: '10px',
                            lg: '20px',
                        },
                        marginTop: '20px',
                        marginLeft: {
                            xs: '30px'
                        }
                    }}>
                        <Box component='img' src={playstore} alt="" sx={{
                            width: '100%',
                            height: {
                                xs: '30px',
                                sm: '35px',
                                lg: '70px',
                            }
                            , '@media (max-width:320px)': {  // Equivalent to xs screens
                                height: '20px',
                            },
                        }} />
                        <Box component='img' src={appstore} alt="" sx={{
                            width: '100%',
                            height: {
                                xs: '30px',
                                sm: '35px',
                                lg: '70px',
                            }, '@media (max-width:320px)': {  // Equivalent to xs screens
                                height: '20px',
                            },
                        }} />
                    </Box>
                </Box>

            </Box>

        </>
    )
}
export default DownloadApp;


