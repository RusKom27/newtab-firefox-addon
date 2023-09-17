import React, {useRef} from 'react';

import styles from "./TabLink.module.scss";
import {useTab} from "../../hooks";

export interface TabLinkProps {
    children: React.ReactNode
    tab_link: string
}

const TabLink: React.FC<TabLinkProps> = ({children, tab_link}) => {
    const {currentTab, setTab} = useTab();

    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className={currentTab === tab_link ? styles.tab_link_active : styles.tab_link}
            onClick={() => setTab(tab_link)}>
            {children}
        </div>
    );
};
export default TabLink;