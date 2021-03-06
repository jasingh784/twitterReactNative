import React, {useEffect, useState} from 'react'
import { SafeAreaView, TextInput, StyleSheet, ActivityIndicator, StatusBar, Pressable, Text, Image, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import MyButton from '../components/MyButton';
import PostHeader from '../components/PostComponents/PostHeader'
import { createPost } from '../utils/api'
import DrawerHeader from '../components/DrawerHeader';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../firebase/config';


function CreatePostScreen({ navigation }) {

    const [postText, setPostText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState('');
    const [image, setImage] = useState(null);
    const [isPosting, setisPosting] = useState(false);

    useEffect( () => {
        async function getUserId() {
            const userID = await AsyncStorage.getItem('userid'); 
            setLoggedInUser(userID);
            setIsLoading(false);
        }
        getUserId();
    }, []);

    const uploadImage = async() => {
        const storageRef = firebase.storage().ref();
        const response = await fetch(image);
        const blob = await response.blob();

        //push to path
        const snapshot = await storageRef.child('images/' + Date.now()).put(blob)

        console.log('Uploaded', snapshot.totalBytes, 'bytes');
        console.log('file metadata:', snapshot.metadata);
        //get download url
        
        return await snapshot.ref.getDownloadURL()

    }

    const submitPost = async() => {
        setisPosting(true);
        let mediaUrl = null;
        if(image) {
            mediaUrl = await uploadImage();
            console.log("media url", mediaUrl);
        }
        const postId = await createPost({postText, mediaUrl});
        if(postId != 0) {
            setPostText('');
            setImage(null);
            setisPosting(false);
            navigation.navigate("Profile")
        } else {
            setisPosting(false);
            Alert.alert(
                "Failed",
                "Unable to create post. Please try again",
                [
                  {
                    text: 'OK'
                  }
                ]
              )
        }
    }

    const addImage = async() => {
        
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status !== 'granted') {
            alert('Sorry, we need camera roll permissions')
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
        })

        if(!result.cancelled) {
            setImage(result.uri);
        }
    }

    const removeImage = () => {
        setImage(null);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                <StatusBar 
                    barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
                />
                <DrawerHeader navigation={navigation} title="New Post"/>

                {isLoading ? <ActivityIndicator color="#000000" size="large"/> : (
                    <PostHeader author={loggedInUser}/>
                )}

                {isPosting ? <ActivityIndicator color="#000000" size="large"/> : (
                <>
                <TextInput 
                    style={styles.input}
                    onChangeText={setPostText}
                    value={postText}
                    placeholder="Share your thoughts with the world"
                    multiline={true}
                    maxLength={128}
                />

                {image && <Image source={{ uri: image }} style={styles.image} />}

                {!image && (
                <Pressable onPress={addImage} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
                    <Ionicons name="image-outline" size={30} color="black" style={styles.imageIcon}/>
                    <Text>Add Image</Text>
                </Pressable> )}

                {image && (
                <Pressable onPress={removeImage} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
                    <Ionicons name="remove-circle-outline" size={30} color="black" style={styles.imageIcon}/>
                    <Text>Remove Image</Text>
                </Pressable> )}
                
                <MyButton 
                    title='Post'
                    onPress={submitPost}
                />
                </>
                )}
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    input: {
        marginHorizontal: 20,
        fontSize: 20,
        marginVertical: 20,
    },
    imageIcon: {
        marginHorizontal: 10,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    }
})

export default CreatePostScreen