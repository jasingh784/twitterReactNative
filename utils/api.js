import AsyncStorage from '@react-native-async-storage/async-storage'

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

        console.log(response);
    } catch (error) {
        console.log(error)
    }
}