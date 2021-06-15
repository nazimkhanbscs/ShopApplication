import React from "react";
import AppLoading from 'expo-app-loading'
import { StatusBar } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
} from "@expo-google-fonts/montserrat";


//theme
import { variables } from "./src/constants/theme/index";

//screen
import Home from "./src/pages/home/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          backgroundColor={variables.colors.darkBrown500}
          barStyle="light-content"
        />
        <Home />
      </>
    );
  }
}
