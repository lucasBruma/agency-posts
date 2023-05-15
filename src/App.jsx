import { useState } from 'react'
import {
Stack
} from '@chakra-ui/react'
import ComponentInput from "./components/ComponentInput"
function App() {

  return (
    <Stack height='100vh' alignItems='center' justifyContent='center'>
      <ComponentInput />
    </Stack>
  )
}

export default App
