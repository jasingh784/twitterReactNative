import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, 
  KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';


export default function SignUpScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const onPressSignUp = async() => {
    
    console.log('Signup Pressed');
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
            onChangeText = {setFirstname}
            value={firstname}
            placeholder="First Name"
          />
            
        <TextInput 
            style={styles.input}
            onChangeText = {setLastname}
            value={lastname}
            placeholder="Last Name"
          />

        <TextInput 
            style={styles.input}
            onChangeText = {setEmail}
            value={email}
            placeholder="Email"
          />

        <TextInput 
            style={styles.input}
            onChangeText = {setUsername}
            value={username}
            placeholder="UserName"
          />

          <TextInput 
            style={styles.input}
            onChangeText = {setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Button
            onPress={onPressSignUp}
            title="Sign Up"
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
