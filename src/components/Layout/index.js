import React from 'react';
import Header from '../header/index';


const Layout = ({ children }) => {

    return(
        <section>
            <Header />
            {children}
        </section>
    );
}

export default Layout;