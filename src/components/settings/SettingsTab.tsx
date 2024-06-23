import React from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";

export interface SettingsTabProps {
    children: string
    onClickHandlerCallback: () => void
}

const SettingsTab: React.FC<SettingsTabProps> = ({children, onClickHandlerCallback}) => {
    const {setTab} = useTab();

    const onClickHandler = () => {
        setTab(children);
        onClickHandlerCallback();
    };

    return (
        <div
            onClick={onClickHandler}
            className={styles.tab}
        >
            {children}
        </div>
    );
};
export default SettingsTab;