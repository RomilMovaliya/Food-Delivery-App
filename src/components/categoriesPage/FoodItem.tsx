import { Box, Button, Stack, Typography } from '@mui/material'
import fc1 from '../../assets/Images/FoodCategoryImg/FC1.png';
import fc2 from '../../assets/Images/FoodCategoryImg/FC2.png';
import fc3 from '../../assets/Images/FoodCategoryImg/FC3.png';
import fc5 from '../../assets/Images/FoodCategoryImg/FC4.png';
import fc4 from '../../assets/Images/FoodCategoryImg/FC5.png';
import fc6 from '../../assets/Images/FoodCategoryImg/FC6.png';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const FoodItem = () => {
    const { id } = useParams<{ id: string }>();

    interface FoodItem {
        id: number,
        name: string,
        image: string,
        price: number,
        description: string,
        overview: string
    }

    const [selectedFoodItem, setSelectedFoodItem] = useState<FoodItem | null>(null);

    const foodItem: FoodItem[] = [
        {
            id: 1,
            name: `Vadapav`,
            image: fc1,
            price: 200,
            description: `bombay's famous vadapav`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        },

        {
            id: 2,
            name: `Panipuri`,
            image: fc2,
            price: 150,
            description: `gujarat's famous Panipuri`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        },

        {
            id: 3,
            name: `Pav Bhaji`,
            image: fc3,
            price: 100,
            description: `south indian's famous Pav Bhaji`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        },

        {
            id: 4,
            name: `Ice-Cream`,
            image: fc4,
            price: 50,
            description: `mumbai's famous Ice-Cream`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        },

        {
            id: 5,
            name: `Sandwich`,
            image: fc5,
            price: 60,
            description: `mumbai's famous Sandwich`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        },

        {
            id: 6,
            name: `Pizza`,
            image: fc6,
            price: 80,
            description: `america's famous pizza`,
            overview: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit sit omnis eius, neque impedit maxime doloremque eveniet ad veniam vel blanditiis. Reiciendis dolor soluta eligendi? Eligendi et ullam doloribus alias voluptas ipsam rem reprehenderit obcaecati, doloremque, ut, totam dolores! Mollitia amet eveniet, quasi fuga voluptate ipsa esse pariatur dolorem commodi voluptatibus praesentium nam aliquam eos quibusdam dicta explicabo saepe! Necessitatibus tenetur, quis qui, esse doloremque architecto natus maiores quos atque eveniet exercitationem consequuntur nemo iusto minima at, placeat quidem? Optio quidem quisquam in cupiditate consequatur iusto. Adipisci minima vel esse doloribus perspiciatis molestiae dolor et accusantium delectus eveniet cupiditate est iusto dolorem quasi rem reiciendis fugiat assumenda deleniti ex, consequatur earum natus aspernatur. Aperiam recusandae debitis, tempora earum, beatae odio alias deserunt dolore provident est at veniam? Voluptatem hic cumque autem, molestiae totam, laboriosam quaerat sequi doloribus explicabo numquam iste, quo aspernatur facere. Dolor unde ex odio, earum corrupti totam adipisci molestiae obcaecati magnam sit exercitationem id, minima excepturi veniam deserunt dolorem esse. Ab quas magni eius ad aspernatur excepturi quod quos? Deleniti nulla est iste fugiat fugit culpa natus veniam, dolores dolor quae neque earum mollitia laudantium blanditiis, et sit, aliquid error illum ratione distinctio quos assumenda consequuntur.`
        }

    ];

    useEffect(() => {
        const barndId = parseInt(id);
        const brand = foodItem.find((item) => barndId === item.id);
        setSelectedFoodItem(brand || null);
    }, [id]);

    return (
        <>
            <Stack direction={{
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row'
            }} spacing={2} sx={{
                justifyContent: 'center', marginTop: {
                    xs: '130px',
                    sm: '130px',
                    md: '100px',
                    lg: '100px',

                }, marginInline: '30px'
            }}>
                <Stack direction='column' spacing={2} >
                    <Box component='img' src={selectedFoodItem?.image} sx={{
                        height: {
                            xs: '200px',
                            sm: '200px',
                            md: '300px',
                            lg: '300px',
                            xl: '300px'
                        },
                        width: {
                            xs: '300px',
                            sm: '300px',
                            md: '400px',
                            lg: '500px',
                        }
                    }} />
                    <Button variant='contained' sx={{ backgroundColor: '#FFC300' }} >Add to Cart</Button>
                </Stack>
                <Box>
                    <Stack direction='column' spacing={2}>

                        <Typography variant='h4' fontWeight='bold'>{selectedFoodItem?.name}</Typography>
                        <Stack direction={'row'} spacing={2}>
                            <Typography variant='h6' color='#999999'>Price:</Typography>
                            <Typography variant='h5' fontWeight={600} color={'black'}>{selectedFoodItem?.price} Rs</Typography>
                        </Stack>
                        <Typography variant='h6' color='#999999'>{selectedFoodItem?.description}</Typography>
                        <Typography color='#999999'>

                            {selectedFoodItem?.
                                overview}
                        </Typography>
                    </Stack >
                </Box>
            </Stack>
        </>
    )
}

export default FoodItem
