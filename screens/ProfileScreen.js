import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, ActivityIndicator } from 'react-native'
import  DrawerHeader from '../components/DrawerHeader';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody';
import { getUserInfo } from '../utils/authApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileScreen( { navigation }) {

    const [userInfo, setUserInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getUser = async () => {
        const userId = await AsyncStorage.getItem('userid');
        const response = await getUserInfo(userId);
        setUserInfo(response);
        console.log("inside profilescreen")
        console.log(userInfo)
        setIsLoading(false);
    }

    useEffect( () => {
        getUser();
    }, []) 

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />
            <DrawerHeader navigation={navigation} title="Profile"/>

            {isLoading ? <ActivityIndicator color="#000000" size="large"/> : (
            <ProfileHeader 
                firstname={userInfo.firstname}
                lastname={userInfo.lastname}
                username={userInfo.username}
                joinDate={userInfo.createdAt}
                _id={userInfo._id}
            />
            )}
            
            {isLoading ? <ActivityIndicator color="#000000" size="large"/> : (
                <ProfileBody postsArr={userInfo.posts}/>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ProfileScreen
