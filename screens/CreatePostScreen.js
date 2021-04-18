import React, {useEffect, useState} from 'react'
import { SafeAreaView, TextInput, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'
import MyButton from '../components/MyButton';
import PostHeader from '../components/PostComponents/PostHeader'
import { createPost } from '../utils/api'
import DrawerHeader from '../components/DrawerHeader';
import AsyncStorage from '@react-native-async-storage/async-storage'


function CreatePostScreen({ navigation }) {

    const [postText, setPostText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState('')

    useEffect( () => {
        async function getUserId() {
            const userID = await AsyncStorage.getItem('user._id');
            setLoggedInUser(userID);
            setIsLoading(false);
        }
        getUserId();
    }, []);

    const submitPost = async() => {
        const postId = await createPost({postText});
        if(postId != 0) {
            setPostText('');
            navigation.navigate("Posts")
        } else {
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

    return (
        <SafeAreaView>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <DrawerHeader navigation={navigation} title="New Post"/>

            {isLoading ? <ActivityIndicator color="#000000" size="large"/> : (
                <PostHeader author={loggedInUser}/>
            )}

            <TextInput 
                style={styles.input}
                onChangeText={setPostText}
                value={postText}
                placeholder="Share your thoughts with the world"
                multiline={true}
                maxLength={128}
            />

            <MyButton 
                title='Post'
                onPress={submitPost}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 20,
        fontSize: 20,
        marginVertical: 20,
    },
})

export default CreatePostScreen
