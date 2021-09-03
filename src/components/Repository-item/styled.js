import styled from "styled-components";

export const Wrapper = styled.div`
    border: 2px solid #BFA2DB;
    padding: 5px;
    width: 400px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
    background-color: #BFA2DB;
    box-shadow: 0 0 1em gray;
    
    &:hover{
        box-shadow: 5px 3px 10px #7F7C82;
    }
    
`;

export const WrapperTitle = styled.h2`
    text-align: center;
    font-size: 1.2rem;
`;
