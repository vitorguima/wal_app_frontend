import axios from 'axios';

export const getPostsListService = async () => {
  const POSTS_ENDPOINT = process.env.REACT_APP_POSTS_ENDPOINT;
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
