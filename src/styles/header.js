import styled from "styled-components";
import {
  devices
} from './sizeAndDevices';

export const HeaderWrapper = styled.div`
  background-color: black;
  display: flex;
  width: 100vw;
  height: 7vh;
  font-size: 2.2em;
  align-items: center;

  span {
    color: white;
    padding: 0;
    margin: 2vw;
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
