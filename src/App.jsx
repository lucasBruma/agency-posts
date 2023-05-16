import { useState } from 'react'
import {
Stack, Spinner
} from '@chakra-ui/react'
import ComponentInput from "./components/ComponentInput"
import Gallery from "./components/Gallery"
function App() {
  const [pictures, setPictures] = useState([]);
  const [hideInput , setHideInput] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <Stack height='100vh' alignItems='center' justifyContent='center'>
      {!hideInput &&
            <ComponentInput setPictures={setPictures} setHideInput={setHideInput} setShowSpinner={setShowSpinner}/>
      }
      {showSpinner && <Spinner size='xl' color='blue.500'/>}
      <Gallery pictures={pictures} />
    </Stack>
  )
}

export default App
