import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function PostFooter() {
    return (
        <View style={styles.postFooter}>
            <Text>Likes: 69</Text>
            <Text>Retweets: 420</Text>
            <Text>Shares: 1</Text>
        </View>
    )
}

styles = StyleSheet.create({
    postFooter: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
})
export default PostFooter
