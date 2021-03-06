import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function PostBody({postText}) {
    return (
        
        <Text style={styles.postBodyStyle}>{postText}</Text>
        
    )
}

const styles = StyleSheet.create({
    postBodyStyle: {
        fontSize: 18,
        marginHorizontal: 20,
        marginTop: 8,
    }
})


export default PostBody
