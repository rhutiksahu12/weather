import React from 'react'
import ProductCard from './ProductCard'
import { Container, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'



const CardContainer = ({ data }) => {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={10}>
        {data?.map((item) => {
          return (
            <GridItem key={item.id} justifySelf='center' >
              <ProductCard item={item} key={item.id} />
            </GridItem>


          )
        })}
      </Grid>
    </>
  )
}

export default CardContainer