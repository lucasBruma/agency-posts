
import {
    VStack, 
Text
  } from '@chakra-ui/react'

function Picture({phrase}) {
  return (
    <VStack>
        <Text>{phrase}</Text>
    </VStack>
  )
}

export default Picture
