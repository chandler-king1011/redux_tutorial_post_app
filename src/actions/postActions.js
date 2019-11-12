import axios from 'axios';

import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        });
    })
};

export const createPost = (postData) => dispatch => {
    axios.post("https://jsonplaceholder.typicode.com/posts", postData
 )
    .then(res => {
        dispatch({
            type: NEW_POST,
            payload: res.data
        });
    });
}
