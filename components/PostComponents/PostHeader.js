import React from 'react'
import { View, StyleSheet, Image, Text, } from 'react-native' 


function PostHeader() {
    return (
        <View style={styles.userInfoView}>
            <Image 
            source={ require('../../assets/defaultAvatar.png') }
            style={{width: 50, height: 50, borderRadius: 50}}
            />
            <Text style={styles.username}>jas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoView: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        marginHorizontal: 20,
    },
    username: {
        margin: 20,
        fontWeight: "bold",
    },
})

export default PostHeader
