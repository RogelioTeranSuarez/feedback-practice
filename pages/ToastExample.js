import React from "react";
import { Button, Center, useToast } from "native-base";
import SkeletonExample from "./SkeletonExample";

export default function ToastAlertExample() {
  const toast = useToast();

  const showToast = () => {
    toast.show({
      render: () => {
        return (
          <Center
            bg="primary.500"
            px={4}
            py={3}
            rounded="md"
            shadow={2}
            _text={{ color: "white", fontWeight: "bold" }}
          >
            Este es un Toast de tipo alerta
          </Center>
        );
      },
      placement: "top", // Cambia a "bottom", "top-left", etc., según prefieras
      duration: 10000, // Duración en milisegundos
    });
  };

  return (
    <Center flex={1}>
      <Button onPress={showToast} colorScheme="blue">
        Mostrar Toast Alerta
      </Button>
    </Center>
  );
}