import React, { useState } from 'react';
import { Button, Center, Alert, VStack, HStack, Text, CloseIcon, IconButton } from 'native-base';

function AlertExample() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center">
        {/* Botón para mostrar la alerta */}
        <Button onPress={() => setShowAlert(true)} colorScheme="teal">
          Mostrar Alerta
        </Button>

        {/* Aquí evalúa showAlert para mostrar la alerta*/}
        {showAlert && (
            <Alert w="100%" status="success" variant="subtle">
            <VStack space={2} flexShrink={1} w="100%">
            <Alert.Icon />
              <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack space={2} alignItems="center">
                  
                  Este es el título de la alerta
                </HStack>
              </HStack>
              <Text>
                Esta es la descripción de la alerta
                </Text>
              <IconButton icon={ <CloseIcon />} 
              onPress={() => setShowAlert(false)} size="3"/>     
            </VStack>
          </Alert>
        )}

        {
          /** STATUS de ALERT
           *  status="success"
           *  status="warning"
           *  status="error"
           *  status="info"
           */
        }

        {
          /** VARIANTS de ALERT
           *  variant="subtle"
           *  variant="solid"
           *  variant="left-accent"
           *  variant="top-accent"
           *  variant="outline"
           *  variant="outline-light"
           */
        }

      </VStack>
    </Center>
  );
}

export default AlertExample;