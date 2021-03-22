import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { getAllPosts } from '../utils/authApi'
import Post from '../components/Post'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);

    // useEffect(() => {

    //     setPosts(getAllPosts());

    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <Post />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen
