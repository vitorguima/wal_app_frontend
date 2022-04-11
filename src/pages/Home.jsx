import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import {
  HomeWrapper, FormWrapper, LogoWrapper, Logo, SubLogo,
} from '../styles/home';
import validateTokenService from '../services/authentication/validateTokenService';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    const retrievedToken = localStorage.getItem('token');
    if (!retrievedToken) {
      return;
    }

    const validateToken = async () => {
      const response = await validateTokenService(retrievedToken);

      if (response.status === 200) {
        history.push('/feed');
      }
    };

    validateToken();
  }, []);

  return (
    <HomeWrapper>
      <LogoWrapper>
        <Logo>The Wall</Logo>
        <SubLogo>Bring your ideas to our community!</SubLogo>
      </LogoWrapper>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </HomeWrapper>
  );
}
