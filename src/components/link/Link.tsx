import React, { useCallback, useState} from 'react';

import styles from "./Link.module.scss";
import {Link as LinkType, LinksContainer} from "../../types/Tab.ts";
import LinkForm from "./LinkForm.tsx";

interface LinkProps {
    link: LinkType,
    container: LinksContainer,
}

const Link: React.FC<LinkProps> = ({link, container}) => {
    const [isEdit, setIsEdit] = useState(false);

    const onContextMenuHandler = useCallback((event: React.MouseEvent) => {
        if (event.button === 2) {
            setIsEdit(true);
            event.preventDefault();
        }
    }, [setIsEdit]);

    const closeWindow = useCallback(() => {
        setIsEdit(false);

    }, [setIsEdit]);

    return (
        <div
            className={styles.linkContainer}
            onClick={onContextMenuHandler}
        >
            {isEdit ?
                <LinkForm
                    className={styles.linkForm}
                    defaultLink={link}
                    containerName={container.name}
                    closeForm={closeWindow}
                /> :
                <a onContextMenu={onContextMenuHandler} href={link.link} className={styles.link}>
                    <img
                        src={link.image || "http://surl.li/urjbb"}
                        className={styles.linkImage}
                        alt=""
                    />
                    {link.name}
                </a>
            }


        </div>
    );
};

export default Link;