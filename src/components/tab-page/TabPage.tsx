import React from 'react';
import {useTab} from "../../hooks";
import {LinkContainer} from "../index.ts";

export interface TabPageProps {

}

const TabPage: React.FC<TabPageProps> = () => {
    const {currentTab} = useTab();

    return (
        <div>
            {currentTab.linksContainers.map(
                linksContainer =>
                    <LinkContainer key={linksContainer.name} container={linksContainer}/>,
            )}
        </div>
    );
};
export default TabPage;