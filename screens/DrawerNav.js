import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';


const Drawer = createDrawerNavigator();

function DrawerNav( { navigation }) {

    return (
        <Drawer.Navigator initialRouteName="Posts">
            <Drawer.Screen name="Posts" component={PostScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Create Post" component={CreatePostScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
