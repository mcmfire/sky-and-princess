import LifeHighlights from "./LifeHighlights";
import AboutUs from "./AboutUs";
import SectionTitle from "@/components/elements/SectionTitle";
import Skills from "./Skills";

const PortfolioSection = () => {
    return (
        <section id="portfolio-section" className="flex-col items-center gap-10">
            <SectionTitle title="Portfolio"/>
            <AboutUs />
            <LifeHighlights />
            <Skills />
        </section>
    );
};

export default PortfolioSection;