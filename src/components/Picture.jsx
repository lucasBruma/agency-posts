
// import {
//     VStack, 
//  Image, 
//  Text, 
//  Link, Box
//   } from '@chakra-ui/react'


// function Picture({ image, authorData, index}) {
//   return (
//     <VStack maxWidth='200px' pb={10}>
//         <Image src={image} />
//         <VStack>
//             <Text>Foto de <Link fontWeight='bold' href={authorData[index].cover_photo.user.links.html} target='blank'>{authorData[index].cover_photo.user.name}</Link> en <Link href='https://unsplash.com/?utm_source=your_app_name&utm_medium=referral' target='blank'>Unsplash</Link></Text>
//             <Box><a href={image} download>Descarga la imagen aquí</a></Box>
//         </VStack>
//     </VStack>
//   )
// }

// export default Picture

import { VStack, Image, Text, Link, Button } from '@chakra-ui/react';

function downloadImage(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Crea un enlace temporal y configura sus atributos
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;

      // Dispara el clic en el enlace para iniciar la descarga
      link.click();

      // Libera la URL del objeto creado
      URL.revokeObjectURL(link.href);
    });
}

function Picture({ image, authorData, index }) {
  const filename = `image-${index}.jpg`;

  const handleDownload = () => {
    downloadImage(image, filename);
  };

  return (
    <VStack >
      <Link href={`${authorData[index].url}`} target='_blank'>
        <Image src={image} />
      </Link>
      <VStack>
        <Text fontSize='xs' color='gray.500' fontWeight='bold'>
          Photo by{' '}
          <Link fontWeight='bold' href={`${authorData[index].photographer_url}`} target='_blank'>
            {authorData[index].photographer}
          </Link>{' '}
          on{' '}
          <Link href='https://www.pexels.com' target='_blank'>
            Pexels
          </Link>
        </Text>
        <Button onClick={handleDownload}>
          Download here
        </Button>
      </VStack>
    </VStack>
  );
}

export default Picture;