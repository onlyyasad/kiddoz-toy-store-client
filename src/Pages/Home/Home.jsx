import Banner from "./Banner";
import Gallery from "./Gallery";
import OfferSection from "./OfferSection";
import PopularToys from "./PopularToys";
import SafetySection from "./SafetySection";
import SubCategory from "./SubCategory";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <SafetySection></SafetySection>
            <PopularToys></PopularToys>
            <OfferSection></OfferSection>
        </>
    );
};

export default Home;