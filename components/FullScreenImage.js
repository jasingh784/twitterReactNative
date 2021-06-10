import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'

export default function FullScreenImage({mediaUrl}) {
    const [isLoading, setIsLoading] = useState(true);


    return (
        
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator color="#000000" size="large"/> : (
                <Pressable style={fullScreenOverlay}>
                    <Image 
                        style={styles.fullscreenImage} 
                        source={{uri: mediaUrl}}
                        
                    />
                </Pressable>
            )}
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
