import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import DrawerNav from './screens/DrawerNav';
import SignUpScreen from './screens/SignUpScreen';
import { firebase } from './firebase/config';
import { useEffect } from 'react/cjs/react.development';

const Stack = createStackNavigator();

//pushing to images-freature

export default function App() {

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Anonymous user signed-in.', user);
      } else {
        console.log('There was no anonymous session. Creating a new anonymous user.');
        // Sign the user in anonymously since accessing Storage requires the user to be authorized.
        firebase.auth().signInAnonymously()
          .then(() => {
            console.log("signed in annon")
          })
          .catch(error => {
            console.log(error)
          })
      }
    });
  }, []);
  

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
