import {
    HStack, 
  } from '@chakra-ui/react'

import Picture from "../components/Picture"

function Gallery({phrases}) {

  return (
    <HStack maxWidth='500px'>
        {phrases.map((phrase, index)=>{
            return <Picture phrase={phrase} key={index}/>
        })}
    </HStack>
  )
}

export default Gallery