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
  const [showServerError, setShowServerError] = useState(false);
  const [showQueryError, setShowQueryError] = useState(false);

  return (
    <Stack height='100vh' alignItems='center' justifyContent='center' pos='relative'>
      {!hideInput &&
            <ComponentInput setPictures={setPictures} setHideInput={setHideInput} setShowSpinner={setShowSpinner} setAuthorData={setAuthorData} setShowServerError={setShowServerError} setShowQueryError={setShowQueryError}/>
      }
      {showSpinner && !showServerError && !showQueryError &&
      <VStack spacing={5}>
        <Spinner size='xl' color='blue.500'/>
        <Text>Creating your images. It may take a few minutes.</Text>
      </VStack>
      }
      {hideInput && showSpinner === false &&
        <Gallery pictures={pictures} authorData={authorData} />
      }
      {showServerError &&
        <VStack pos='absolute' top='50%'>
          <Text>A server-side error has occurred</Text>
          <Text>Reload the page and try again</Text>
        </VStack>
      }
      {showQueryError &&
        <VStack pos='absolute' top='50%'>
          <Text>Your query might be wrong.</Text>
          <Text>Remember that the word needs to be in English.</Text>
          <Text>Reload the page and try again.</Text>
        </VStack>
      }
    </Stack>
  )
}

export default App
