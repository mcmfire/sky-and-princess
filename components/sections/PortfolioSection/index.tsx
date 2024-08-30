import LifeHighlights from "./LifeHighlights";
import AboutUs from "./AboutUs";
import SectionTitle from "@/components/elements/SectionTitle";

const PortfolioSection = () => {
    return (
        <section id="portfolio-section" className="flex-col items-center gap-10">
            <SectionTitle title="Portfolio"/>
            <AboutUs />
            <LifeHighlights />
        </section>
    );
};

export default PortfolioSection;