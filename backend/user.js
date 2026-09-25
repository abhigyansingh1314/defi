import axios from 'axios';

export const getUserFromToken = async function (accessToken) {
    try {
        const config = {
            method: "get",
            url: "https://graph.microsoft.com/v1.0/me",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await axios(config);

        const userData = {
            name: response.data.displayName,
            email: response.data.mail,
            rollNumber: response.data.surname,
            branch: response.data.jobTitle
        };

        

        return userData;
    } catch (error) {
        console.error('Error fetching user information:', error);
        return null; // Return null or handle the error appropriately
    }
};
