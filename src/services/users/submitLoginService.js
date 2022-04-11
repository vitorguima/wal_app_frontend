import axios from 'axios';

const submitLoginService = async (email, password) => {
  const AUTHENTICATION_ENDPOINT = process.env.REACT_APP_AUTHENTICATION_ENDPOINT;
  try {
    const response = await axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        password,
      },
      url: AUTHENTICATION_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export default submitLoginService;
