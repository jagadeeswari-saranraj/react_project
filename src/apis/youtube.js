import axios from 'axios';

const KEY = 'AIzaSyDzBWhBbs9bNGW0gzEN3xvvpFRYiAPwgTs';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});