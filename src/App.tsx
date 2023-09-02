import {Layout, Link, LinkContainer, TabLink, TabLinkContainer} from "./components";

function App() {

    return (
        <Layout>
            <TabLinkContainer>
                <TabLink tab_link={"main"}>Main</TabLink>
                <TabLink tab_link={"work"}>Work</TabLink>
            </TabLinkContainer>
            <LinkContainer>
                <Link href={"https://www.youtube.com/"}>YouTube</Link>
            </LinkContainer>
        </Layout>
    );
}

export default App;
