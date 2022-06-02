import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import LoginScreen from './components/auth/Login'
import RegisterScreen from './components/auth/Register'
import LogoutScreen from './components/auth/Logout'
import ResetScreen from './components/auth/Reset'

import ProjectsScreen from './components/projects/Projects'
import CreateScreen from './components/projects/Create'
import EditScreen from './components/projects/Edit'
import Constants from "expo-constants";


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <button
        className='btn btn-primary mt-1'
        title="Go to Login"
        onClick={() => navigation.navigate('Login')}
      >GO TO LOGIN</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Register"
        onClick={() => navigation.navigate('Register')}
      >GO TO REGISTER</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Reset"
        onClick={() => navigation.navigate('Reset')}
      >GO TO RESET</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Logout"
        onClick={() => navigation.navigate('Logout')}
      >GO TO LOGOUT</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Projects"
        onClick={() => navigation.navigate('Projects')}
      >GO TO PROJECTS</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Create"
        onClick={() => navigation.navigate('Create')}
      >GO TO CREATE</button>
      <button
        className='btn btn-primary mt-1'
        title="Go to Edit"
        onClick={() => navigation.navigate('Edit')}
      >GO TO EDIT</button>
      
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
      <Toast />
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
