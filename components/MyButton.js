import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function MyButton({title, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.myButtonWrapper}><Text style={styles.myButton}>{title}</Text></View>
        </Pressable>
    )
}   

styles = StyleSheet.create({
    myButton: {
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 30,
        fontSize: 30,
        color: 'white',
    },
    myButtonWrapper: {
        borderRadius: 10,
        backgroundColor: '#44b7bb',
    }
})

export default MyButton
