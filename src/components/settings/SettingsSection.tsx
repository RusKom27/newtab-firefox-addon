import React from 'react';

import styles from "./Settings.module.scss";

export interface SettingsSectionProps {
    title: string
    children: React.ReactNode | React.ReactNode[]
}

const SettingsSection: React.FC<SettingsSectionProps> = ({title, children}) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{title}</h3>

            {children}
        </div>
    );
};

export default SettingsSection;