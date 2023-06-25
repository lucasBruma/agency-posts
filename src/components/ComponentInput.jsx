import  { useState } from 'react';
import {useNavigate} from "react-router-dom";

import {
    VStack, 
    Heading,
    Input,
    Button
  } from '@chakra-ui/react'

function ComponentInput() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts?search=${text}`)
  }

  return (
    <VStack paddingX="10rem" spacing={8}>
        <Heading>¿What is your Agency about?</Heading>
        <Input placeholder='Eg: Programming' onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleClick}>Build your images with AI</Button>
    </VStack>
  )
}

export default ComponentInput
