import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, } from 'react-native' 
import { getUserName } from '../../utils/authApi'


function PostHeader({author}) {

    const [postAuthor, setPostAuthor] = useState('The author')

    const getAuthorUserName = async() => {
        let response = await getUserName(author);
        setPostAuthor(response)
    }

    useEffect( () => {
        getAuthorUserName();
    }, [])


    return (
        <View style={styles.userInfoView}>
            <Image 
            source={ require('../../assets/defaultAvatar.png') }
            style={{width: 50, height: 50, borderRadius: 50, borderColor: '#000', borderWidth: StyleSheet.hairlineWidth,}}
            />
            <Text style={styles.username}>{postAuthor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoView: {
        flexDirection: "row",
        alignItems: "center",
        margin: 8,
        marginHorizontal: 16,
    },
    username: {
        margin: 16,
        fontWeight: "bold",
    },
})

export default PostHeader
