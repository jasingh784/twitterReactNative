import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { getAllPosts } from '../utils/authApi'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);

    // useEffect(() => {

    //     setPosts(getAllPosts());

    // }, [])

    return (
        <SafeAreaView>
            <Text>You are logged in</Text>
        </SafeAreaView>
    )
}

export default HomeScreen
