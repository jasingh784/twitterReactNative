import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'

function ProfileScreen( { navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <Text>This is the profile screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ProfileScreen
