import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, View, Pressable, Text } from 'react-native'
import { getAllPosts } from '../utils/api'
import Post from '../components/Post'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function PostScreen( { navigation }) {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async() => {
        let response = await getAllPosts();
        setPosts(response)
        console.log(response)
    }

    useEffect(() => {

        console.log(isLoading);

        getPosts();
        console.log(posts)
        console.log(isLoading)

    }, [])

    const renderItem = ({item}) => (
        <Post postText={item.postText} author={item.author}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle= {Platform.OS === 'ios' ? "dark-content": 'default'}
            />

            <View style={styles.header}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={38} color="#EF9186" style={styles.burger}/>
                </Pressable>

                <Text style={styles.trendingText}>Trending</Text>

                <MaterialCommunityIcons name="duck" size={38} color="#EF9186" style={styles.burger}/>
            </View>

            {isLoading ? <ActivityIndicator size="large" color="#000000" />: (
            <FlatList 
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
                onRefresh={() => getPosts()}
                refreshing={isLoading}
            />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    burger: {
        marginHorizontal: 8,
        marginTop: 6,
    },
    trendingText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EF9186',
    }
})

export default PostScreen
