import styled from "styled-components";
import {
  devices
} from './sizeAndDevices';

export const PostCard = styled.div`
  padding: 0 1rem 0 1rem;
  margin: 0rem 8% 0rem 8%;
  width: 60%;
  height: 10%;
  border: black;
  border-style: solid;
  border-width: thin;
  border-bottom: none;
  border-color: #D3D3D3;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  margin-bottom: 1%;

  p {
    color: #707070;
  }

  @media ${devices.tablet} {
    width: 75%;
    height: 20%;
  }
  
  @media ${devices.mobileL} {
    width: 90%;
    height: 25%;
    margin-bottom: 3%;
  }
`;

export const PostTitle = styled.div`
  font-size: 1.8rem;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileL} {
    font-size: 1.2rem;
  }
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: flex-start;  
  padding: 0.7%;
  margin: 0.5rem 5rem 0rem 0rem;
  font-size: 0.9rem;
  width: 95%;
  color: #707070;
  border-top: #D3D3D3 solid 1px;
  height: 20%;
  word-wrap: break-word;

  @media ${devices.mobileL} {
    font-size: 0.7rem;
  }

  p {
    margin-right: 4%;
  }
`;

export const PostContent = styled.div`
  font-size: 1.3rem;
  width: 100%;
  word-wrap: break-word;
  margin-top: 1em;
  margin-bottom: 1rem;
  padding-bottom: 10%;
  height: 40%;
  
  p {
    color: black;
  }

  @media ${devices.mobileL} {
    font-size: 0.9rem;
  }

  @media ${devices.mobileL} {
    padding-bottom: 20%;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 0;
  color: black;
  padding: 0;
  font-size: 2rem;

  :hover {
    color: red;
    font-weight: bold;
  }

  @media ${devices.mobileL} {
    margin-right: 0.5%;
  }
`