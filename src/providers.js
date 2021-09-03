import React from 'react';
import GithubProvider from './providers/github-providers';
import { GlobalCSS } from './GlobalStyle/global';
import App from "./App";

const Providers = () =>{
    return(
        <main>
            <GithubProvider>
                <GlobalCSS />
                <App />
            </GithubProvider>
        </main>
    );
}

export default Providers;