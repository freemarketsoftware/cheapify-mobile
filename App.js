import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/auth/Login'
import RegisterScreen from './components/auth/Register'
import LogoutScreen from './components/auth/Logout'
import ResetScreen from './components/auth/Reset'

import ProjectsScreen from './components/projects/Projects'
import CreateScreen from './components/projects/Create'
import EditScreen from './components/projects/Edit'


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Go to Reset"
        onPress={() => navigation.navigate('Reset')}
      />
      <Button
        title="Go to Logout"
        onPress={() => navigation.navigate('Logout')}
      />
      <Button
        title="Go to Projects"
        onPress={() => navigation.navigate('Projects')}
      />
      <Button
        title="Go to Create"
        onPress={() => navigation.navigate('Create')}
      />
      <Button
        title="Go to Edit"
        onPress={() => navigation.navigate('Edit')}
      />

    </View>
  );
}

const Stack = createNativeStackNavigator();



export default function App() {

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Reset" component={ResetScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />

        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
