import {
    VStack, 
    Heading,
    Input,
    Button
  } from '@chakra-ui/react'

function ComponentInput() {
  async function requestApi() {  
    const options = {
      method: 'POST',
      body: JSON.stringify({
        text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('http://localhost:3000', options)
      const data = await response.json()
      return data.message
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <VStack paddingX="10rem" spacing={8}>
        <Heading>¿Sobre qué es tu negocio?</Heading>
        <Input placeholder='Ej: Marketing digital'></Input>
        <Button onClick={requestApi}>Crear imágenes con IA</Button>
    </VStack>
  )
}

export default ComponentInput
