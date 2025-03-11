import { Box, Grid, Grid2, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import headerItem1 from '../../assets/Images/DetailViewImg/headerItem1.png';
import headerItem2 from '../../assets/Images/DetailViewImg/headerItem2.png';
import headerItem3 from '../../assets/Images/DetailViewImg/headerItem3.png';
import mcdHeader1 from '../../assets/Images/DetailViewImg/mcdHeader1.jpg';
import mcdHeader2 from '../../assets/Images/DetailViewImg/mcdHeader2.jpg';
import mcdHeader3 from '../../assets/Images/DetailViewImg/mcdHeader3.jpg';
import burgurKing1 from '../../assets/Images/CategoriesImg/burgerKing.jpg';
import burgurKing2 from '../../assets/Images/CategoriesImg/burgerKing2.jpg';
import burgurKing3 from '../../assets/Images/CategoriesImg/burgerKing3.jpg';
import starbuckImg1 from '../../assets/Images/CategoriesImg/starbuckImg1.jpg';
import starbuckImg2 from '../../assets/Images/CategoriesImg/starbuckImg2.jpg';
import starbuckImg3 from '../../assets/Images/CategoriesImg/starbuckImg3.jpg';
import kfc1 from '../../assets/Images/CategoriesImg/kfc1.webp';
import kfc2 from '../../assets/Images/CategoriesImg/kfc2.webp';
import kfc3 from '../../assets/Images/CategoriesImg/kfc3.webp'

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
            image1: burgurKing1,
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
        const barndId = parseInt(id);
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
                marginTop: '70px',
                marginInline: '0px',
                '@media (max-width:600px)': {
                    marginTop: '110px',
                    gap: '5px'
                },
            }}>
                <Box sx={{
                    sm: '100%',
                    md: '30%',
                    lg: '50%'
                }} >
                    <Box component='img' src={selectedBrand?.image1} height='568px' width='100%' />
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
                            gap: '5px',

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
