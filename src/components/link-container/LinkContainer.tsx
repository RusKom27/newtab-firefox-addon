import React from 'react';

import styles from "./LinkContainer.module.scss";

interface LinkContainerProps {
    children: React.ReactNode[] | React.ReactNode
}

const LinkContainer: React.FC<LinkContainerProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default LinkContainer;