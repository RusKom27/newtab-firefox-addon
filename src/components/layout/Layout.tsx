import React from 'react';

import styles from "./Layout.module.scss";
import {TabLink, TabLinkContainer, Modal, Settings} from "../index.ts";
import {useModal} from "../../hooks";

interface LinkProps {
    children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LinkProps> = ({children}) => {
    const modal = useModal();

    return (
        <div className={styles.layout}>
            <TabLinkContainer>
                <TabLink tab_link={"main"}>Main</TabLink>
                <TabLink tab_link={"work"}>Work</TabLink>
                <TabLink tab_link={"games"}>Games</TabLink>
                <TabLink tab_link={"react"}>React</TabLink>
            </TabLinkContainer>
            {children}
            <button onClick={modal.open}>Open modal</button>
            <Modal />

        </div>
    );
};

export default Layout;