import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Drawer = createDrawerNavigator();

function DrawerNav( { navigation }) {

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Trending" component={PostScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Create Post" component={CreatePostScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
