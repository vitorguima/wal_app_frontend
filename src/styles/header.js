import styled from "styled-components";
import {
  devices
} from './sizeAndDevices';

export const HeaderWrapper = styled.div`
  background-color: #0066b2;
  display: flex;
  width: 100vw;
  height: 8vh;
  font-size: 1.4em;
  align-items: center;
  margin-bottom: 1rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  span {
    color: white;
    padding: 0;
    margin: 2vw;

    :hover {
      text-decoration: underline;
      font-weight: bold;
    }
  }

  @media ${devices.desktop} {

  }

  @media ${devices.tablet} {

  }

  @media ${devices.mobileL} {

  }
`;

export const HeaderBiggerWrapper = styled.div`
  display: flex;
  width: 70vw;
  /* background-color: blue; */
  justify-content: flex-start;
`;

export const HeaderMinorWrapper = styled.div`
  display: flex;
  width: 30vw;
  color: white;
  /* background-color: red; */
  justify-content: flex-end;
`;

export const LogoutButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 0;
  margin: 2vw;
`
