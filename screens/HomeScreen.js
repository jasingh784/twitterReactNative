import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getAllPosts } from '../utils/authApi'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);

    // useEffect(() => {

    //     setPosts(getAllPosts());

    // }, [])

    return (
        <View>
            <Text>You are logged in</Text>
        </View>
    )
}

export default HomeScreen
