import { useState } from "react";

import { Heading, SectionList, Text, VStack } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export const History = () => {
  const [exercise, setExercise] = useState([
    { title: '26.08.22', data: ['Puxada frontal', 'Remada unilateral'] },
    { title: '27.08.22', data: ['Rosca direta', 'Rosca alternada'] },
    { title: '28.08.22', data: ['Rosca martelo', 'Rosca inversa'] },
  ]);
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercise}
        keyExtractor={item => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color="gray.200" fontSize="md" m={4}>{title}</Heading>
        )}
        ListEmptyComponent={() => (<Text color="gray.200" fontSize="md">Não há exercícios registrados ainda. {'\n'} Vamos fazer exercício hoje?</Text>)}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
};
