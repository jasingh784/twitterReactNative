import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ProfileHeader() {
    return (
        <View>
            <Image 
                source={require('../assets/vaporwareImg.png')}
                style={styles.headerImg}
            ></Image>
            <Text>User Info: name</Text>
            <Text>User Info: username</Text>
            <Text>User Info: joined Date</Text>
            <Text>User Info: followers</Text>
            <Text>User Info: following</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
        height: 150,
    }
})
