import {
  HStack,
  Heading,
  Text,
  VStack
} from "native-base";

export const HistoryCard = () => {
  return (
    <HStack
      bg="gray.600"
      ml={5}
      mr={5}
      mb={2}
      p={4}
      alignItems="center"
      rounded="md">

      <VStack flex={1}>

        <Heading color="white" fontSize="md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="gray.100" numberOfLines={1}>
          Puxada frontal
        </Text>

      </VStack>

      <Text color="gray.100">
        08:56
      </Text>

    </HStack>
  );
};