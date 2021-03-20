import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { getAllPosts } from '../utils/authApi'
import Post from '../components/Post'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);

    // useEffect(() => {

    //     setPosts(getAllPosts());

    // }, [])

    return (
        <SafeAreaView>
            <Post />
        </SafeAreaView>
    )
}

export default HomeScreen
