import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};

type AppNavigatorRoutesPrpps = BottomTabNavigationProp<AppRoutes>;

const { Screen, Navigator } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
};
