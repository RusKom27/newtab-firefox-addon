import React from 'react';

import styles from "./TabLinkContainer.module.scss";
import {Settings, TabLink} from "../index.ts";
import {useTab} from "../../hooks";

interface LinkProps {
}

const TabLinkContainer: React.FC<LinkProps> = () => {

    const {tabs} = useTab();

    return (
        <div className={styles.container}>
            {tabs.map(tab => <TabLink key={tab.name} tab_link={tab.name}>{tab.name}</TabLink>)}
            <div className={styles.controls}>
                <Settings/>
            </div>
        </div>
    );
};

export default TabLinkContainer;