import styled from "styled-components";
import {
  devices
} from './sizeAndDevices';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100w;
  height: 100vh;
  background-color: #FDF4E3;
  padding: 20rem;
  flex-direction: column;

  @media ${devices.tablet} {
    padding: 4.5rem;
    justify-content: center;
  }
  
  @media ${devices.mobileL} {
    padding: 4rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 50vh;
  margin: 5rem;

  @media ${devices.tablet} {
    width: 70vw;
    height: 35%;
  }
  
  @media ${devices.mobileL} {
    width: 100vw;
    height: 40%;
    margin: 2rem;
  }
`;

export const LogoWrapper = styled.div`
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;

  display: flex;
  flex-direction: column;
  border: solid 3px #6e7491;
  padding: 2rem 7rem;
  width: 37vw;
  heigth: 100%;
  transform: rotate(-1deg);
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transition: all 0.13s ease-in;
  background: white;

  @media ${devices.tablet} {
    width: 50vw;
  }
  
  @media ${devices.mobileL} {
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const Logo = styled.p`
  font-family: 'Rock Salt', cursive;
  font-size: 5em;

  @media ${devices.tablet} {
    font-size: 3rem;
  }
  
  @media ${devices.mobileL} {
    font-size: 2rem;
  }
`;

export const SubLogo = styled.p`
  font-size: 2rem;

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
  
  @media ${devices.mobileL} {
    font-size: 0.8rem;
  }
`;
