import styled from "styled-components";

export const SubLogo = styled.p`
  font-size: 2rem;
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #F0F8FF;
  padding: 20rem;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 50vh;
  margin: 5rem;
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
  heigth: 50%;
  transform: rotate(-1deg);
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transition: all 0.13s ease-in;
  background: white;

`;

export const Logo = styled.p`
  font-family: 'Rock Salt', cursive;
  font-size: 5em;
  position: relative;
`;
