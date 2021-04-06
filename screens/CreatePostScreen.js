import React, {useState} from 'react'
import { SafeAreaView, TextInput, StyleSheet, Text } from 'react-native'
import MyButton from '../components/MyButton';
import PostHeader from '../components/PostComponents/PostHeader'
import { createPost } from '../utils/api'

function CreatePostScreen() {

    const [postText, setPostText] = useState('');
    const [charRemaining, setCharRemaining] = useState(128)

    const submitPost = () => {
        createPost({postText});
        
    }

    return (
        <SafeAreaView>
            <PostHeader />
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
