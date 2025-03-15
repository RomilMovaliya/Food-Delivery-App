import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import {
    headerItem1, headerItem2, headerItem3, mcdHeader1, mcdHeader2, mcdHeader3,
    burgurKing2, burgurKing3, starbuckImg1, starbuckImg2, starbuckImg3, kfc1, kfc2, kfc3
} from '../../assets/index';

import { useParams } from 'react-router';


const Header = () => {

    interface HeadersImg {
        id: number,
        image1: string,
        image2: string,
        image3: string
    }

    const { id } = useParams<{ id: string }>();

    const [selectedBrand, setSelectedBrand] = useState<HeadersImg | null>(null);


    const headerImg: HeadersImg[] = [
        {
            id: 1,
            image1: headerItem1,
            image2: headerItem2,
            image3: headerItem3
        },

        {
            id: 2,
            image1: mcdHeader1,
            image2: mcdHeader2,
            image3: mcdHeader3

        },

        {
            id: 3,
            image1: starbuckImg3,
            image2: starbuckImg2,
            image3: starbuckImg1

        },

        {
            id: 4,
            image1: mcdHeader1,
            image2: burgurKing2,
            image3: burgurKing3

        },


        {
            id: 5,
            image1: kfc1,
            image2: kfc2,
            image3: kfc3

        },

        {
            id: 6,
            image1: headerItem1,
            image2: headerItem2,
            image3: headerItem3
        }
    ];


    useEffect(() => {
        const barndId = parseInt(id || '0');
        const brand = headerImg.find((item) => barndId === item.id);
        setSelectedBrand(brand || null);
    }, [id]);


    return (
        <>

            <Stack sx={{
                flexDirection: {
                    lg: 'row',
                    md: 'row',
                    sm: 'row',
                    xs: 'column'
                },
                gap: '8px',
                marginTop: {
                    xs: '70px',
                    lg: '70px',
                    md: '70px',
                    sm: '70px',
                },

                '@media (max-width:600px)': {
                    marginTop: '100px',
                    gap: '0px',

                },
            }}>
                <Box sx={{
                    sm: '100%',
                    md: '30%',
                    lg: '50%',
                    xs: '100%',


                }} >
                    <Box sx={{
                        height: {
                            xs: '300px',
                            lg: '568px',
                            md: '568px',
                            sm: '568px'
                        }
                    }} component='img' src={selectedBrand?.image1} width='100%' />
                </Box>
                <Box width='50%'>
                    <Stack sx={{
                        flexDirection: {
                            lg: 'column',
                            md: 'column',
                            sm: 'column',
                            xs: 'row'
                        },
                        gap: '8px',
                        '@media (max-width:600px)': {
                            gap: '0px',

                        },

                    }}>
                        <Box component='img' src={selectedBrand?.image2} height='280px' width='100%' sx={{
                            '@media (max-width:600px)': {
                                gap: '5px',
                                height: '250px'
                            }
                        }} />
                        <Box component='img' src={selectedBrand?.image3} height='280px' width='100%' sx={{
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
