import styled from 'styled-components';
import * as anchor from "@project-serum/anchor";

import blade from './Vamps/Blade.png';
import carti from './Vamps/Carti.png';
import count from './Vamps/Count.png';
import dracula from './Vamps/Dracula.png';
import edward from './Vamps/Edward.png';
import randomVamp0 from './Vamps/RandomVamps/0.png';
import randomVamp1 from './Vamps/RandomVamps/1.png';
import randomVamp2 from './Vamps/RandomVamps/2.png';
import randomVamp3 from './Vamps/RandomVamps/3.png';
import randomVamp4 from './Vamps/RandomVamps/4.png';
import randomVamp5 from './Vamps/RandomVamps/5.png';
import randomVamp6 from './Vamps/RandomVamps/6.png';
import randomVamp7 from './Vamps/RandomVamps/7.png';
import randomVamp8 from './Vamps/RandomVamps/8.png';
import randomVamp9 from './Vamps/RandomVamps/9.png';
import MintBtn from '../../Home';
import SiteData from '../../SiteDataInterface';

const MintSectionContainer = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (min-width: 500px){
        margin-top: 85px;
        margin-bottom: 85px;
        margin-right: 60px;
        margin-left: 60px;
    }

    @media (min-width: 1000px){
        flex-direction: row;
        align-items: stretch;
    }
`;

const MintButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const MintButtonInnerContainer = styled.div`
    border-radius: 15px;
    padding: 20px;
    background-color: rgba(17, 16, 46, 0.5);
`;

const MintHeader = styled.div`
    font-size: 36px;

    @media (min-width: 1200px){
        font-size: 48px;
    }
`;

const MintExamplesContainer = styled.div`
    background: rgba(17, 16, 46, 0.5);
    padding: 5px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
    margin-top: 20px;
    @media (min-width: 1000px){
        margin-top: 0px;
    }

    @media (min-width: 1440px){
        margin: 10px;
    }
`;

const VampImage = styled.img`
    margin: 10px;
    border-radius: 5px;
    height: auto;
    width: 96px;
    @media (min-width: 500px){
        width: 128px;
    }

    @media (min-width: 1000px){
        width: 128px;
    }

    @media (min-width: 1440px){
        margin: 15px;
        width: 256px;
    }
`;

export interface MintProps {
    candyMachineId: anchor.web3.PublicKey;
    config: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    treasury: anchor.web3.PublicKey;
    txTimeout: number;
    siteData: SiteData;
}

function randomVamp() {
    let items = [randomVamp0, randomVamp1, randomVamp2, randomVamp3, randomVamp4, randomVamp5, randomVamp6, randomVamp7, randomVamp8, randomVamp9];
    return items[Math.floor(Math.random()*items.length)];
}

const MintSection = (props: MintProps) => {
    return (
        <MintSectionContainer>
            <MintButtonContainer>
                <MintButtonInnerContainer>
                    <MintHeader>Become a Vamp owner</MintHeader>
                    <MintBtn 
                    candyMachineId={props.candyMachineId}
                    config={props.config}
                    connection={props.connection}
                    startDate={props.startDate}
                    treasury={props.treasury}
                    txTimeout={props.txTimeout}
                    siteData={props.siteData}/>
                </MintButtonInnerContainer>
            </MintButtonContainer>
            <MintExamplesContainer>
                <VampImage src={blade}/>
                <VampImage src={carti}/>
                <VampImage src={count}/>
                <VampImage src={dracula}/>
                <VampImage src={edward}/>
                <VampImage src={randomVamp()}/>
            </MintExamplesContainer>
        </MintSectionContainer>
    )
}

export default MintSection;