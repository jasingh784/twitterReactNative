import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Text } from 'react-native-paper';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { getUserInfo, signOut } from '../utils/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CustomDrawerContent(props) {

    const [firstName, setFirstName] = useState('Firstname')
    const [username, setUsername] = useState('Username')

    const getUser = async() => {
        const firstname = await AsyncStorage.getItem('firstname');
        const username = await AsyncStorage.getItem('username');
        setFirstName(firstname);
        setUsername(username);
    }

    useEffect( () => {
        getUser();
    })
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfo}>
                    <Avatar.Image style={styles.avatar}
                        source={require('../assets/defaultAvatar.png')}
                        size={60}
                    />
                    <View styles={styles.avatarName}>
                        <Title style={{marginLeft: 16,}}>{firstName}</Title>
                        <Text style={{marginLeft: 16,}}>@{username}</Text>
                    </View>
                </View>
                <DrawerItem
                    icon={() => (<Ionicons name="trending-up" size={24} color="black" />)}
                    label='Trending'
                    onPress={() => {props.navigation.navigate('Trending')}}
                />
                <DrawerItem
                    icon={() => (<AntDesign name="user" size={24} color="black" />)}
                    label='Profile'
                    onPress={() => {props.navigation.navigate('Profile')}}
                />
                <DrawerItem
                    icon={() => (<Ionicons name="create-outline" size={24} color="black" />)}
                    label='Create Post'
                    onPress={() => {props.navigation.navigate('Create Post')}}
                />
                {/* <DrawerItemList {...props} /> */}
                
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={() => (<FontAwesome name="sign-out" size={24} color="black" />)}
                    label='Sign Out'
                    onPress={() => {
                        props.navigation.navigate('Login')
                        signOut()
                    }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 26,
    },
    avatar: {
        marginLeft: 16, 
        marginBottom: 8,
        marginTop: 16,

    },
    avatarName: {
        flexDirection: 'column',
        justifyContent: 'center',
    }
})
