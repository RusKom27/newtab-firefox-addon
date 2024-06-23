import React, {useState} from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";

export interface NewContainerProps {
}

const NewContainer: React.FC<NewContainerProps> = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const {addLinkContainer, currentTab} = useTab();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const container_name_field = document.getElementsByName("container_name")[0] as HTMLInputElement;
        addLinkContainer( currentTab.name, container_name_field.value);

        setActive(false);
    };

    return (
        <div
            className={styles.tab}
            onClick={() => setActive(true)}>
            <form onSubmit={onSubmit}>
                {isActive ?
                    <input name={"container_name"} type={"text"} className={styles.newTabInput}/>
                    :
                    "+"
                }
            </form>

        </div>
    );
};
export default NewContainer;