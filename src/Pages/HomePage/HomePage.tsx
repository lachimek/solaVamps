import { useRef } from 'react';
import FaqSection from '../../Components/FaqSection/FaqSection';
import KeypointsSection from '../../Components/KeypointsSection/KeypointsSection';
import MintSection, { MintProps } from '../../Components/MintSection/MintSection';
import RewardsSection from '../../Components/RewardsSection/RewardsSection';
import RoadmapSection from '../../Components/RoadmapSection/RoadmapSection';
import TeamSection from '../../Components/TeamSection/TeamSection';
import TopBar from '../../Components/TopBar/TopBar';

const HomePage = (props: MintProps) => {
    document.title = "SolaVamps - Home";
    const roadmapRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const isFaqEnabled = props.siteData.homepageContent.faqSection.faqEnabled;
    const faqData = props.siteData.homepageContent.faqSection.faqItems;
    const roadmapData = props.siteData.homepageContent.roadmapSection.roadmapItems;
    return (
        <div>
            <TopBar roadmapRef={roadmapRef} faqRef={faqRef} isFaqEnabled={isFaqEnabled} isNavigationEnabled={true}/>
            <MintSection 
              candyMachineId={props.candyMachineId}
              config={props.config}
              connection={props.connection}
              startDate={props.startDate}
              treasury={props.treasury}
              txTimeout={props.txTimeout}
              siteData={props.siteData}/>
            <KeypointsSection siteData={props.siteData}/>
            <RewardsSection siteData={props.siteData}/>
            <RoadmapSection roadmapRef={roadmapRef} roadmapData={roadmapData}/>
            {isFaqEnabled && <FaqSection faqRef={faqRef} faqData={faqData}/>}
            <TeamSection/>
        </div>
    )
}

export default HomePage;