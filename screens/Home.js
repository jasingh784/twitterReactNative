import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';


const Drawer = createDrawerNavigator();

function Home( { navigation }) {

    return (
        <Drawer.Navigator initialRouteName="Posts">
            <Drawer.Screen name="Posts" component={PostScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default Home
