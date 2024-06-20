import React, {useRef} from 'react';

import styles from "./Settings.module.scss";


export interface SettingsTabDropPlaceProps {
}

const SettingsTabDropPlace: React.FC<SettingsTabDropPlaceProps> = () => {
    const [ dragOver, setDragOver ] = React.useState(false);
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);
    const ref = useRef<HTMLDivElement>(null);

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
        setDragOver(false);
    };

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            ref={ref}
            onDragOver={enableDropping}
            onDrop={onDrop}
            className={styles.tabDropPlace}
            onDragEnter={handleDragOverStart}
            onDragLeave={handleDragOverEnd}
            style={dragOver ?
                {width: 80, borderColor: "rgba(240, 255, 255, 1)"} :
                {width: 8, borderColor: "rgba(240, 255, 255, 0)"}
            }
        >

        </div>
    );
};
export default SettingsTabDropPlace;