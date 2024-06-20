import React, {useRef} from 'react';

import styles from "./Settings.module.scss";



export interface SettingsTabProps {
    children: string
}

const SettingsTab: React.FC<SettingsTabProps> = ({children}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('tag_name', children);
    };

    return (
        <div
            ref={ref}
            draggable={true}
            onDragStart={handleDragStart}
            className={styles.tab}
        >
            {children}
        </div>
    );
};
export default SettingsTab;