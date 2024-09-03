import SectionTitle from "@/components/elements/SectionTitle";
import Venue from "./Venue";
import Sponsors from "./Sponsors";
import Entourage from "./Entourage";
import CountdownTimer from "@/components/elements/CountdownTimer";

const ProgramSection = () => {
    return (
        <section id="program-section" className="flex-col items-center">
            <SectionTitle title="Program" section="program-section"/>
            <CountdownTimer />
            <Venue />
            <Sponsors />
            <Entourage />
        </section>
    );
};

export default ProgramSection;