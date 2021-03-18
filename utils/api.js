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