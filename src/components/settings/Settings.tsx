import React, {useRef} from 'react';

// import SettingsIcon from "../../assets/icons/settings.svg?react";

import styles from "./Settings.module.scss";
import useModal from "../../hooks/useModal.ts";
import SettingsWindow from "./SettingsWindow.tsx";
import SvgIcon from "../svg-icon/SvgIcon.tsx";

export interface SettingsProps {

}

const Settings: React.FC<SettingsProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const modal = useModal();

    const onClickHandler = () => {
        modal.setChildren(
            <SettingsWindow/>,
        );
        modal.setTitle(
            "Settings",
        );
        modal.open();
    };

    return (
        <div
            ref={ref}
            className={styles.settings}
            onClick={onClickHandler}>
            <SvgIcon iconName={"settings"}/>
        </div>
    );
};

export default Settings;