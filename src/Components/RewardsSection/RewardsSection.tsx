import styled from 'styled-components';
import SiteData from '../../SiteDataInterface';

const RewardsSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RewardsSectionHeader = styled.div`
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 35px;
    margin-bottom: 35px;
    @media (min-width: 500px){
        font-size: 64px;
        margin-top: 60px;
        margin-bottom: 60px;
    }
`;

const RewardsSectionContent = styled.div`
    font-size: 20px;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;

    @media (min-width: 500px){
        font-size: 36px;
        margin-left: 150px;
        margin-right: 150px;
    }
`;

interface IRewardsSection {
    siteData: SiteData;
}

const RewardsSection = (props: IRewardsSection) => {
    return (
        <RewardsSectionContainer>
            <RewardsSectionHeader>how to get rewards?</RewardsSectionHeader>
            <RewardsSectionContent>
                {props.siteData.homepageContent.rewardsSection.content}
            </RewardsSectionContent>
        </RewardsSectionContainer>
    )
}

export default RewardsSection;