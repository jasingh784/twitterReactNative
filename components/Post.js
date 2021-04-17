import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PostFooter from './PostComponents/PostFooter'
import PostHeader from './PostComponents/PostHeader'
import PostBody from './PostComponents/PostBody';


function Post({postText, author}) {
    return (
        <View style={styles.container}>
            <PostHeader author={author}/>

            <PostBody postText={postText}/>

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
    }
})
export default Post

