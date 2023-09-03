import React from 'react';

import styles from "./Layout.module.scss";
import {TabLink, TabLinkContainer} from "../index.ts";

interface LinkProps {
    children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LinkProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <TabLinkContainer>
                <TabLink tab_link={"main"}>Main</TabLink>
                <TabLink tab_link={"work"}>Work</TabLink>
                <TabLink tab_link={"work"}>Work</TabLink>
                <TabLink tab_link={"work"}>Work</TabLink>
            </TabLinkContainer>
            {children}
        </div>
    );
};

export default Layout;