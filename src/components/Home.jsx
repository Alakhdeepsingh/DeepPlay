// import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img from '../assests/img.jpg';
// import img3 from '../assests/img3.jpg';

// const Home = () => {
//   return (
//     <Box>
//       <MyCarousel />
//       <Container maxW={'container.xl'} minH={'100vh'} p="16">
        
//         <Heading
//           textTransform={'uppercase'}
//           py="2"
//           w={'fit-content'}
//           //   word comes in middle using m
//           borderBottom={'2px solid'}
//           m="auto"
//         //   word comes in middle using m
//         >
//           Services
//         </Heading>


//         <Stack
//           h="full"
//           p={'4'}
//           alignItems={'center'}
//           direction={['column', 'row']}
//         >
//           <Image src={img3} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

//           <Text
//             letterSpacing={'widest'}
//             lineHeight={'190%'}
//             p={['4', '16']}
//             // padding will be 4 on phone and on big screen it will be 16
//             textAlign={'center'}
//           >
//  DeepPlay launched as a video player on 30 November 2022. 
//  It is is a free and open-source, portable, cross-platform media player software and streaming media server developed by the Alakhdeep Singh. 
//  It featured subtitle support and offline video viewing capabilities.
//  DeepPlay is an World video streaming and video on demand 
//  platform developed by Deep Media & Entertainment . It has many users globally.
//   The platform currently operates on an ad-supported model and has a 
//   streaming library of many hours in many languages. It is
//    available on the web.

// In 2018, Times Internet acquired a majority stake in DeepPlay for $140 million.[5]
//           </Text>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// const headingOptions = {
//   pos: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%,-50%)',
//   textTransform: 'uppercase',
//   p: '4',
//   size: '4xl',
// };

// const MyCarousel = () => (
//   <Carousel
//     autoPlay
//     infiniteLoop
//     interval={1000}
//     showStatus={false}
//     showThumbs={false}
//     showArrows={false}
//   >
//     <Box w="full" h={'100vh'}>
//       <Image src={img} />
//       <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
//         Watch Videos
//       </Heading>
//     </Box>

//     <Box w="half" h={'40vh'}>
//       <Image src={img3} />
//       <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
//         Enjoy life
//       </Heading>
//     </Box>

//     <Box w="full" h={'100vh'}>
//       <Image src={img} />
//       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
//         Learn From mistakes
//       </Heading>
//     </Box>

//     <Box w="full" h={'100vh'}>
//       <Image src={img} />
//       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
//         Future is ready
//       </Heading>
//     </Box>
//   </Carousel>
// );

// export default Home;



import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/img1.jpg';
import img2 from '../assests/img3.jpg';
import img3 from '../assests/img3.jpg';
// import img3 from '../assests/img3.jpg';
// import img3 from '../assests/img3.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img3} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;