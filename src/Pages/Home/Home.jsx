import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import OfferSection from "./OfferSection";
import SafetySection from "./SafetySection";
import SubCategory from "./SubCategory";


const Home = () => {
    useTitle("Home")
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <SafetySection></SafetySection>
            <OfferSection></OfferSection>
        </>
    );
};

export default Home;