import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { Heading, ScrollView, Skeleton, VStack } from "native-base";

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
          <Skeleton w={33} h={33} rounded="full" isLoaded={isLoaded} />
          {isLoaded && < UserPhoto size={148} source={{ uri: "https://www.github.com/marcelodscosta.png" }} alt="Foto de Perfil" />}
          <TouchableOpacity>
            <Heading fontSize="xl" color="green.500" mt={4}>Alterar Foto</Heading>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
