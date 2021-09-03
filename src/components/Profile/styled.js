import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    border-radius: 20px; 
    background-color: var(--color-secondary);
    box-shadow: 0 0 1em gray;
`; 

export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 250px;
    box-shadow: 0 0 1em var(--color-background);
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 20px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    
    h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    h4 {
      font-size: 1rem;
      font-weight: bold;
    }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  
  a {
    font-size: 1.2rem;
    margin: 0 10px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperInfos = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
`;