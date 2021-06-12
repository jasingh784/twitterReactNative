import React from 'react'
import { View, Text } from 'react-native'

export default function SinglePostScreen({ navigation, route }) {
    //get params
    const {postId} = route.params;
    return (
        <View>
            <Text>This is the single post screen</Text>
            <Text>POst id: {JSON.stringify(postId)}</Text>
        </View>
    )
}
