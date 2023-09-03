import React, {useEffect, useRef} from 'react';

import styles from "./TabLink.module.scss";

export interface TabLinkProps {
    children: React.ReactNode
    tab_link: string
}

const onMouseEnter = (event: MouseEvent) => {

};

const onMouseMove = (event: MouseEvent) => {

};


const TabLink: React.FC<TabLinkProps> = ({children}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref === null || ref.current === null) return;
        ref.current.addEventListener(
            "mouseenter",
            (event) => onMouseEnter(event),
        );
        ref.current.addEventListener(
            "mousemove",
            (event) => onMouseMove(event),
        );

    });

    return (
        <div ref={ref} className={styles.tab_link}>
            {children}
        </div>
    );
};
export default TabLink;