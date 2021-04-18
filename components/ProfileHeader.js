import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PostHeader from './PostComponents/PostHeader'

export default function ProfileHeader({firstname, lastname, joinDate, username, _id}) {
    return (
        <View>
            <Image 
                source={require('../assets/vaporwareImg.png')}
                style={styles.headerImg}
            ></Image>
            <PostHeader author={_id}/> 
            
            <Text style={{margin: 16,}}>Joined {joinDate}</Text>
            <View style={styles.followorView}>
                <Text>Followers: 69</Text>
                <Text>Following: 420</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
        height: 150,
        
    },
    followorView: {
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        marginBottom: 8,
    }
})
