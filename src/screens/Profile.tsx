import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import * as FileSystem from 'expo-file-system';

import { TouchableOpacity } from "react-native";

import { Heading, ScrollView, Skeleton, VStack, useToast } from "native-base";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export const Profile = () => {

  const [isLoaded, setIsLoaded] = useState(true);
  const [photo, setPhoto] = useState('https://www.github.com/marcelodscosta.png');

  const toast = useToast();

  async function handleSelectImage() {
    setIsLoaded(false);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5)) {
          return toast.show({
            title: "A imagem deve ter no máximo 5MB",
            placement: "top",
            bg: "red.500",
          });
        }
      }
      setPhoto(photoSelected.assets[0].uri);
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoaded(true);
    }

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
          {isLoaded && < UserPhoto size={148} source={{ uri: photo }} alt="Foto de Perfil" />}
          <TouchableOpacity onPress={handleSelectImage}>
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
