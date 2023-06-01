import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack } from "native-base";

export const History = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Histórico de Exercícios" />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
};
