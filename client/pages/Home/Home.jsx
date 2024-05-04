import Header from "./Header/Header";
import NavBar from "../../Components/NavBar/Navbar";
import style from "./Home.module.css"
import About from "./About/About";
import Servises from "./Services/Services";
import Cosmetics from "./Cosmetics/Cosmetics";
import Advantages from "./Advantages/Advantages";
import Works from "./Works/Works";
import Review from "./Review/Review";

const Home = () => {
    return ( 
        <>
            <NavBar />
            <Header/>
            <main>
                <div className="container">
                    <About />
                    <Servises/>
                    <Cosmetics/>
                    <Advantages/>
                    <Works/>
                    <Review/>
                </div>
            </main>
        </>
    );
}
 
export default Home;