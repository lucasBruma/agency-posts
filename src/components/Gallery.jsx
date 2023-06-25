import { Grid, GridItem, Spinner, Text, VStack } from '@chakra-ui/react'
import Picture from "../components/Picture"
import {useApi} from '../hooks/useApi';
import { useLocation } from "react-router-dom"

function Gallery() {
  const query = new URLSearchParams(useLocation().search)
  const querySearch = query.get('search')  

  const {arrayImages, error, load, data} = useApi(querySearch)

  if(load) return (<VStack spacing={5} h='100vh' justifyContent={'center'}><Spinner size='xl' color='blue.500'/><Text>Creating your images. It may take a few minutes.</Text></VStack>) 

  return (
    <>
    {
    !error && arrayImages.length != 0  &&
      <Grid templateColumns='repeat(4, 1fr)' gap={6} height='100vh'>
      {arrayImages.map((picture, index)=>{
        return <GridItem colSpan={1} rowSpan={1} key={index} maxWidth='300px' maxHeight='500px' backgroundColor={'black'} borderRadius='lg' boxShadow='xl' p={5}>
            <Picture image={picture.image} authorData={data} index={index}/>
          </GridItem>
    })}
    </Grid>
  }
  {
    error || arrayImages.length == 0 &&
    <Text>No images found. Try again</Text>
  }
    </>
  )
}

export default Gallery