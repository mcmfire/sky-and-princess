import LifeHighlights from "./LifeHighlights";
import AboutUs from "./AboutUs";

const PortfolioSection = () => {
    return (
        <section id="portfolio-section" className="flex-col items-center gap-10">
            <AboutUs />
            <LifeHighlights />
        </section>
    );
};

export default PortfolioSection;