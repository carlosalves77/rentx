import React, { useCallback } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "./src/screens/Home";
import { CarDetails } from "./src/screens/CarDetails";
import { Scheduling } from "./src/screens/Scheduling";

import theme from "./src/styles/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Scheduling />
      </ThemeProvider>
    </View>
  );
}
