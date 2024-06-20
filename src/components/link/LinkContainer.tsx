import React from 'react';

import styles from "./LinkContainer.module.scss";
import {LinksContainer} from "../../types/Tab";
import Link from "./Link.tsx";
import AddLink from "./AddLink.tsx";

interface LinkContainerProps {
    container: LinksContainer;
}

const LinkContainer: React.FC<LinkContainerProps> = ({container}) => {

    return (
        <div className={styles.container}>
            {container.links.map(
                containerLink =>
                    <Link key={containerLink.name} href={containerLink.link}>{containerLink.name}</Link>,
            )}

            <AddLink containerName={container.name}/>
        </div>
    );
};

export default LinkContainer;