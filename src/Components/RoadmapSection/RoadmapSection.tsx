import styled from 'styled-components';
import Divider from '../GlobalComponents/Divider';
import {roadmapItem} from '../../SiteDataInterface';

const RoadmapContainer = styled.div`
    background-color: #11102E;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const RoadmapContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const RoadmapHeader = styled.div`
    font-size: 40px;
    text-transform: uppercase;
    margin-right: -10px;
    letter-spacing: 10px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 500px) {
        font-size: 64px;
        letter-spacing: 20px;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-right: 0px;
    }
`;

const RoadmapCardCollection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;

    @media (min-width: 500px) {
        flex-direction: row;
        margin-left: 120px;
        margin-right: 120px;
        margin-bottom: 50px;
    }
`;

const RoadmapCard = styled.div`
    background-color: #0B0B1B;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding-top: 25px;
    padding-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    
    @media (min-width: 500px) {
        margin-bottom: 0px;
        width: 18%;
    }

    div:nth-child(1) {
        font-size: 36px;
        margin-bottom: 15px;
    }
    div:nth-child(1n){
        margin-left: 25px;
        margin-right: 25px;
    }
`;

const RoadmapCardPoint = styled.div`
    text-align: center;
    font-size: 22px;
    :not(:last-child) {
        padding-bottom: 20px;
    }
`;

interface RoadmapProps {
    roadmapRef: React.RefObject<HTMLDivElement>,
    roadmapData: roadmapItem[]
}

const RoadmapSection = (props: RoadmapProps) => {
    return (
        <RoadmapContainer ref={props.roadmapRef}>
        <Divider/>
        <RoadmapContent>
            <RoadmapHeader>roadmap</RoadmapHeader>
            <RoadmapCardCollection>
                {props.roadmapData.map((item, index) => 
                    <RoadmapCard key={index}>
                        <div>{item.header}</div>
                        {item.content.map((item, index) =>
                            <RoadmapCardPoint key={index}> {item} </RoadmapCardPoint>
                        )}
                    </RoadmapCard>
                )}
            </RoadmapCardCollection>
        </RoadmapContent>
        <Divider/>
        </RoadmapContainer>
    )
}

export default RoadmapSection;