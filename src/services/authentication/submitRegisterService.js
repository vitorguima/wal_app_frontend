import axios from 'axios';

export const submitRegister = async (firstName, lastName, email, nickname, password) => {
  const REGISTER_ENDPOINT = process.env.REACT_APP_REGISTER_ENDPOINT;
  try {
    const response = await axios({
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: {
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          nickname: nickname,
          password: password,
        }
      },
      url: REGISTER_ENDPOINT,
    });

    return response;
  } catch (error) {
    return error.response
  }
}