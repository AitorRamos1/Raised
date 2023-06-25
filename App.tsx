const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ListadoV1 from "./screens/ListadoV1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    "SF Pro Display_medium": require("./assets/fonts/SF_Pro_Display_medium.ttf"),
    "SF Pro Text_regular": require("./assets/fonts/SF_Pro_Text_regular.ttf"),
    Gilroy_medium: require("./assets/fonts/Gilroy_medium.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ListadoV1"
              component={ListadoV1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
