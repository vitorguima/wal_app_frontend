import axios from 'axios';

export const updatePostService = async (token, postId, title, content) => {
  const POSTS_ENDPOINT = `https://wall-app-api.herokuapp.com/api/v1/posts/${postId}`;
  try {
    const response = await axios({
      method: 'PUT',
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