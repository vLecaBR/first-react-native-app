import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login";
import Principal from "../app/(tabs)/Principal"; 

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}  // Esconde o header no login
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}  // Esconde o header no cadastro
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerShown: false }}  // Esconde o header na tela principal
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
