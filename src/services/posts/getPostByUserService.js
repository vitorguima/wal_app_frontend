import axios from 'axios';

export const getPostByUserService = async (token) => {
  const POSTS_ENDPOINT = 'https://wall-app-api.herokuapp.com/api/v1/posts/user';
  try {
    const response = await axios({
      method: 'GET',
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