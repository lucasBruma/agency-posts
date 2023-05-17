
import {
    VStack, 
 Image
  } from '@chakra-ui/react'

function Picture({ image}) {
  return (
    <VStack>
        <Image src={image} />
    </VStack>
  )
}

export default Picture
