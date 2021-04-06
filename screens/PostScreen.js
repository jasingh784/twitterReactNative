import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, View, Text, Button } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'

function PostScreen( { navigation }) {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async() => {
        let response = await getAllPosts();
        setPosts(response)
    }

    useEffect(() => {

        console.log(isLoading);

        getPosts();
        console.log(posts)
        console.log(isLoading)

    }, [])

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
