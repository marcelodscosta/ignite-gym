import { useState } from "react";

import { HStack, VStack, FlatList } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

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
    </VStack>
  );
};
