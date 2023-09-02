import React from 'react';

import styles from "./TabLink.module.scss";

export interface TabLinkProps {
    children: React.ReactNode
    tab_link: string
}

const TabLink: React.FC<TabLinkProps> = ({children}) => {
    return (
        <div className={styles.tab_link}>
            {children}
        </div>
    );
};
export default TabLink;