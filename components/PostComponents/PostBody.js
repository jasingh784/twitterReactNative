import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function PostBody({postText}) {
    return (
        
        <Text style={styles.postBodyStyle}>{postText}</Text>
        
    )
}

const styles = StyleSheet.create({
    postBodyStyle: {
        fontSize: 16,
        marginHorizontal: 20
    }
})


export default PostBody
