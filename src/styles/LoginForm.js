import styled from "styled-components";

export const LoginFormWrapper = styled.form`
  border-color: white;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 40vh;
  width: 65%;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
`;

export const FieldWrapper = styled.div`
  background-color: green;
  margin-bottom: 3.5vh;
  width: 70%;
  border-radius: 0.2vw;
`;

export const LoginField = styled.input`
  height: 3.5vh;
  width: 100%;
  border-radius: 0.2vw;
`;