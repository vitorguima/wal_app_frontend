import axios from 'axios';
import React, { useState } from 'react'

const REGISTER_ENDPOINT = 'https://wall-app-api.herokuapp.com/api/v1/user'

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const submitRegistration = async () => {
    const response = await axios({
      method: 'POST',
      data: {
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          nickname: nickname,
          password: password,
        }
      },
      withCredentials: true,
      url: REGISTER_ENDPOINT,
    })

    console.log(response)
  }

  return (
    <div>
      <form>
          <div>
            <input 
              type="text"
              name="firstName"
              value={ firstName }
              onChange={ ({ target }) => setFirstName(target.value) }
              placeholder="First name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={ lastName }
              onChange={ ({ target }) => setLastName(target.value) }
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              type="text"
              name="nickname"
              value={ nickname }
              onChange={ ({ target }) => setNickname(target.value) }
              placeholder="Nickname"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
              placeholder="Password"
            />
          </div>
          <button
            onClick={ () => submitRegistration() }
            type="button"
          >
            Register
          </button>
      </form>
    </div>
  )
}

// first_name, last_name, email, nickname, password
