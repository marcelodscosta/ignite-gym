import { useState } from "react";

import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export const Home = () => {
  const [groups, setGroup] = useState(["costa", "bíceps", "tríceps", "ombro"]);
  const [groupSelected, setGroupSelected] = useState(groups[0]);
  const [exercise, setExercise] = useState(["Puxada frontal", "Rosca direta",]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const handleOpenExerciseDetails = () => {
    navigation.navigate("exercise");
  };

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
          _contentContainerStyle={{ px: 4 }}
          my={10}
          maxH={10}
        />
      </HStack>
      <HStack px={6} mb={5}>
        <Heading fontSize="md" color="gray.200" flex={1}>Exercícios</Heading>
        <Text fontSize="sm" color="gray.200">{exercise.length}</Text>
      </HStack>

      <FlatList
        data={exercise}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (<ExerciseCard exercise={item} onPress={handleOpenExerciseDetails} />)}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
};
