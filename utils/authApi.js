import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'https://twitter-backend-v2.herokuapp.com/api/user/';

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
    const respJson = await response.json()
    await AsyncStorage.setItem('auth-token', respJson.token);
    await AsyncStorage.setItem('userid', respJson.userID);
    await AsyncStorage.setItem('username', respJson.username);
    await AsyncStorage.setItem('firstname', respJson.firstname);
    await AsyncStorage.setItem('lastname', respJson.lastname);

    console.log(respJson)
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
    
    const userId = await response.json();
    return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const getUserName = async(id) => {
    let url = baseURL + id;
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    
                },
            }
        )
    
    const data = await response.json()
    return {username: data.username, firstname: data.firstname, lastname: data.lastname};
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const getUserInfo = async(id) => {

    let url = baseURL + id;
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    
                },
            }
        )
    
    const data = await response.json()
    return data
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const signOut = async() => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e)
    }
    
    try {
        await AsyncStorage.multiRemove(keys);
    } catch (e) {
        console.log(e)
    }
}


export const getAllPostsByUser = async(id) => {

    let url = baseURL + id + '/posts';
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    
                },
            }
        )
    
    const data = await response.json()
    return data
    } catch (error) {
        console.log(error)
        return false;
    }
}

