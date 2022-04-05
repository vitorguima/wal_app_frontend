import axios from 'axios';

export const submitLoginService = async (email, password) => {
  const AUTHENTICATION_ENDPOINT = 'https://wall-app-api.herokuapp.com/api/v1/authenticate';
  try {
    const response = await axios({
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: {
        email: email,
        password: password,
      },
      url: AUTHENTICATION_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}