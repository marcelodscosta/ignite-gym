import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";

import { Button } from "@components/Button";

export const Exercise = () => {

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <VStack flex={1} bg="gray.700" alignItems="center">

      <VStack w="full" bg="gray.600" pt={12} px={6} pb={6}>
        <TouchableOpacity onPress={handleBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={7} />
        </TouchableOpacity>
        <HStack mt={4}>
          <Heading color="gray.100" fontSize="lg" flex={1} flexShrink={1}>Puxada Frontal</Heading>
          <HStack>
            <BodySvg />
            <Text color="gray.100" ml={2}>Costas</Text>
          </HStack>
        </HStack>
      </VStack>
      <VStack px={6} w="full">
        <Image
          source={{ uri: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg' }}
          alt="Pessoa se exercitando"
          w={320}
          h={320}
          rounded="md"
          mt={6}
          mb={6}
        />
        <VStack bg="gray.600" w="full" p={5} rounded="md">
          <HStack justifyContent="space-between" mb={4}>
            <HStack>
              <SeriesSvg />
              <Text color="gray.100" fontSize="md" ml={2}>3 Séries</Text>
            </HStack>
            <HStack>
              <RepetitionsSvg />
              <Text color="gray.100" fontSize="md" ml={2}>12 Repetições</Text>
            </HStack>
          </HStack>
          <Button title="Marcar como realizado" />
        </VStack>
      </VStack>


    </VStack>
  );
};
