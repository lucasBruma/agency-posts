
import {
    VStack, 
Text, Image
  } from '@chakra-ui/react'

function Picture({phrase, image}) {
  return (
    <VStack>
        <Text>{phrase}</Text>
        <Image src={image} />
    </VStack>
  )
}

export default Picture
