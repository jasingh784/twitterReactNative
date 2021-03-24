import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, View, Text, Button } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'

function PostScreen( { navigation }) {

    const [posts, setPosts] = useState([
        {postbody: 'This is a post', _id: 1},
        {postbody: 'This is a post', _id: 2},
        {postbody: 'This is a post', _id: 3},
        {postbody: 'This is a post', _id: 4},
        {postbody: 'This is a post', _id: 5},
        {postbody: 'This is a post', _id: 6},
        {postbody: 'This is a post', _id: 7},
        {postbody: 'This is a post', _id: 8},
    ]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {

    //     console.log(isLoading);

    //     const getPosts = async() => {
    //         let response = await getAllPosts();
    //         setPosts(response)
    //     }

    //     getPosts();
    // }, [])

    const renderItem = ({item}) => (
        <Post postText={item.postbody}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <View style={styles.header}>
                <Button 
                    title="Open Drawer"
                    onPress={() => navigation.openDrawer()}/>
            </View>
            {isLoading ? <ActivityIndicator size="large" color="#000000" />: (
            <FlatList 
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
            />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 40,
        backgroundColor: '#44b7bb',
    }
})

export default PostScreen
