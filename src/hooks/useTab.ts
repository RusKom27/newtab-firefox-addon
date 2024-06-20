import {create} from 'zustand';
import Tab from "../types/Tab.ts";

const LOCAL_CURRENT_TAB_KEY = "current_tab";
const LOCAL_TABS_LIST_KEY = "tabs";

const getLocalCurrentTab = ():Tab => {

    const currentTab = localStorage.getItem(LOCAL_CURRENT_TAB_KEY);

    if (!currentTab) {

        const newCurrentTab = getLocalTabsList()[0] || createTab("main");

        localStorage.setItem(LOCAL_CURRENT_TAB_KEY, JSON.stringify(newCurrentTab));
        return newCurrentTab;
    }
    
    return JSON.parse(currentTab);



};

const setLocalCurrentTab = (tab: Tab) => {
    localStorage.setItem(LOCAL_CURRENT_TAB_KEY, JSON.stringify(tab));
};

const getLocalTabsList = (): Tab[] => {
    return JSON.parse(localStorage.getItem(LOCAL_TABS_LIST_KEY) || JSON.stringify([createTab("main")]));
};

const setLocalTabsList = (tabs: Tab[]) => {
    localStorage.setItem(LOCAL_TABS_LIST_KEY, JSON.stringify(tabs));
};

const createTab = (tabName: string): Tab => {
    return {
        name: tabName,
        linksContainers: [],
    };
};

interface TabState {
    currentTab: Tab,
    tabs: Tab[],
    setTab: (newTab:string) => void,
    createTab: (tabName:string) => void,
    removeTab: (tabName:string) => void,
}

const useTab = create<TabState>((set) => ({

    currentTab:
        getLocalTabsList().filter(item => item.name === getLocalCurrentTab().name)[0]
        || getLocalTabsList()[0]
        || createTab("main"),
    tabs: getLocalTabsList(),
    setTab: (newTab: string) => {

        set((state: TabState) => {

            const tab = state.tabs.filter(item => item.name === newTab)[0];

            if (!tab) {
                return {
                    currentTab: state.currentTab,
                };
            }

            setLocalCurrentTab(tab);

            return {
                currentTab: tab,
            };
        });
    },
    createTab: (tabName: string) => {
        set((state: TabState) => {


            if (state.tabs.filter(item => item.name === tabName).length > 0) {
                return {
                    tabs: state.tabs,
                };
            }
            const tab = createTab(tabName);

            const tabs = [
                ...state.tabs,
                tab,
            ];

            setLocalTabsList(tabs);
            return {
                tabs,
            };
        });
    },
    removeTab: (tabName: string) => {
        set((state: TabState) => {
            const tabs = state.tabs.filter(tab => tab.name !== tabName);

            if (tabName === state.currentTab.name) {
                setLocalCurrentTab(tabs[0]);
            }

            setLocalTabsList(tabs);

            return {
                tabs,
            };
        });
    },
}));

export default useTab;