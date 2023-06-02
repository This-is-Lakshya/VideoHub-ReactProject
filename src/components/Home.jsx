import React from 'react';
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import png from "../assets/png.webp"

const headingOpt = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4"
}

const Home = () => {
  return (
    <Box>
        <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        >
            <Box w={'full'} h={['35vh','100vh']}>
                <Image src={img1}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['1xl','4xl']} {...headingOpt}>
                    Cinematography
                </Heading>
            </Box>
            <Box w={'full'} h={['35vh','100vh']}>
                <Image src={img2}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['1xl','4xl']} {...headingOpt}>
                    Virtual Reality
                </Heading>
            </Box>
            <Box w={'full'} h={['35vh','100vh']}>
                <Image src={img3}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['1xl','4xl']} {...headingOpt}>
                    VR World
                </Heading>
            </Box>
            <Box w={'full'} h={['35vh','100vh']}>
                <Image src={img4}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['1xl','4xl']} {...headingOpt}>
                    Videography
                </Heading>
            </Box>
            <Box w={'full'} h={['35vh','100vh']}>
                <Image src={img5}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['1xl','4xl']} {...headingOpt}>
                    Filmography
                </Heading>
            </Box>
        </Carousel>

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading m={'auto'} textTransform={'uppercase'} py={2} w={'fit-content'} borderBottom={'2px solid'} >Services</Heading>

            <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >

                <Image src={png} h={['40','400']}/>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>

            </Stack>
        </Container>
    </Box>
  )
}

export default Home