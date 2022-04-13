import axios from 'axios';

const validateTokenService = async (token) => {
  const VALID_TOKEN_ENDPOINT = process.env.REACT_APP_VALIDATE_TOKEN_ENDPOINT;
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: VALID_TOKEN_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export default validateTokenService;
