import React, {useState} from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";

export interface NewTabProps {
}

const NewTab: React.FC<NewTabProps> = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const {createTab} = useTab();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const tag_name_field = document.getElementsByName("tag_name")[0] as HTMLInputElement;
        createTab(tag_name_field.value);
    };

    return (
        <div
            className={styles.tab}
            onClick={() => setActive(true)}>
            <form onSubmit={onSubmit}>
                {isActive ?
                    <input name={"tag_name"} type={"text"} className={styles.newTabInput}/>
                    :
                    "+"
                }
            </form>

        </div>
    );
};
export default NewTab;