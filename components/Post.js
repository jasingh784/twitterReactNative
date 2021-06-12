import React, { useState } from 'react'
import { StyleSheet, View, Image, Pressable, Modal, Text } from 'react-native'
import PostFooter from './PostComponents/PostFooter'
import PostHeader from './PostComponents/PostHeader'
import PostBody from './PostComponents/PostBody';


function Post({postText, author, mediaUrl, navigation, postId}) {

    const [fullScreenUrl, setfullScreenUrl] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const onPressImage = () => {
        setModalVisible(true);
    }

    const onPressFullScreenImage = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigation.navigate('SinglePostScreen', {
                    postId: postId,
                })
                }}>
            <PostHeader author={author}/>

            <PostBody postText={postText}/>

            
            {mediaUrl && (
                <Pressable onPress={onPressImage}>
                    <Image source={{ uri: mediaUrl }} style={styles.image} />
                </Pressable>
            )}  

            <Modal 
                animationType='fade'
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable style={styles.fullScreenOverlay} onPress={onPressFullScreenImage}>
                    <Image source={{uri: mediaUrl}} style={styles.fullScreen} />
                </Pressable>
            </Modal>

            <PostFooter />
            </Pressable>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
        marginBottom: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginVertical: 15,
        resizeMode: 'contain',
    },
    fullScreenOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    fullScreen: {
        flex: 1,
        resizeMode: 'contain',
    }
})
export default Post

