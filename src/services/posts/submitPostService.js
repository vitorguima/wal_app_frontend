import axios from 'axios';

export const submitPostService = async (title, content, token) => {
  const POSTS_ENDPOINT = process.env.REACT_APP_POSTS_ENDPOINT;
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: {
        title,
        content,
      },
      url: POSTS_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}