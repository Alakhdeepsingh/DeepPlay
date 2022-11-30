import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
    const {isOpen,onOpen,onClose} = useDisclosure();
    // useDisclosure is a custom hook used to help handle common open, close, or toggle scenarios. It can be used to control feedback component such as Modal, AlertDialog, Drawer, etc.
    // https://v0.chakra-ui.com/usedisclosure
    return (
        <>
            <Button 
            zIndex={'overlay'}
            pos={'fixed'} 
            top={'4'} 
            left={'4'} 
            colorScheme="purple"
            p={"0"} 
            width={"10"} 
            height={"10"} 
            borderRadius={'full'}
            onClick={onOpen}
        >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>

                <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>DeepPlay</DrawerHeader>

                <DrawerBody>
                    <VStack>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={'/upload video'}>Upload video</Link>
                        </Button>
                    </VStack>

                    <HStack pos={'absolute'}
                    bottom={'10'}
                    left={'0'}
                    w={'full'}
                    justifyContent={'space-evenly'}
                    >
                        <Button colorScheme={'purple'}>
                              <Link to={'/login'}>Login In</Link>
                        </Button>

                         <Button colorScheme={'purple'} variant={'outline'}>
                              <Link to={'/signup'}>Sign Up</Link>
                        </Button>                       

                    </HStack>


                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;