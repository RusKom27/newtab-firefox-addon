import React from 'react';

import styles from "./TabLinkContainer.module.scss";

interface LinkProps {
    children: React.ReactNode[] | React.ReactNode
}

const TabLinkContainer: React.FC<LinkProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default TabLinkContainer;