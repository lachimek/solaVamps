import styled from 'styled-components';
import RaritySection from '../../Components/RaritySection/RaritySection';
import TopBar from '../../Components/TopBar/TopBar';

const RarityPageContainer = styled.div`
    
`;

const RarityContainer = styled.div`
    display: flex;
    padding-top: 10px;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px){
        padding-top: 100px;
    }
`;

const RarityPage = () => {
    document.title = "SolaVamps - Rarity";
    return (
        <RarityPageContainer>
            <TopBar/>
            <RarityContainer>
            <RaritySection/>
            </RarityContainer>
        </RarityPageContainer>
    )
}

export default RarityPage;