import axios from 'axios';

const fetchApi = async (url) => {
    // const instance = axios.create({
    //     baseUrl: 'https://api.shrtco.de/v2/shorten?url=',
    // });
    const baseUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
    // let data;
    // try{
    //     const response = await axios.get(baseUrl);
    //     const data = response.data.result.full_short_link;
    //     return data;
    // } catch (error) {
    //     console.log(error.message)
    // };
    // axios.get(baseUrl).then((response) => { return response });
    // console.log(data)
    // return data;

    // const  response  = await axios.get(baseUrl)
    //     .catch((error) => error)
    // return response;

    try {
        const  response  = await axios.get(baseUrl)
        console.log(response)
        return response;
    } catch(error) {
        return error;
    }
};

export default fetchApi;