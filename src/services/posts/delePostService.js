import axios from 'axios';

export const deletePostService = async (postId, token) => {
  const POSTS_ENDPOINT = `https://wall-app-api.herokuapp.com/api/v1/posts/${postId}`;
  try {
    const response = await axios({
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      url: POSTS_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}