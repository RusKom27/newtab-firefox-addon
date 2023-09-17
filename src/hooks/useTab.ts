import { create } from 'zustand';

const LOCAL_CURRENT_TAB_KEY = "current_tab";
const LOCAL_TABS_LIST_KEY = "tabs";

const getLocalCurrentTab = ():string => {
    return localStorage.getItem(LOCAL_CURRENT_TAB_KEY) || "main";
};

const getLocalTabsList = (): string[] => {
    return JSON.parse(localStorage.getItem(LOCAL_TABS_LIST_KEY) || JSON.stringify(['main']));
};

interface TabState {
    currentTab: string,
    tabs: string[],
    setTab: (newTab:string) => void,
    createTab: (tabName:string) => void,
    removeTab: (tabName:string) => void,
}

const useTab = create<TabState>((set) => ({
    currentTab: getLocalCurrentTab(),
    tabs: getLocalTabsList(),
    setTab: (newTab) => {
        localStorage.setItem(LOCAL_CURRENT_TAB_KEY, newTab);
        set(() => ({
            currentTab: newTab,
        }));
    },
    createTab: (tabName: string) => {
        set((state: TabState) => {
            const tabs = [
                ...state.tabs,
                tabName,
            ];

            localStorage.setItem(LOCAL_TABS_LIST_KEY, JSON.stringify(tabs));
            return {
                tabs,
            };
        });
    },
    removeTab: (tabName: string) => {
        set((state: TabState) => {
            const tabs = state.tabs.filter(tab => tab !== tabName);

            localStorage.setItem(LOCAL_TABS_LIST_KEY, JSON.stringify(tabs));
            return {
                tabs,
            };
        });
    },
}));

export default useTab;