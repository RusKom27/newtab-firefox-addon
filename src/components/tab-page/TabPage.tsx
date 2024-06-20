import React from 'react';
import {useTab} from "../../hooks";

export interface TabPageProps {

}

const TabPage: React.FC<TabPageProps> = () => {
    const {currentTab} = useTab();

    return (
        <div>
            {currentTab.name}
        </div>
    );
};
export default TabPage;