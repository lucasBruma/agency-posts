import  { useState } from 'react';
import {
    VStack, 
    Heading,
    Input,
    Button
  } from '@chakra-ui/react'

function ComponentInput({setPhrases, setHideInput, setShowSpinner}) {
  const [text, setText] = useState('');

  async function requestApi() {
    setShowSpinner(true)
    setHideInput(true)
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
      const dataDivided = data.message.split('/')
      console.log(dataDivided)
      setPhrases(dataDivided)
      setShowSpinner(false)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <VStack paddingX="10rem" spacing={8}>
        <Heading>¿Sobre qué es tu negocio?</Heading>
        <Input placeholder='Ej: Marketing digital' onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={requestApi}>Crear imágenes con IA</Button>
    </VStack>
  )
}

export default ComponentInput
