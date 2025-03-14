import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const Hero: React.FC = () => {


    const location = useLocation(); // Get the current location

    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

    const { isLoggedIn } = useSelector((state: RootState) => state.user);

    let authFlag = false;
    let redirectVar = '/auth';
    if (isLoggedIn) {
        authFlag = true;
    }


    if (authFlag === true) {
        redirectVar = '/profile';
        console.log(redirectVar)
    } else {
        console.log(redirectVar);
    }

    // Set colors based on the current route
    const isCategoriesPage = location.pathname === '/categories' || location.pathname.startsWith('/detailView') || location.pathname.startsWith('/search') || location.pathname.startsWith('/categories') || location.pathname.startsWith('/restaurant/') || location.pathname === '/cart' || location.pathname === '/profile' || location.pathname === '/auth' || location.pathname === '/detailView/:id';
    const manuColor = isCategoriesPage ? '#FFC300' : 'white';
    const ProfileColor = isCategoriesPage ? '#FFC300' : 'white';
    const navLinkColor = isCategoriesPage ? '#FFC300' : '#FFC300';
    const iconButtonColor = isCategoriesPage ? '#FFC300' : 'white';


    return (
        <>
            <AppBar position="absolute"
                sx={{
                    zIndex: 2,
                    top: 0,
                    width: '100%',
                    backgroundColor: 'transparent'

                }}>

                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '10px',
                        alignItems: 'center',
                        // Use responsive design to adjust layout on smaller screens
                        flexDirection: { xs: 'column', sm: 'row' }, // Stack items on smaller screens

                    }}>

                    <Typography
                        variant="h6"
                        sx={{

                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '20px',
                            ml: 5,
                            lineHeight: '30px',

                            '@media (max-width:600px)': {  // Equivalent to xs screens
                                marginLeft: '5px'
                            },

                        }}>
                        <NavLink style={{ textDecoration: 'none', color: navLinkColor }} to='/'>Noodletown</NavLink>
                    </Typography>


                    <Box className="navbar" sx={{


                        '@media (max-width:600px)': {  // Equivalent to xs screens
                            marginLeft: '50px'
                        },

                    }}>
                        <ul style={{ display: 'flex', marginRight: '50px', alignItems: 'center' }}>
                            <li style={{ color: 'white', fontFamily: `'Times New Roman', Times, serif`, margin: '15px', listStyle: 'none' }}>
                                <NavLink style={{ textDecoration: 'none', color: manuColor }} to='/categories'>Menu</NavLink>

                            </li>


                            <li style={{ margin: '15px', listStyle: 'none' }}>

                                <NavLink style={{ textDecoration: 'none', color: ProfileColor }} to={redirectVar}>

                                    <IconButton>
                                        <AccountCircle


                                            sx={{
                                                color: ProfileColor,
                                                '.MuiBadge-dot': {
                                                    backgroundColor: '#FFC300', // Set the badge color to yellow
                                                },
                                                '.MuiBadge-standard': {
                                                    backgroundColor: '#FFC300', // Make sure the content badge is yellow too
                                                },
                                            }}
                                        >

                                        </AccountCircle>
                                    </IconButton>
                                </NavLink>
                            </li>

                            <li style={{ margin: '15px', listStyle: 'none' }}>

                                <NavLink style={{ textDecoration: 'none', color: manuColor }} to='/cart'>
                                    <IconButton>
                                        <Badge
                                            badgeContent={cartItemCount}
                                            color='error' // 'error' is still required for the logic, but we will customize the badge itself
                                            sx={{
                                                '.MuiBadge-dot': {
                                                    backgroundColor: '#FFC300', // Set the badge color to yellow
                                                },
                                                '.MuiBadge-standard': {
                                                    backgroundColor: '#FFC300', // Make sure the content badge is yellow too
                                                },
                                            }}
                                        >
                                            <ShoppingCartIcon sx={{ color: iconButtonColor }} />
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                            </li>



                        </ul>
                    </Box>





                </Toolbar>
            </AppBar>







        </>


    )
}

export default Hero
