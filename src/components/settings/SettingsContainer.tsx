import React from 'react';

import styles from "./Settings.module.scss";

export interface SettingsContainerProps {
    onClickHandler: () => void;
    children: React.ReactNode;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({onClickHandler, children}) => {
    return (
        <div
            onClick={onClickHandler}
            className={styles.tab}
        >
            {children}
        </div>
    );
};
export default SettingsContainer;