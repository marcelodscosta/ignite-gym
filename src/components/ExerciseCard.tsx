import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  exercise: string;
};

export const ExerciseCard = ({ exercise, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} >
      <HStack mx={6} alignItems="center" bg="gray.500" rounded="md" h={83} p={2} mb={3}>
        <Image
          source={{ uri: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg' }}
          alt="Pessoa se exercitando"
          w={16}
          h={16}
          rounded="md"
        />
        <VStack ml={4} flex={1}>
          <Heading color="gray.200" fontSize="lg">{exercise}</Heading>
          <Text color="gray.200" numberOfLines={2}>3 séries x 12 repetições lore</Text>
        </VStack>
        <Icon as={Entypo} name="chevron-right" color="gray.300" size={7} />
      </HStack>
    </TouchableOpacity>
  );
};