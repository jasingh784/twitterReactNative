import AsyncStorage from '@react-native-async-storage/async-storage'

export const loginToAccount = async(data) => {
    console.log('inside loginToAccount')
    const value = await AsyncStorage.getItem('auth-token');
    value.toString()
    try {
        const response = await fetch('https://twitter-backend-v2.herokuapp.com/api/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'auth-token' : value
                },
                //body: JSON.stringify(data)
            }
        )
    const token = await response.json()
    //await AsyncStorage.setItem('auth-token', token);
    console.log(token)
    } catch (error) {
        console.log(error)
    }
}