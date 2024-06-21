import React from 'react';

import styles from "./Link.module.scss";
import LinkForm from "./LinkForm.tsx";

interface AddLinkWindowProps {
    containerName: string
    closeWindow: () => void
}

const AddLinkWindow: React.FC<AddLinkWindowProps> = ({containerName, closeWindow}) => {
    return (
        <div className={styles.window}>
            <LinkForm
                className={styles.linkForm}
                defaultLink={{name: "", link: ""}}
                containerName={containerName}
                closeForm={closeWindow}
            />
        </div>
    );
};

export default AddLinkWindow;