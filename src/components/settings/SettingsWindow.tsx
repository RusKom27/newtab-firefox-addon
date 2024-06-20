import React from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";
import NewTab from "./NewTab.tsx";
import SettingsTab from "./SettingsTab.tsx";
import SettingsTabDropPlace from "./SettingsTabDropPlace.tsx";

export interface SettingsProps {

}

const SettingsWindow: React.FC<SettingsProps> = () => {
    const {tabs} = useTab();

    return (
        <div className={styles.window}>
            <SettingsTabDropPlace/>
            {tabs.map(tab => (
                <React.Fragment key={tab.name}>
                    <SettingsTab>{tab.name}</SettingsTab>
                    <SettingsTabDropPlace/>
                </React.Fragment>
            ),
            )}
            <NewTab/>
        </div>
    );
};

export default SettingsWindow;