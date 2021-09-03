import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    widht: 100%;
    justify-content: space-between;
    padding: 4px;
  input {
    margin-left: 20px;
    border: 1px solid #7F7C90;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: var(--color-background);
  }
  button {
    background-color: #2c5282;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;