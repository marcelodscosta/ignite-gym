
import { Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

import { useAuth } from "@hooks/useAuth";

export const Routes = () => {

  const { user } = useAuth();

  console.log(user);

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
