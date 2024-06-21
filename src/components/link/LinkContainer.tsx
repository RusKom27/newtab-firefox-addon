import React from 'react';

import styles from "./Link.module.scss";
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
                (containerLink, index) =>
                    <Link key={index} container={container} link={containerLink}/>,
            )}

            <AddLink containerName={container.name}/>
        </div>
    );
};

export default LinkContainer;