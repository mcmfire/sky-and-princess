import SectionTitle from "@/components/elements/SectionTitle";
import AboutUs from "./AboutUs";
import LifeHighlights from "./LifeHighlights";
import Skills from "./Skills";
import Showcase from "./Showcase";

const PortfolioSection = () => {
    return (
        <section id="portfolio-section" className="flex-col items-center">
            <SectionTitle title="Portfolio" section="portfolio-section" />
            <div className="flex flex-col gap-32">
                <AboutUs />
                <LifeHighlights />
                <Skills />
                <Showcase />
            </div>
        </section>
    );
};

export default PortfolioSection;