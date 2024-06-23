import React, {useEffect} from 'react';
import {useTab} from "../../hooks";
import {LinkContainer} from "../index.ts";

import styles from "./TabPage.module.scss";

export interface TabPageProps {

}

const TabPage: React.FC<TabPageProps> = () => {
    const {currentTab, setTab} = useTab();

    useEffect(() => {
        setTab("main");
    }, []);

    return (
        <div className={styles.tabPageContainer}>
            {currentTab.linksContainers.map(
                linksContainer =>
                    <LinkContainer key={linksContainer.name} container={linksContainer}/>,
            )}
        </div>
    );
};
export default TabPage;