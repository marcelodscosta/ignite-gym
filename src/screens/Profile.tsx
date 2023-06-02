import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { Heading, ScrollView, Skeleton, VStack } from "native-base";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export const Profile = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  {
    setTimeout(() => {
      setIsLoaded(true)
    }, 5000)
  }
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <VStack alignItems="center">
          <Skeleton
            w={33}
            h={33}
            rounded="full"
            isLoaded={isLoaded}
            startColor="gray.400"
            endColor="gray.300"
          />
          {isLoaded && < UserPhoto size={148} source={{ uri: "https://www.github.com/marcelodscosta.png" }} alt="Foto de Perfil" />}
          <TouchableOpacity>
            <Heading fontSize="xl" color="green.500" mt={4}>Alterar Foto</Heading>
          </TouchableOpacity>
          <VStack w="88%" mt={8}>
            <Input placeholder="Nome" bg="gray.600" />
            <Input keyboardType="email-address" placeholder="E-mail" bg="gray.600" isDisabled />
          </VStack>

          <VStack w="88%" mt={1}>
            <Heading color="gray.100" fontSize="md" alignSelf="flex-start" mb={2}>
              Alterar Senha
            </Heading>
            <Input secureTextEntry placeholder="Senha antiga" bg="gray.600" />
            <Input secureTextEntry placeholder="Nova senha" bg="gray.600" />
            <Button title="Atualizar" />
          </VStack>

        </VStack>

      </ScrollView>
    </VStack>
  );
};
