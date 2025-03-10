import { Box, Container, Grid, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import image1 from '../../assets/Images/image1.jpg'
import SearchIcon from '@mui/icons-material/Search';

const Home: React.FC = () => {
    return (
        <>
            <section style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '400px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>


                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${image1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                />


                <Container>
                    <Typography
                        variant="h1"
                        sx=
                        {{
                            left: '50px',
                            top: 0,
                            color: 'white',
                            fontSize: '3.5rem',
                            fontWeight: 700,
                            marginTop: '20px',
                            textAlign: 'center',
                            '@media (max-width: 600px)': {
                                fontSize: '2.5rem', // Smaller font size for mobile
                            },
                            '@media (max-width: 330px)': {
                                fontSize: '1.5rem', // Adjust font size for smaller screens
                            },
                        }}>
                        NOODLETOWN
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 500,
                            marginTop: '10px',
                            textAlign: 'center',
                            '@media (max-width: 600px)': {
                                fontSize: '1.2rem', // Adjust font size on smaller screens
                            },
                            '@media (max-width: 330px)': {
                                fontSize: '0.8rem', // Adjust font size for smaller screens
                            },
                        }}>
                        Discover best food around you
                    </Typography>

                    <Grid container justifyContent="center" spacing={0} sx={{ marginTop: '20px' }}>
                        <Grid item>
                            <Box
                                sx={{

                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    backgroundColor: '#D9D9D9',
                                    '@media (max-width: 600px)': {
                                        marginLeft: '10px',
                                        width: '90%', // Full width on smaller screens
                                    },

                                    '@media (max-width: 330px)': {
                                        width: '80%', // Make the search container full width on small screens
                                        marginInline: '10px'
                                    },

                                    '@media (max-width: 410px)': {
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        marginLeft: '25px'
                                    }

                                }}
                            >
                                <Select
                                    defaultValue="Surat"
                                    sx={{
                                        backgroundColor: 'white',
                                        height: '40px',
                                        width: '150px',
                                        borderRadius: '4px 0 0 4px', // Rounded left corner
                                        paddingLeft: '10px',

                                        '@media (max-width: 600px)': {
                                            width: '120px', // Adjust width on smaller screens
                                        },
                                        '@media (max-width: 330px)': {
                                            width: '80px', // Adjust width for small screens
                                        },

                                        '@media (max-width: 410px)': {
                                            width: '100%'
                                        }
                                    }}
                                >
                                    <MenuItem value="Surat">Surat</MenuItem>
                                    <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                    <MenuItem value="Vadodara">Vadodara</MenuItem>
                                </Select>

                                <TextField
                                    size="small"
                                    variant="outlined"
                                    placeholder="Search for restaurant, cuisine, place"
                                    sx={{
                                        backgroundColor: 'white',
                                        width: '300px',
                                        height: '40px',
                                        borderRadius: '0 4px 4px 0', // Rounded right corner
                                        paddingLeft: '0px',
                                        '@media (max-width: 330px)': {
                                            fontSize: '12px', // Smaller font size on smaller screens
                                        },

                                        '@media (max-width: 410px)': {
                                            marginInline: '0px',
                                            width: '100%',
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Home
