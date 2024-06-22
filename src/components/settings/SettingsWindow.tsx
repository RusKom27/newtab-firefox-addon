import React from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";
import NewTab from "./NewTab.tsx";
import SettingsTab from "./SettingsTab.tsx";

export interface SettingsProps {

}

const SettingsWindow: React.FC<SettingsProps> = () => {
    const {tabs} = useTab();

    return (
        <div className={styles.window}>
            {tabs.map(tab =>
                <SettingsTab>{tab.name}</SettingsTab>,
            )}
            <NewTab/>
        </div>
    );
};

export default SettingsWindow;