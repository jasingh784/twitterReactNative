import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Modal, Pressable, TextInput, Keyboard } from 'react-native'
import Post from '../components/Post';
import { getOnePost } from '../utils/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import CreatePost from '../components/CreatePost';


export default function SinglePostScreen({ navigation, route }) {
    //get params
    const {postId} = route.params;
    const [post, setPost] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [replyText, setReplyText] = useState('')

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
                    <Button mode="contianed" style={styles.replyButton} onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons name="reply-outline" size={32} color="white" />
                    </Button>
                    
                </>
            )}
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
                    <View style={styles.replyModal}>
                        
                        <Button 
                            mode="text" 
                            onPress={() => setModalVisible(false)} 
                            color='black'
                            style={styles.modalClose}
                        >
                            <MaterialCommunityIcons name="close" size={24} color="black" />
                        </Button>
                        <Text>Replying to:</Text>
                        <CreatePost />
                        
                    </View>
                </Pressable>
            </Modal>
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
    },
    modalClose: {
        alignSelf: 'flex-end'
    },  
    replyModal: {
        height: '60%',
        margin: 20,
        marginTop: 'auto',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})
