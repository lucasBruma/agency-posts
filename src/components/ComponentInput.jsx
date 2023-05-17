import  { useState } from 'react';
import {
    VStack, 
    Heading,
    Input,
    Button
  } from '@chakra-ui/react'

function ComponentInput({setPictures, setHideInput, setShowSpinner}) {
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
      console.log(data.images)
      // build an array which contains in each position a phrase and an image
      const arrayCompleted = data.images.map((phrase, index) => {
        return { image: data.images[index] };
        // return { phrase, image: data.images[index].cover_photo.urls.regular };

      });
      
      setPictures(arrayCompleted)
      setShowSpinner(false)
    } catch (e) {
      console.log(e)
    }
  }

  // async function unsplashApi(){
  //   const apiKey = `h8SbPwlB0HM6V7ANgP1Q-y9MlzvOO3M5XI0CHLK2Wog`
  //   const response = await fetch(`https://api.unsplash.com/search/collections?page=1&query=${text}&per_page=10&client_id=${apiKey}`)
  //   const data = await response.json()
  //   console.log(data)
  // }
  return (
    <VStack paddingX="10rem" spacing={8}>
        <Heading>¿Sobre qué es tu negocio?</Heading>
        <Input placeholder='Ej: Marketing digital' onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={requestApi}>Crear imágenes con IA</Button>
        {/* <Button onClick={unsplashApi}>Boton prueba unsplash api</Button> */}
    </VStack>
  )
}

export default ComponentInput
