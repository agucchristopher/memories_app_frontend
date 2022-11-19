import axios from 'axios';

const url = 'https://chris-memories-backend.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
    axios.post(url, newPost)
    console.log(newPost)
};
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
