import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, 
  KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNewAccount } from '../utils/authApi';

export default function SignUpScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false)

  const onPressSignUp = async() => {

    let userId;
    
    //Validation
    if(confirmPassword !== '' && password !== '') {
      if(confirmPassword === password && confirmPassword.length === 6) {
        userId = await createNewAccount({
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            email: email.toLowerCase(),
            username: username.toLowerCase(),
            password: password.toLowerCase(),
          });
      } else {
        Alert.alert(
          'Password Error',
          "Passwords must match",
          [
            {
              Text: 'OK'
            }
          ]
        )
      }
    }
    
    navigation.navigate('Login');
  }

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Platform.OS === 'ios' ? styles.container : null}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          <Text style={styles.title}>Create Account</Text>

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

          <TextInput 
            style={styles.input}
            onChangeText = {setConfirmPassword}
            value={confirmPassword}
            placeholder=" Confirm Password"
            secureTextEntry={true}
          />  

          <Button
            onPress={onPressSignUp}
            title="Sign Up"
            color="blue"
          />
          
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
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
