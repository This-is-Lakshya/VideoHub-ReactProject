import { Button, Container, Text, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading alignSelf={'center'}>Register</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder='Full Name' type='text' required
                focusBorderColor='purple.500' />

                <Input placeholder='Email Address' type='email' required
                focusBorderColor='purple.500' />
                <Input placeholder='Password' type='password' required
                focusBorderColor='purple.500' />

                <Button colorScheme='purple' type='submit'>Sign In</Button>

                <Text textAlign={'right'}>Already have an account? {' '}
                    <Button variant={'link'} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Register