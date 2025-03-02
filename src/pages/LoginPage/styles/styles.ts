import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  max-width: 459px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background-color: var(--accent-bg);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  margin: 0 10px;
`;
export const FormHeader = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
`;
export const Label = styled.label`
  color: var(--white-color);
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled.input`
  color: var(--white-color);
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;
export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 8px;
  border: none;
  background-color: var(--primary-color);
  box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 40%);
`;
