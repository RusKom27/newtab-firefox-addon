import React, {useRef} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {ReactComponent as SettingsIcon} from '../../assets/settings.svg';

import styles from "./Settings.module.scss";
import useModal from "../../hooks/useModal.ts";

export interface SettingsProps {

}

const Settings: React.FC<SettingsProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const modal = useModal();

    const onClickHandler = () => {
        modal.setChildren(
            <div>Settings</div>,
        );
        modal.open();
    };

    return (
        <div
            ref={ref}
            className={styles.settings}
            onClick={onClickHandler}>
            <SettingsIcon/>
        </div>
    );
};
export default Settings;