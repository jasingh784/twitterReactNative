import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, 
  KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';
import { loginToAccount } from '../utils/authApi'
import MyButton from '../components/MyButton';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async() => {

    //login to account using the info the user entered
    let response = loginToAccount({ email: email.toLowerCase(), password });
    
    if((await response).valueOf()) {
      navigation.navigate('Home')
    } else {
      failedToLoginAlert();
    }
  }

  const validateLogin = () => {
    //currently only validation empty fields
    //TODO add better validation
    if(email === "" || password === "") {
      failedToLoginAlert();
    } else {
      loginUser();
    }
  }

  const failedToLoginAlert = () => {
    Alert.alert(
      "Login Failed",
      "Please enter a valid email and password.",
      [
        {
          text: 'OK'
        }
      ]
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          <View style={styles.formWrapper}>
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

            <MyButton
              onPress={validateLogin}
              title="Login"
            />
            
          </View>

          <View style={styles.createAccountButton}>
            <Button
              onPress={() => navigation.navigate('SignUp')}
              title="Create Account"
              color="#44b7bb"
            />
          </View>

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
    backgroundColor: '#44b7bb',
  },
  formWrapper: {
    backgroundColor: 'white',
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    fontSize:30,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: '100%'

  },
  createAccountButton: {
    backgroundColor: '#E8E8E8',
    width: '90%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 12
  }
});
