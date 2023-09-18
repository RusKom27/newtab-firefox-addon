import {Layout, Link, LinkContainer, Modal, TabLink, TabLinkContainer} from "./components";
import {useTab} from "./hooks";



function App() {
    const {tabs} = useTab();

    return (
        <Layout>
            <TabLinkContainer>
                {tabs.map(tab => <TabLink key={"tab"} tab_link={tab}>{tab}</TabLink>)}
            </TabLinkContainer>
            <LinkContainer name={"main"}>
                <Link href={"https://www.youtube.com/"}>YouTube</Link>
            </LinkContainer>
            <Modal />
        </Layout>
    );
}

export default App;
