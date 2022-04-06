import styled from "styled-components";

export const PostCard = styled.div`
  padding: 0 1rem 0 1rem;
  border-bottom: black solid 2px;
  margin: 2rem 8rem 0 8rem;
  width: 100vh;
  height: 25vh;
`;

export const PostTitle = styled.h1`
`;

export const PostDetails = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 1rem 3rem 0rem 0rem;
  font-size: 1.2rem;
  width: 100%;
`;

export const PostContent = styled.div`
  font-size: 1.5rem;
  width: 100%;
  word-wrap: break-word;
  margin-top: 1rem;
`;
