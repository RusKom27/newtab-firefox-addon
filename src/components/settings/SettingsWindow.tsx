import React from 'react';

import styles from "./Settings.module.scss";

export interface SettingsProps {

}

const SettingsWindow: React.FC<SettingsProps> = () => {

    return (
        <div className={styles.window}>
            Settings
        </div>
    );
};

export default SettingsWindow;