import React from 'react';

import styles from "./Layout.module.scss";

interface LinkProps {
    children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LinkProps> = ({children}) => {


    return (
        <div className={styles.layout}>

            {children}
        </div>
    );
};

export default Layout;