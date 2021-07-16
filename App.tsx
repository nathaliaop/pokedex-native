import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/pages/RootNavigator";
import { UserProvider } from "./src/context/UserContext";

import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";
import AppLoading from 'expo-app-loading';

import Feed from "./src/pages/Feed";

export default function App() {
  let [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Barlow_300Light_Italic,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });
  
  if (!loaded) return <AppLoading />;

  return (
    <UserProvider>
    <NavigationContainer>
      <StatusBar style="auto" translucent={false} backgroundColor="white" />
      <RootNavigator />
    </NavigationContainer>
  </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});