import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { Dignidades } from "./pantallas/Dignidades"
import { Candidatos } from "./pantallas/Candidatos"
import { Detalle } from "./pantallas/Detalle"
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function A() {
  return <Dignidades></Dignidades>;
}

function DignidadesScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="VotoPensado"
        component={A}
        options={{ tabBarLabel: "Votos" }}
      />
    </HomeStack.Navigator>
  );
}
export default class App extends Component {
  
  
  render(){
    return  <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Dignidades" component={Dignidades}></Tab.Screen>
      <Tab.Screen name="Candidatos" component={Candidatos}></Tab.Screen>
      <Tab.Screen name="Detalle" component={Detalle}></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});