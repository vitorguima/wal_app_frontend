import styled from "styled-components";
import {
  devices
} from './sizeAndDevices';

export const PostCard = styled.div`
  padding: 0 1rem 0 1rem;
  margin: 0rem 8rem 0rem 8rem;
  width: 60%;
  height: 25vh;
  border: black;
  border-style: solid;
  border-width: thin;
  border-bottom: none;
  border-color: #D3D3D3;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  margin-top: 0.5rem;

  @media ${devices.tablet} {
    width: 75%;
    height: 19vh;
  }
  
  @media ${devices.mobileL} {
    width: 90%;
    height: 26vh;
  }
`;

export const PostTitle = styled.h1`
  margin-top: 1rem;

  @media ${devices.mobileL} {
    font-size: 1.2rem;
  }
`;

export const PostDetails = styled.p`
  display: flex;
  justify-content: space-even;
  align-items: flex-end;
  align-content: flex-end;
  padding:0.5rem;
  margin: 0.5rem 5rem 0rem 0rem;
  font-size: 0.9rem;
  width: 100%;
  color: #707070;
  border-top: black solid 1px;
  border-color: #D3D3D3;

  @media ${devices.mobileL} {
    font-size: 0.7rem;
  }

  p {
    margin-right: 2rem;
  }
`;

export const PostContent = styled.div`
  font-size: 1.3rem;
  width: 100%;
  word-wrap: break-word;
  margin-top: 1em;
  margin-bottom: 1rem;
  padding-bottom: 3.8rem;

  @media ${devices.mobileL} {
    font-size: 0.9rem;
  }

  @media ${devices.mobileL} {
    padding-bottom: 4.5rem;
  }
`;
