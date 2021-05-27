import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function FullScreenImage({mediaUrl}) {
    return (
        <View style={styles.container}>
            <Pressable style={fullScreenOverlay}>
                <Image style={styles.fullscreenImage} source={{uri: mediaUrl}}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    fullScreenOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        zIndex: 2,
      },
      fullscreenImage: {
        flex: 1,
        resizeMode: 'contain',
      },
})
