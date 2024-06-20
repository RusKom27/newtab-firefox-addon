import React, {useCallback} from 'react';

import styles from "./Link.module.scss";
import {useTab} from "../../hooks";

interface AddLinkProps {
    containerName: string
}

const AddLink: React.FC<AddLinkProps> = ({containerName}) => {

    const {currentTab, addLink} = useTab();

    const createLink = useCallback(() => {
        addLink(currentTab.name, containerName, {name: "New link", link: "https://www.google.com"});
    }, [currentTab.name, containerName, addLink]);

    return (
        <div onClick={createLink} className={styles.link}>
            +
        </div>
    );
};

export default AddLink;