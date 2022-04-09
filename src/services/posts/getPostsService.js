import axios from 'axios';

export const getPostsList = async () => {
  const POSTS_ENDPOINT = 'https://wall-app-api.herokuapp.com/api/v1/posts';
  try {
    const response = await axios({
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      url: POSTS_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}
