import { useState } from 'react'
import {
Stack
} from '@chakra-ui/react'
import ComponentInput from "./components/ComponentInput"
import Gallery from "./components/Gallery"
function App() {
  const [phrases, setPhrases] = useState([]);
  const [hideInput , setHideInput] = useState(false);
  return (
    <Stack height='100vh' alignItems='center' justifyContent='center'>
      {!hideInput &&
            <ComponentInput setPhrases={setPhrases} setHideInput={setHideInput} />
      }

      <Gallery phrases={phrases} />
    </Stack>
  )
}

export default App
