import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, } from 'react-native' 
import { getUserName } from '../../utils/authApi'


function PostHeader({author}) {

    const [postAuthor, setPostAuthor] = useState({
        firstname: 'FirstName',
        username: 'Username',
        })

    const getAuthorUserName = async() => {
        let response = await getUserName(author);
        setPostAuthor(response)
    }

    useEffect( () => {
        getAuthorUserName();
    }, [author])


    return (
        <View style={styles.userInfoView}>
            <Image 
            source={ require('../../assets/defaultAvatar.png') }
            style={{width: 50, height: 50, borderRadius: 50, borderColor: '#000', borderWidth: StyleSheet.hairlineWidth,}}
            />
            <View style={styles.usernameView}>
                <Text style={styles.firstname}>{postAuthor.firstname}</Text>
                <Text style={styles.username}>@{postAuthor.username}</Text>
            </View>
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
    firstname: {
        marginLeft: 16,
        fontWeight: 'bold',
    },
    username: {
        marginLeft: 16,
    },
    usernameView: {
        flexDirection: 'column',

    }
})

export default PostHeader
