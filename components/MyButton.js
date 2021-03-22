import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function MyButton({title, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.myButton}>{title}</Text>
        </Pressable>
    )
}   

styles = StyleSheet.create({
    myButton: {
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 30,
        fontSize: 25,
        color: 'white',
        backgroundColor: '#44b7bb',
        borderRadius: 10,
        fontWeight: "bold",
    },
})

export default MyButton
