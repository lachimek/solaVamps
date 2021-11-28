import styled from 'styled-components';
import TopBar from '../../Components/TopBar/TopBar';

const RarityPageContainer = styled.div`
    font-size: 64px;
`;

const RarityContainer = styled.div`
    display: flex;
    padding-top: 20%;
    justify-content: center;
    align-items: center;
`;

const RarityPage = () => {
    document.title = "SolaVamps - Rarity";
    return (
        <RarityPageContainer>
            <TopBar/>
            <RarityContainer>
            Coming soon!
            </RarityContainer>
        </RarityPageContainer>
    )
}

export default RarityPage;