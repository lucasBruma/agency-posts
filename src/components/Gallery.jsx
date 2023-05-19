import {
   Grid, GridItem
  } from '@chakra-ui/react'

import Picture from "../components/Picture"

function Gallery({pictures, authorData}) {

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6} height='100vh'>
        {pictures.map((picture, index)=>{
            return <GridItem colSpan={1} rowSpan={1} key={index} maxWidth='300px' maxHeight='500px' backgroundColor={'black'} borderRadius='lg' boxShadow='xl' p={5}>
                <Picture image={picture.image} authorData={authorData} index={index}/>
              </GridItem>
        })}
    </Grid>
  )
}

export default Gallery