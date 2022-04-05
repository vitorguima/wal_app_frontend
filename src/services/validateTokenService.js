import axios from 'axios';

export const validateTokenService = async (token) => {
  const VALID_TOKEN_ENDPOINT = 'https://wall-app-api.herokuapp.com/api/v1/token';
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      url: VALID_TOKEN_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}
