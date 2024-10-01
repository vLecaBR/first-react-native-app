import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider, StatusBar } from 'native-base';

import Principal from './(tabs)/Principal';
import Consultas from './(tabs)/Consultas';
import Explorar from './(tabs)/Explorar';
import Perfil from './(tabs)/Perfil';
import Login from '@/src/Login';
import Cadastro from '@/src/Cadastro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#002851',
  },
  tabBarActiveTintColor: '#339cff',
  tabBarInactiveTintColor: '#FFF',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NativeBaseProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Adicione as telas de Login e Cadastro na pilha */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        {/* O Tab Navigator também é uma tela da pilha */}
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
}
