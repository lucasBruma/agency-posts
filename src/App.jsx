import { useState } from 'react'
import {
Stack, Spinner, VStack, Text
} from '@chakra-ui/react'
import ComponentInput from "./components/ComponentInput"
import Gallery from "./components/Gallery"
function App() {
  const [pictures, setPictures] = useState([]);
  const [authorData, setAuthorData] = useState(null)
  const [hideInput , setHideInput] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <Stack height='100vh' alignItems='center' justifyContent='center'>
      {!hideInput &&
            <ComponentInput setPictures={setPictures} setHideInput={setHideInput} setShowSpinner={setShowSpinner} setAuthorData={setAuthorData}/>
      }
      {showSpinner &&
      <VStack spacing={5}>
        <Spinner size='xl' color='blue.500'/>
        <Text>Creating your images. It may take a few minutes.</Text>
      </VStack>
      }
      {hideInput && showSpinner === false &&
        <Gallery pictures={pictures} authorData={authorData} />
      }
    </Stack>
  )
}

export default App
