import React from 'react';

import styles from "./Link.module.scss";
import AddLinkWindow from "./AddLinkWindow.tsx";

interface AddLinkProps {
    containerName: string
}

const AddLink: React.FC<AddLinkProps> = ({containerName}) => {
    const [isAddLinkWindowOpen, setAddLinkWindowOpen] = React.useState(false);

    const onClickHandler = () => {
        setAddLinkWindowOpen(!isAddLinkWindowOpen);
    };

    const closeAddLinkWindow = () => {
        setAddLinkWindowOpen(false);
    };

    return (
        <div>
            {isAddLinkWindowOpen ?
                <AddLinkWindow containerName={containerName} closeWindow={closeAddLinkWindow}/> :
                <div onClick={onClickHandler} className={styles.link}>+</div>
            }
        </div>
    );
};

export default AddLink;