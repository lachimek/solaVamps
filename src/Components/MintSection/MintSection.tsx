import styled from 'styled-components';
import * as anchor from "@project-serum/anchor";

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

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const img0 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;
const img1 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;
const img2 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;
const img3 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;
const img4 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;
const img5 = require(`./Vamps/${getRandomInt(0, 99)}.png`).default;

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
                <VampImage src={img0}/>
                <VampImage src={img1}/>
                <VampImage src={img2}/>
                <VampImage src={img3}/>
                <VampImage src={img4}/>
                <VampImage src={img5}/>
            </MintExamplesContainer>
        </MintSectionContainer>
    )
}

export default MintSection;