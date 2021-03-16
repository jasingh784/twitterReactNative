import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getAllPosts } from '../utils/api'

function HomeScreen( { navigation }) {

    const [posts, setPosts] = useState(null);

    useEffect(() => {

        setPosts(getAllPosts());

    }, [])

    return (
        <View>

        </View>
    )
}

export default HomeScreen
