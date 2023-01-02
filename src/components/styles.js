import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }

  button {
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
  }

  button:hover {
    background-color: #0069d9;
  }
`;