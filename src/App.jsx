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
    <Stack height='100%' alignItems='center' justifyContent='center'>
      {!hideInput &&
            <ComponentInput setPictures={setPictures} setHideInput={setHideInput} setShowSpinner={setShowSpinner} setAuthorData={setAuthorData}/>
      }
      {showSpinner &&
      <VStack spacing={5}>
        <Spinner size='xl' color='blue.500'/>
        <Text>Aguarde un momento. Sus imagenes se están creando!</Text>
      </VStack>
      }
      <Gallery pictures={pictures} authorData={authorData} />
    </Stack>
  )
}

export default App
