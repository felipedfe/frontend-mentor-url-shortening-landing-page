import axios from 'axios';

const fetchApi = async (url) => {
    const baseUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
    try {
        const  response  = await axios.get(baseUrl)
        return response;
    } catch(error) {
        return error;
    }
};

export default fetchApi;
