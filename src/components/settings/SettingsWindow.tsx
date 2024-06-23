import React, {useState} from 'react';

import styles from "./Settings.module.scss";
import {useTab} from "../../hooks";
import NewTab from "./NewTab.tsx";
import SettingsTab from "./SettingsTab.tsx";
import SettingsContainer from "./SettingsContainer.tsx";
import SettingsSection from "./SettingsSection.tsx";
import NewContainer from "./NewContainer.tsx";

export interface SettingsProps {

}

const SettingsWindow: React.FC<SettingsProps> = () => {
    const {tabs, currentTab} = useTab();
    const [currentContainer, setCurrentContainer] = useState(currentTab.linksContainers[0]);
    // const [currentLink, setCurrentLink] = useState(currentTab.linksContainers[0].name || "");

    return (
        <div className={styles.window}>
            <SettingsSection title={"Tabs"}>
                <div className={styles.sectionTabs}>
                    {tabs.map(tab =>
                        <SettingsTab
                            key={tab.name}
                            onClickHandlerCallback={() => setCurrentContainer(tab.linksContainers[0])}
                        >
                            {tab.name}
                        </SettingsTab>,
                    )}
                    <NewTab/>
                </div>
            </SettingsSection>
            <SettingsSection title={currentTab.name}>
                <SettingsSection title={"Containers"}>
                    <div className={styles.sectionTabs}>
                        {currentTab.linksContainers.map(container =>
                            <SettingsContainer
                                key={container.name}
                                onClickHandler={() => setCurrentContainer(container)}
                            >
                                {container.name}
                            </SettingsContainer>,
                        )}
                        <NewContainer/>
                    </div>
                    
                    <SettingsSection title={currentContainer.name}>
                        f
                        <SettingsSection title={"LinkName"}>
                            h
                        </SettingsSection>
                    </SettingsSection>
                </SettingsSection>

            </SettingsSection>


        </div>
    );
};

export default SettingsWindow;