import React from 'react';
import * as S from "./styled";

const NoSearch = () => {
    return(
        <S.Wrapper>
            <h1>Nenhum usuário pesquisado.</h1>
            <h3>Faça uma pesquisa</h3>
        </S.Wrapper>
    );
}

export default NoSearch;