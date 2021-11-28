import styled from 'styled-components';
import SiteData from '../../SiteDataInterface';
import Divider from '../GlobalComponents/Divider';

const KeypointsContainer = styled.div`
    background-color: #11102E;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Content = styled.div`
    padding-bottom: 35px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 500px){
        padding-top: 70px;
        padding-bottom: 70px;
        flex-direction: row;
        align-items: none;
    }
`;

const Keypoint = styled.div`
    width: 100vw;
    text-align: center;
    
    @media (min-width: 500px){
        width: 33%;
        &:nth-of-type(1){
            margin-left: 120px;
        }

        &:nth-of-type(2){
            margin-left: 40px;
            margin-right: 40px;
        }

        &:nth-of-type(3){
            margin-right: 120px;
        }
    }
`;

const KeypointDescription = styled.div`
    font-size: 24px;
    word-wrap: break-word;
    margin-right: 20px;
    margin-left: 20px;
    @media (min-width: 500px){
        font-size: 36px;
        margin: unset;
    }
`;

const KeypointHeader = styled.div`
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 35px;
    margin-top: 35px;

    @media (min-width: 500px){
        font-size: 64px;
        margin-bottom: 0px;
    }
`;

interface IKeypointsSection {
    siteData: SiteData;
}

const KeypointsSection = (props: IKeypointsSection) => {
    const keypoints = props.siteData.homepageContent.keypointsSection;
    const charity = keypoints.charity;
    const weekly = keypoints.weeklyRewards;
    const slatt = keypoints.slatt;
    return (
        <KeypointsContainer>
            <Divider/>
            <Content>
                <Keypoint>
                    <KeypointHeader>charity</KeypointHeader>
                    <KeypointDescription>
                        {charity.content}
                    </KeypointDescription>
                </Keypoint>
                <Keypoint>
                    <KeypointHeader>weekly rewards</KeypointHeader>
                    <KeypointDescription>
                        {weekly.content}
                    </KeypointDescription>
                </Keypoint>
                <Keypoint>
                    <KeypointHeader>slatt</KeypointHeader>
                    <KeypointDescription>
                        {slatt.content}
                    </KeypointDescription>
                </Keypoint>
            </Content>
            <Divider/>
        </KeypointsContainer>
    )
}

export default KeypointsSection;
