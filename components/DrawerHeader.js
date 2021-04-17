import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerHeader({ navigation, title }) {
    return (
        <View style={styles.header}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={38} color="#EF9186" style={styles.icons}/>
                </Pressable>

                <Text style={styles.trendingText}>{title}</Text>

                <MaterialCommunityIcons name="duck" size={38} color="#EF9186" style={styles.icons}/>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icons: {
        marginHorizontal: 8,
        marginTop: 6,
    },
    trendingText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EF9186',
    }
})
