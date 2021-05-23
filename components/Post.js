import React, { useState } from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import PostFooter from './PostComponents/PostFooter'
import PostHeader from './PostComponents/PostHeader'
import PostBody from './PostComponents/PostBody';


function Post({postText, author, mediaUrl}) {

    const [fullScreenUrl, setfullScreenUrl] = useState(null);

    const onPressImage = () => {
        setfullScreenUrl(mediaUrl);
    }

    const onPressFullScreenImage = () => {
        setfullScreenUrl(null);
    }

    return (
        <View style={styles.container}>
            <PostHeader author={author}/>

            <PostBody postText={postText}/>

            
            {mediaUrl && (
                <Pressable onPress={onPressImage}>
                    <Image source={{ uri: mediaUrl }} style={styles.image} />
                </Pressable>
            )} 
            
            {fullScreenUrl && (
                <Pressable onPress={onPressFullScreenImage}>
                    <Image source={{ uri: fullScreenUrl }} style={styles.fullScreen} />
                </Pressable>
            )} 


            <PostFooter />
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
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 15,
    },
    fullScreen: {
        flex: 1,
        resizeMode: 'contain',
    }
})
export default Post

