import React from 'react';

import styles from "./LinkContainer.module.scss";
import {Link} from "../index.ts";

interface LinkContainerProps {
    name: string
}

const LinkContainer: React.FC<LinkContainerProps> = ({name}) => {

    return (
        <div className={styles.container}>
            <Link href={"https://www.youtube.com/"}>YouTube</Link>
        </div>
    );
};

export default LinkContainer;