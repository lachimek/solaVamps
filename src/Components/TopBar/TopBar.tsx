import { Link } from 'react-router-dom';
import styled from 'styled-components';
import discordLogo from '../TopBar/discord-logo.svg';
import twitterLogo from '../TopBar/twitter-logo.svg';

const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 500px){
        padding-left: 0px;
        padding-right: 0px;
        margin-right: 60px;
        margin-left: 60px;
    }
`;

const Logo = styled(Link)`
    font-size: 20px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    color: #D13030 !important;

    :hover {
        color: #ad2525 !important;
    }

    @media (min-width: 500px){
        font-size: 36px;
    }
`;

const Navigation = styled.div`
    display: flex;
    font-size: 20px;
    margin: 0;

    @media (min-width: 500px){
        font-size: 36px;
    }
`;

const NavigationItem = styled(Link)`
    margin: 0 5px 0 5px;
    text-decoration: none;
    color: #D13030 !important;
    cursor: pointer;
    :hover {
        color: #ad2525 !important;
    }

    @media (min-width: 500px){
        margin: 0 10px 0 10px;
    }
`;

const Socials = styled.div`
    display: flex;
    height: 20px;
    @media (min-width: 500px){
        height: 40px;
    }
`;

const SocialIcon = styled.img`
    filter: invert(23%) sepia(86%) saturate(2360%) hue-rotate(345deg) brightness(88%) contrast(88%);
    :hover {
        filter: invert(33%) sepia(86%) saturate(2360%) hue-rotate(345deg) brightness(88%) contrast(88%);
    }
    cursor: pointer;
    margin-left: 10px;
`;

interface TopBarProps {
    roadmapRef?: React.RefObject<HTMLDivElement>,
    faqRef?: React.RefObject<HTMLDivElement>,
    isFaqEnabled?: boolean,
    isNavigationEnabled?: boolean
}

const TopBar = (props: TopBarProps) => {
    function handleScrollToRoadmap(){
        props.roadmapRef!.current?.scrollIntoView({ behavior: 'smooth' })
    }

    function handleScrollToFaq(){
        props.faqRef!.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <TopBarContainer>
            <Logo to={"/"}>SolaVamps</Logo>
            {props.isNavigationEnabled && 
            <Navigation>
                <NavigationItem to={"/rarity"}>rarity</NavigationItem>
                <NavigationItem to={"/"} onClick={handleScrollToRoadmap}>roadmap</NavigationItem>
                {props.isFaqEnabled && <NavigationItem to={"/"} onClick={handleScrollToFaq}>faq</NavigationItem>}
            </Navigation>}
            <Socials>
                <SocialIcon src={twitterLogo}/>
                <SocialIcon src={discordLogo}/>
            </Socials>
        </TopBarContainer>
    )
}

export default TopBar;
