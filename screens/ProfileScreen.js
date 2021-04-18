import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'
import  DrawerHeader from '../components/DrawerHeader';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody';

function ProfileScreen( { navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <DrawerHeader navigation={navigation} title="Profile"/>

            <ProfileHeader />

            <ProfileBody />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ProfileScreen
