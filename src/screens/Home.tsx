import { useState } from "react";

import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

export const Home = () => {
  const [groupSelected, setGroupSelected] = useState("costa");
  const [groups, setGroup] = useState(["costa", "bíceps", "tríceps", "ombro"]);

  return (
    <VStack flex={1} bg="gray.700">
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected === item}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxH={10}
        />
      </HStack>
      <HStack mx={10} mb={5}>
        <Heading fontSize="md" color="gray.200" flex={1}>Exercícios</Heading>
        <Text fontSize="sm" color="gray.200">4</Text>
      </HStack>
    </VStack>
  );
};
