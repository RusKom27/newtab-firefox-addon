import {create} from 'zustand';
import {Tab, Link, LinksContainer} from "../types/Tab.ts";

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
    const tabs = JSON.parse(localStorage.getItem(LOCAL_TABS_LIST_KEY) || JSON.stringify([createTab("main")]));

    setLocalTabsList(tabs);

    return tabs;
};

const setLocalTabsList = (tabs: Tab[]) => {
    localStorage.setItem(LOCAL_TABS_LIST_KEY, JSON.stringify(tabs));
};

const createTab = (tabName: string): Tab => {
    return {
        name: tabName,
        linksContainers: [createLinkContainer("container1")],
    };
};

const createLinkContainer = (name: string): LinksContainer => {
    return {
        name,
        links: [],
    };
};

interface TabState {
    currentTab: Tab,
    tabs: Tab[],
    setTab: (newTab:string) => void,
    createTab: (tabName:string) => void,
    removeTab: (tabName:string) => void,
    addLinkContainer: (tabName:string, linkContainerName: string) => void,
    removeLinkContainer: (tabName:string, linkContainerName: string) => void,
    addLink: (
        tabName:string,
        linkContainerName:string,
        link:Link
    ) => void,
    changeLink: (
        tabName:string,
        linkContainerName:string,
        link:Link,
        newLink:Link,
    ) => void,
    removeLink: (
        tabName:string,
        linkContainerName:string,
        linkName:string
    ) => void,
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
    addLinkContainer: (tabName: string, linkContainerName: string) => {
        set((state: TabState) => {



            const tab = state.tabs.filter(item => item.name === tabName)[0];

            if (!tab) {
                return {
                    tabs: state.tabs,
                };
            }

            state.tabs.forEach(tab => {
                if (tab.name === tabName) {
                    tab.linksContainers.push(createLinkContainer(linkContainerName));
                }
            });

            const tabs = state.tabs;

            setLocalTabsList(tabs);
            return {
                tabs,
            };
        });
    },
    removeLinkContainer: (tabName: string, linkContainerName: string) => {
        set((state: TabState) => {
            const tab = state.tabs.filter(item => item.name === tabName)[0];
            if (!tab) {
                return {
                    tabs: state.tabs,
                };
            }

            const tabs = [
                ...state.tabs.filter(item => item.name !== tabName),
                {
                    ...tab,
                    linksContainers:
                        tab.linksContainers.filter((item: LinksContainer) => item.name !== linkContainerName),
                },
            ];

            setLocalTabsList(tabs);
            return {
                tabs,
            };
        });
    },
    addLink: (
        tabName: string,
        linkContainerName: string,
        link: Link,
    ) => {
        set((state: TabState) => {
            const tab = state.tabs.filter(item => item.name === tabName)[0];
            if (!tab) {
                return {
                    tabs: state.tabs,
                };
            }

            const linkContainer =
                tab.linksContainers.filter((item: LinksContainer) => item.name === linkContainerName)[0];
            if (!linkContainer) {
                return {
                    tabs: state.tabs,
                };
            }

            state.tabs.forEach(tab => {
                if (tab.name === tabName) {
                    tab.linksContainers.forEach(linkContainer => {
                        if (linkContainer.name === linkContainerName) {
                            linkContainer.links.push(link);
                        }
                    });
                }
            });

            setLocalTabsList(state.tabs);

            const tabs = state.tabs;

            return {
                tabs,
            };
        });
    },
    changeLink: (
        tabName: string,
        linkContainerName: string,
        link: Link,
        newLink: Link,
    ) => {
        set((state: TabState) => {
            const tab = state.tabs.filter(item => item.name === tabName)[0];
            if (!tab) {
                return {
                    tabs: state.tabs,
                };
            }

            const linkContainer =
                tab.linksContainers.filter((item: LinksContainer) => item.name === linkContainerName)[0];
            if (!linkContainer) {
                return {
                    tabs: state.tabs,
                };
            }

            state.tabs.forEach(tab => {
                if (tab.name === tabName) {
                    tab.linksContainers.forEach(linkContainer => {
                        if (linkContainer.name === linkContainerName) {

                            linkContainer.links = linkContainer.links.map((item: Link) => {

                                if (item.name === link.name) {
                                    return newLink;
                                }
                                return item;
                            });
                        }
                    });
                }
            });

            setLocalTabsList(state.tabs);

            const tabs = state.tabs;

            return {
                tabs,
            };
        });
    },
    removeLink: (
        tabName: string,
        linkContainerName: string,
        linkName: string,
    ) => {
        set((state: TabState) => {
            const tab = state.tabs.filter(item => item.name === tabName)[0];
            if (!tab) {
                return {
                    tabs: state.tabs,
                };
            }

            const linkContainer =
                tab.linksContainers.filter((item: LinksContainer) => item.name === linkContainerName)[0];
            if (!linkContainer) {
                return {
                    tabs: state.tabs,
                };
            }

            state.tabs.forEach(tab => {
                if (tab.name === tabName) {
                    tab.linksContainers.forEach(linkContainer => {
                        if (linkContainer.name === linkContainerName) {
                            linkContainer.links = linkContainer.links.filter((item: Link) => item.name !== linkName);
                        }
                    });
                }
            });

            const tabs = state.tabs;

            setLocalTabsList(tabs);
            return {
                tabs,
            };
        });
    },
}));

export default useTab;