import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #F0F8FF;
`;

export const Form = styled.form`
  border-color: white;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 80%;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

  p {
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }
`;

export const RegisterField = styled.input`
  background-color: white;
  height: 8%;
  width: 80%;
  margin: 1rem;
  border-radius: 0.2vw;
  border: black solid 2px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  font-size: 1.1rem;
  padding: 1rem;

  ::placeholder {
    color: #A9A9A9;
  }
`;

export const RegisterButton = styled.button`
  width: 60%;
  padding: 0.8rem 1rem;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #0066b2;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #00BFFF;
  }
`;
