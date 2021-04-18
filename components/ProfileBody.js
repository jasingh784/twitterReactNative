import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getAllPosts } from '../utils/api'; 
import Post from '../components/Post';

export default function ProfileBody() {

    const [userPosts, setUserPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async() => {
        let response = await getAllPosts();
        setUserPosts(response)
        console.log(response)
    }

    useEffect(() => {

        console.log(isLoading);

        getPosts();
        console.log(userPosts)
        console.log(isLoading)

    }, [])

    const renderItem = ({item}) => (
        <Post postText={item.postText} author={item.author}/>
    )


    return (
        <View style={{flex: 1}}>

            <View style={styles.tweetsHeader}><Text style={styles.tweetText}>Tweets</Text></View>

            {isLoading ? <ActivityIndicator size="large" color="#000000" />: (
            <FlatList 
                data={userPosts}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
                onRefresh={() => getPosts()}
                refreshing={isLoading}
            />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    tweetsHeader: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        marginTop: 6,
        marginBottom: 4,
    },
    tweetText: {
        margin: 8,
        fontSize: 18,
        color: '#EF9186',
        fontWeight: 'bold',
    }
})
