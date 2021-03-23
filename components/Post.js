import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PostFooter from './PostComponents/PostFooter'
import PostHeader from './PostComponents/PostHeader'
import PostBody from './PostComponents/PostBody';


function Post({postText}) {
    return (
        <View style={styles.container}>
            <PostHeader />

            <PostBody postText={postText}/>

            <PostFooter />
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
export default Post

