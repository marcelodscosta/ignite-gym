import { useContext } from "react";

import { Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

import { AuthContext } from "@contexts/AuthContext";

export const Routes = () => {

  const context = useContext(AuthContext);
  console.log(context);

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
