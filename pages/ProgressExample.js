import React, { useEffect, useState } from 'react';
import { Box, Progress, Text, Button } from 'native-base';

export default function ProgressExample() {
  const [progress, setProgress] = useState(0);

  // Función para incrementar el progreso en 10% cada vez
  const incrementProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  // Reinicia el progreso
  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <Box w="80%" mx="auto" mt="10">
      <Text mb="2">Progreso: {progress}%</Text>
      <Progress value={progress} 
      colorScheme="fuchsia" 
      size="2xl" 
      mb="4"/>
      <Button onPress={incrementProgress} colorScheme="blue" mb="2">
        Aumentar Progreso
      </Button>
      <Button onPress={resetProgress} colorScheme="red">
        Reiniciar
      </Button>
    </Box>
  );

  {/** COLORSCHEME de PROGRESS
    *  colorScheme="primary"
    *  colorScheme="secondary"
    *  colorScheme="emerald"
    *  colorScheme="warning"
    *  colorScheme="success"
    *  colorScheme="info"
    *  colorScheme="light"
    *  colorScheme="dark"
    *  colorScheme="fuchsia"
    *  colorScheme="rose"
    *  colorScheme="pink"
    *  colorScheme="violet"
    *  colorScheme="indigo"
    *  colorScheme="cyan"
    *  colorScheme="teal"
    *  colorScheme="purple"
    *  colorScheme="amber"
    *  colorScheme="red"
    *  colorScheme="orange"
    *  colorScheme="yellow"
    *  colorScheme="green"
    *  colorScheme="lime"
    *  colorScheme="blue"
    *  colorScheme="gray"
    *  colorScheme="coolGray"
    *  colorScheme="trueGray"
    *  colorScheme="warmGray"
    */}

  {/** SIZE de PROGRESS
      * size="xs"
      * size="sm"
      * size="md"
      * size="lg"
      * size="xl" 
      * size="2xl"
      */}
}
