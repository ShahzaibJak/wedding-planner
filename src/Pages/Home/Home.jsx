import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import HowItWork from "./HowItWork";
import Services from "./Services";


const Home = () => {

    const services = useLoaderData()
    return (
        <div>
        <HeroSection></HeroSection>
        <Services ></Services>
        <HowItWork></HowItWork>
        <AboutUs></AboutUs>
        </div>
    );
};

export default Home;