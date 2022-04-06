import styled from "styled-components";

export const Form = styled.form`
  border-color: white;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 50vh;
  width: 65%;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

  p {
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }
`;

export const LoginField = styled.input`
  background-color: white;
  height: 10%;
  width: 80%;
  margin: 0.9rem;
  border-radius: 0.2vw;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  font-size: 1.3rem;

  ::placeholder {
    color: #A9A9A9;
  }
`;

export const Button = styled.button`
  width: 60%;
  padding: 11px 13px;
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

// max-width: 100%;
// padding: 11px 13px;
// background: #f9f9fa;
// color: #f03d4e;
// margin-bottom: 0.9rem;
// border-radius: 4px;
// outline: 0;
// border: 1px solid rgba(245, 245, 245, 0.7);
// font-size: 14px;
// transition: all 0.3s ease-out;
// box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
// :focus,
// :hover {
//   box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
// }