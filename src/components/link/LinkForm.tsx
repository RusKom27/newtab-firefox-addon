import React, {memo, useCallback} from 'react';

import styles from "./Link.module.scss";
import {Link} from "../../types/Tab.ts";
import {useTab} from "../../hooks";

interface LinkFormProps {
    containerName: string
    defaultLink: Link,
    closeForm: () => void
}

const LinkForm: React.FC<LinkFormProps & React.FormHTMLAttributes<HTMLFormElement>> = memo((
    {containerName, defaultLink, closeForm, ...props},
) => {

    const [isEdit] = React.useState((defaultLink.name.length > 0 && defaultLink.link.length > 0));
    const [linkName, setLinkName] = React.useState(defaultLink.name || "");
    const [linkImage, setLinkImage] = React.useState(defaultLink.image || "");
    const [link, setLink] = React.useState(defaultLink.link || "");
    const {currentTab, addLink, changeLink, removeLink} = useTab();

    const createLink = useCallback(() => {
        addLink(currentTab.name, containerName, {image: linkImage, name: linkName, link: link});
        closeForm();
    }, [addLink, currentTab, containerName, linkImage, linkName, link, closeForm]);

    const editLink = useCallback(() => {
        changeLink(
            currentTab.name,
            containerName,
            {image: linkImage, name: defaultLink.name, link: defaultLink.link},
            {image: linkImage, name: linkName, link: link},
        );
        closeForm();
    }, [changeLink, currentTab, containerName, linkImage, defaultLink, linkName, link, closeForm]);

    const deleteLink = useCallback(() => {
        removeLink(currentTab.name, containerName, linkName);
        closeForm();
    }, [removeLink, currentTab, containerName, linkName, closeForm]);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.currentTarget as HTMLFormElement;
        const linkImageElement = target.link_image as HTMLInputElement;
        const linkNameElement = target.link_name as HTMLInputElement;
        const linkElement = target.link as HTMLInputElement;

        setLinkImage(linkImageElement.value);
        setLinkName(linkNameElement.value);
        setLink(linkElement.value);

        if (isEdit) {
            editLink();
            return;
        }

        if (!linkNameElement.value || !linkElement.value) {
            return;
        }

        createLink();
    };

    return (
        <form {...props} className={styles.newLinkForm} onSubmit={onSubmitHandler}>
            <input
                name={"link_image"}
                type="text"
                onChange={(event) => setLinkImage(event.target.value)}
                value={linkImage}
                placeholder={"Link image"}
            />
            <input
                name={"link_name"}
                type="text"
                onChange={(event) => setLinkName(event.target.value)}
                value={linkName}
                placeholder={"Link name"}
            />
            <input
                name={"link"}
                type="text"
                onChange={(event) => setLink(event.target.value)}
                value={link}
                placeholder={"Link"}
            />
            <div className={styles.newLinkFormRow}>
                <button type={"button"} onClick={() => closeForm()}>Cancel</button>
                <button type={"button"} onClick={() => deleteLink()}>Remove</button>
                <button type={"submit"}>Ok</button>
            </div>
        </form>
    );
});

export default LinkForm;