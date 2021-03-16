import AsyncStorage from '@react-native-async-storage/async-storage'

export const loginToAccount = async(data) => {
    console.log('inside loginToAccount')
    
    try {
        const response = await fetch('https://twitter-backend-v2.herokuapp.com/api/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    
                },
                body: JSON.stringify(data)
            }
        )
    const token = await response.json()
    await AsyncStorage.setItem('auth-token', token);

    console.log(token)
    return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}


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
        console.log(allPosts)
        return allPosts;

    } catch (error) {
        console.log(error)
    }
}