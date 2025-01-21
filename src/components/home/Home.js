import Contact from "../contact/Contact";
import Banner from "./banner/Banner"
import Clients from "./clients/Clients";
import Introduction from "./introduction/Introduction";

const Home = () => {
    return (
        <main>
            <Banner/>
            <Introduction/>
            <Clients/>
            <Contact/>
        </main>
    )
}

export default Home;