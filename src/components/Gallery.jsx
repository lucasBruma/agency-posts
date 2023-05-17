import {
    HStack, 
  } from '@chakra-ui/react'

import Picture from "../components/Picture"

function Gallery({pictures}) {

  return (
    <HStack maxHeight='500px'>
        {pictures.map((picture, index)=>{
            return <Picture image={picture.image} key={index}/>
        })}
    </HStack>
  )
}

export default Gallery