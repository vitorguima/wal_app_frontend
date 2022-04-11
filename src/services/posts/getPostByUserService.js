import axios from 'axios';

const getPostByUserService = async (token) => {
  const POSTS_ENDPOINT = process.env.REACT_APP_POSTS_BY_USER_ENDPOINT;
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: POSTS_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export default getPostByUserService;
