import React from 'react';
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';

const Profile = () => {
    const { githubState } = useGithub();

    return(
    <S.Wrapper>
      <div>
        <S.ProfileImg src={githubState.user.avatar_url} alt="Avatar of user"/>
      </div>
        
      <S.ProfileInfoContainer>
        <h1>{githubState.user.name}</h1>
        <S.WrapperUsername>
        <h3>Username:</h3>
        <a href={githubState.user.html_url} 
          target="_blank"
          rel="noreferrer">{githubState.user.login}</a> 
        </S.WrapperUsername>
        <S.WrapperUsername>
          <h3>Location: </h3>
          <span>{githubState.user.location}</span>
        </S.WrapperUsername>
        <S.WrapperInfos>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperInfos>
      </S.ProfileInfoContainer>

    </S.Wrapper>
    );
}

export default Profile;