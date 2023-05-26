import { VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";

export const Home = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <HomeHeader />
    </VStack>
  );
};
