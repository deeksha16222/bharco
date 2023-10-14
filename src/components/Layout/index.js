import React from 'react';

export const Layout = ({ children }) => {
    return (
    <>
        {/* <Header /> */}
        <div className="navigationWrapper">
            {/* <Navigation /> */}
            <p>kkk</p>
            <main>{children}</main>
        </div>
    </>
    );
};
