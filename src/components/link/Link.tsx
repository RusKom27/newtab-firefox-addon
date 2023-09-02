import React from 'react';

import styles from "./Link.module.scss";

interface LinkProps {
    children: React.ReactNode
    href: string
}

const Link: React.FC<LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({children, ...props}) => {
    return (
        <a {...props} className={styles.link}>
            {children}
        </a>
    );
};

export default Link;