import React, { useState } from 'react';
import { NativeBaseProvider, Box, Skeleton, VStack, HStack, Button, Text } from 'native-base';

const SkeletonExample = () => {
    const [loading, setLoading] = useState(true);

    const loadData = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simula una carga de datos de 2 segundos
    };

    return (
        <NativeBaseProvider>
            <Box flex={1} p={4} justifyContent="center" alignItems="center">
                <VStack space={4} w="90%" maxW="400px">
                    {loading ? (
                        <>
                        <Skeleton h="60px" w="100%" />
                        <Skeleton.Text lines={3} />
                        <HStack space={2}>
                        
                        </HStack>
                        </>
                    ) : (
                        <>
                            <Text fontSize="lg">Título cargado</Text>
                            <Text>
                                Este es un texto de ejemplo que se muestra después de cargar los datos.
                            </Text>
                            <HStack space={2}>
                                <Box size="20px" bg="primary.500" rounded="full" />
                                <Box size="20px" bg="primary.500" rounded="full" />
                                <Box size="20px" bg="primary.500" rounded="full" />
                            </HStack>
                        </>
                    )}
                    <Button onPress={loadData}>Cargar Datos</Button>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
};

export default SkeletonExample;
