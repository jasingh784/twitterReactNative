import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, 
  KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';
import { loginToAccount } from '../utils/api'

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const onPressLogin = async() => {
    console.log('inside onPressLogin')
    setIsLoggedIn(await loginToAccount({ email, password }));
    //TODO WORK ON THIS LOGIC. 
    if(isLoggedIn) {
        navigation.navigate('Home');
    } else {
        Alert.alert(
            "Login Failed",
            "Failed to login. Please check email and password.",
            [
                {
                    text: "OK",
                }
            ]
        )
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Login</Text>

          <TextInput 
            style={styles.input}
            onChangeText = {setEmail}
            value={email}
            placeholder="Email"
          />

          <TextInput 
            style={styles.input}
            onChangeText = {setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Button
            onPress={onPressLogin}
            title="Login"
            color="blue"
          />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '80%'
  }
});
