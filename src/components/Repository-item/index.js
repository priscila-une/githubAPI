import React from 'react';
import * as S from "./styled";

const RepositoryItem = ({name, linkToRepo, fullName}) => { 
    return(
        <S.Wrapper>
              <S.WrapperTitle>{ name }</S.WrapperTitle>
              <h4>Full name: </h4>
              <a href={linkToRepo} 
                target="_blank"
                rel="noreferrer"
              >{fullName}
              </a>
        </S.Wrapper>
    );
}

export default RepositoryItem;