import styled from 'styled-components';
import {
  devices,
} from './sizeAndDevices';

export const HeaderWrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 8vh;
  font-size: 1.4em;
  align-items: center;
  margin-bottom: 1rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  border-bottom: #D3D3D3 solid 1px;

  span {
    color: black;
    padding: 0;
    margin: 1.1vw;

    :hover {
      text-decoration: underline;
      font-weight: bold;
    }

    @media ${devices.mobileL} {
      margin-right: 0.8;
    }
  }

  @media ${devices.mobileL} {
    font-size: 1em;
  }
`;

export const HeaderBiggerWrapper = styled.div`
  display: flex;
  width: 70vw;
  justify-content: flex-start;
`;

export const HeaderMinorWrapper = styled.div`
  display: flex;
  width: 30vw;
  /* background-color: red; */
  justify-content: flex-end;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 0;
  color: black;
  padding: 0;
  margin: 2vw;

  :hover {
    text-decoration: underline;
    font-weight: bold;
  }

  @media ${devices.mobileL} {
    margin-right: 0.5%;
  }
`;
