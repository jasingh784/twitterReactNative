import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Text } from 'react-native-paper';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { signOut } from '../utils/authApi';


export default function CustomDrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfo}>
                    <Avatar.Image style={styles.avatar}
                        source={require('../assets/defaultAvatar.png')}
                        size={60}
                    />
                    <View styles={styles.avatarName}>
                        <Title style={{marginLeft: 16,}}>Jas</Title>
                        <Text style={{marginLeft: 16,}}>@jas_the_cool</Text>
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
