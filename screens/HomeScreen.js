import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        console.log(isLoading);

        const getPosts = async() => {
            let response = await getAllPosts();
            setPosts(response)
        }

        getPosts();
    }, [])

    const renderItem = ({item}) => (
        <Post postText={item.postbody}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            {isLoading ? <ActivityIndicator size="large" color="#000000" />: (
            <FlatList 
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen
