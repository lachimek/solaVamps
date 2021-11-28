import styled from "styled-components";
import davamp from "../TeamSection/TeamImages/davamp.png";
import kingvamp from "../TeamSection/TeamImages/kingvamp.png";

const TeamSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeamHeader = styled.div`
    font-size: 40px;
    letter-spacing: 10px;
    margin-right: -10px;
    margin-top: 20px;
    margin-bottom: 40px;

    @media (min-width: 500px) {
        font-size: 64px;
        letter-spacing: 20px;
        margin-right: -20px;
        margin-top: 20px;
        margin-bottom: 0px;
    }
`;

const TeamCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 500px){
        width: 100%;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }
`;

const TeamCard = styled.div`
    background-color: #11102E;
    height: 400px;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 40px;

    @media (min-width: 500px){
        margin-bottom: 0px;
        &:nth-of-type(1){
            margin-right: 120px;
        }
        &:nth-of-type(2){
            margin-left: 120px;
        }
    }
`;

const TeamImage = styled.img`
    height: 256px;
    width: auto;
    border-radius: 5px;
`;

const TeamName = styled.div`
    font-size: 64px;
    text-align: center;
    margin-top: 10px;
`;

const TeamRole = styled.div`
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
`;

const Copyright = styled.div`
    font-size: 14px;
`;

const TeamSection = () => {
    return (
        <TeamSectionContainer>
            <TeamHeader>TEAM</TeamHeader>
            <TeamCardsContainer>
                <TeamCard>
                    <TeamImage src={kingvamp}/>
                    <TeamName>King Vamp</TeamName>
                    <TeamRole>art and marketing</TeamRole>
                </TeamCard>
                <TeamCard>
                    <TeamImage src={davamp}/>
                    <TeamName>DaVamp</TeamName>
                    <TeamRole>dev and design</TeamRole>
                </TeamCard>
            </TeamCardsContainer>
            <Copyright>Copyright © {new Date().getFullYear()} SolaVamps</Copyright>
        </TeamSectionContainer>
    )
}

export default TeamSection;
