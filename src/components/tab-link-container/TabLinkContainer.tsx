import React from 'react';

import styles from "./TabLinkContainer.module.scss";
import {Settings} from "../index.ts";

interface LinkProps {
    children: React.ReactNode[] | React.ReactNode
}

const TabLinkContainer: React.FC<LinkProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
            <div className={styles.controls}>
                <Settings/>
            </div>
        </div>
    );
};

export default TabLinkContainer;