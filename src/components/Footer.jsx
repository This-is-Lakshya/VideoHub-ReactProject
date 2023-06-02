import { Box, Button, HStack, Heading, Text, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack w={'full'} alignItems={'stretch'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input placeholder='Email Here...' border={'none'} borderRadius={'none'}
                    outline={'none'} _focusVisible={'none'} py={'2'}/>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'}>

                        </AiOutlineSend>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']} >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VideoHub
                </Heading>
                <Text>All Rights Reserved!</Text>
            </VStack>

            <VStack w={'full'} >
                <Heading size={'md'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='purple'>YouTube</Button>
                <Button variant={'link'} colorScheme='purple'>Instagram</Button>
                <Button variant={'link'} colorScheme='purple'>Twitter</Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer