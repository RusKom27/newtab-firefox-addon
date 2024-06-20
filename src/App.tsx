import {Layout, LinkContainer, Modal, TabLinkContainer} from "./components";



function App() {
    return (
        <Layout>
            <TabLinkContainer/>
            <LinkContainer name={"main"}/>
            <Modal />
        </Layout>
    );
}

export default App;
