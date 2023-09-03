import {Layout, Link, LinkContainer} from "./components";

function App() {

    return (
        <Layout>
            <LinkContainer name={"main"}>
                <Link href={"https://www.youtube.com/"}>YouTube</Link>
            </LinkContainer>
        </Layout>
    );
}

export default App;
