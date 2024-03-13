import React from 'react'
import { HStack, Text, Flex } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <>
     <Flex p={3} bg='#4A4731' justify='space-between' position='static' color='white'>
        <HStack spacing={2} ml={10}>
          <Text fontWeight='bold'>Logo</Text>
        </HStack>
        <HStack spacing={5}>
          <Text>Home</Text>
          
          <Text>About us</Text>
        </HStack>
        <HStack spacing={5} mr={10}>
          <Text>Sign in</Text>
          <Text>Cart</Text>
        </HStack>
      </Flex></>
  )
}

export default Navbar