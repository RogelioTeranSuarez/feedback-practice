import React, { useState, useEffect } from "react";
import { Spinner, Center, Box, Text, Button, Heading } from "native-base";

export default function SpinnerExample() {
  const [isLoading, setIsLoading] = useState(false);

  // Función para iniciar la "carga"
  const startLoading = () => {
    setIsLoading(true);
    // Simulamos una operación de carga con un temporizador
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 segundos
  };

  return (
    <Center flex={1}>
      <Box alignItems="center">
        {isLoading ? (
          <>
            <Spinner color="pink.500" size="sm"/>
            <Heading color="green.500" fontSize="sm">
            Cargando contenido, por favor espera...
            </Heading>
          </>
        ) : (
          <Text fontSize="xl" color="gray.800">
            ¡Contenido cargado exitosamente!
          </Text>
        )}
        <Button mt={6} onPress={startLoading} colorScheme="indigo">
          {isLoading ? "Cargando..." : "Cargar contenido"}
        </Button>
      </Box>
    </Center>
  );
}
