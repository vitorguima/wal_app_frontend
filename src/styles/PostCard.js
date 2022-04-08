import styled from "styled-components";

export const PostCard = styled.div`
  padding: 0 1rem 0 1rem;
  border-top: #0066b2 solid 2px;
  margin: 1rem 8rem 1rem 8rem;
  width: 100vh;
  height: 25vh;
`;

export const PostTitle = styled.h1`
  margin-top: 1rem;
`;

export const PostDetails = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 3rem 0rem 0rem;
  font-size: 0.9rem;
  width: 100%;
  color: #707070;
`;

export const PostContent = styled.div`
  font-size: 1.3rem;
  width: 100%;
  word-wrap: break-word;
  margin-top: 2rem;
`;
