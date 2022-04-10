import axios from 'axios';

export const validateTokenService = async (token) => {
  const VALID_TOKEN_ENDPOINT = process.env.REACT_APP_VALIDATE_TOKEN_ENDPOINT;
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
