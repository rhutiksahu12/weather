import React from 'react'
import { Card, Text, Stack, Image, Heading, CardBody, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import {useCartData} from '../context/CartContext'

const ProductCard = ({ item }) => {

  const { cart, setCart } = useCartData()

  const addToCart = () =>{
    setCart([...cart, data])
    console.log(cart)
  }

  return (

    <Card w='16vw' h='100%' align='center'>
      <CardBody h='75%' align='center'>
        <Image h='40%'
          src={item.image}
          alt={item.title}
          borderRadius='lg' align='center'
        />
        <Stack mt='6' spacing='3'>
          <Heading noOfLines={2}  size='sm'>{item.title}</Heading>

          <Text color='blue.600' fontSize='mdl' align='center'>
           $ {item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter h='auto'>
        <Button variant='solid' colorScheme='teal' onClick={addToCart}>
          Buy now
        </Button>
      </CardFooter>
    </Card>

  )
}

export default ProductCard