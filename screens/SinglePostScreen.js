import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Post from '../components/Post';
import { getOnePost } from '../utils/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';


export default function SinglePostScreen({ navigation, route }) {
    //get params
    const {postId} = route.params;
    const [post, setPost] = useState(null)

    const getPost = async() => {
        let response = await getOnePost(postId);
        setPost(response)
    }
    
    useEffect(() => {
        getPost();
    }, [])

    return (
        <SafeAreaView style={{flex: 1,}}>
            {!post ? <Text>Opps. Something went wrong. :(</Text> : (
                <>
                    <Post postText={post.postText} author={post.author} mediaUrl={post.mediaUrl} />
                    <Button mode="contianed" style={styles.replyButton} onPress={() => console.log('pressed')}>
                        <MaterialCommunityIcons name="reply-outline" size={32} color="white" />
                    </Button>
                </>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    replyButton: {
        borderRadius: 50,
        justifyContent: 'center',
        width: 75,
        height: 75,
        backgroundColor: '#EF9186',
        position: 'absolute',
        bottom: 70,
        right: 25,
    }
})
