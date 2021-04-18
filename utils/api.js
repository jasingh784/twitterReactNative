import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'https://twitter-backend-v2.herokuapp.com/api/posts/';

export const getAllPosts = async() => {

    const token = await AsyncStorage.getItem('auth-token');
    token.toString();

    try {
        const response = await fetch('https://twitter-backend-v2.herokuapp.com/api/posts', 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token,
            },
        })

        const allPosts = await response.json();
        return allPosts;

    } catch (error) {
        console.log(error)
    }
}

export const createPost = async(data) => {

    const token = await AsyncStorage.getItem('auth-token');
    token.toString();

    try {
        const response = await fetch('https://twitter-backend-v2.herokuapp.com/api/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token,
            },
            body: JSON.stringify(data),
        })
        const postData = await response.json();
        return postData.postId;
    } catch (error) {
        console.log(error)
    }
}

export const getOnePost = async(id) => {

    let url = baseURL + id;

    const token = await AsyncStorage.getItem('auth-token');
    token.toString();

    try {
        const response = await fetch(url, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token,
            },
        })

        const thePost = await response.json();
        return thePost;

    } catch (error) {
        console.log(error)
    }
}

