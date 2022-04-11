import axios from 'axios';

const deletePostService = async (postId, token) => {
  const POSTS_ENDPOINT = `${process.env.REACT_APP_POST_CHANGES_ENDPOINT}${postId}`;
  try {
    const response = await axios({
      method: 'DELETE',
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

export default deletePostService;
