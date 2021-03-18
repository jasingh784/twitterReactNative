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


export const createNewAccount = async(data) => {
    console.log('inside CreateNewAccount')
    
    try {
        const response = await fetch('https://twitter-backend-v2.herokuapp.com/api/user/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    
                },
                body: JSON.stringify(data)
            }
        )
    
        
    return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}


