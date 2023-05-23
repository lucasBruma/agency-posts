import  { useState } from 'react';
import {
    VStack, 
    Heading,
    Input,
    Button
  } from '@chakra-ui/react'

function ComponentInput({setPictures, setHideInput, setShowSpinner, setAuthorData, setShowServerError, setShowQueryError}) {
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
      const response = await fetch('https://api-agencyposts.onrender.com', options)
      const data = await response.json()
      
      if(!data.success){
        setShowServerError(true);
      }
      if(data.success && data.data.length == 0){
        setShowQueryError(true);
      }
      const arrayCompleted = data.images.map((item, index) => {
        return { image: data.images[index] };

      });
      
      setPictures(arrayCompleted)
      setAuthorData(data.data)
      setShowSpinner(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <VStack paddingX="10rem" spacing={8}>
        <Heading>¿What is your Agency about?</Heading>
        <Input placeholder='Eg: Programming' onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={requestApi}>Build your images with AI</Button>
    </VStack>
  )
}

export default ComponentInput
