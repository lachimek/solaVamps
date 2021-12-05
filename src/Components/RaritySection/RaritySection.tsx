import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import vampRating from './vampRating';

const RarityContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    margin-left: 2%;
    margin-right: 2%;

    @media (min-width: 500px){
        flex-direction: row;
    }
`;

const VampireCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 500px){
        margin-left: 22%;
    }
`;

const VampImage = styled.img`
    width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    @media (min-width: 500px){
        width: 512px;
        height: 512px;
        background-color: black;
    }
`;

const VampForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    padding-left: 10px;
    width: 100%;
`;

const FormField = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: space-around;
    align-items: center;

    label {
        padding-top: 0.2em;
    }

    input {
        background-color: #11102E;
        border: none;
        color: #D13030;
        font-family: "BitBap";
        font-size: 24px;
        width: 15%;
        padding-top: 0.2em;
        text-align: center;
        border-radius: 5px;

        &:focus {
            outline: none;
            background-color: #191844c1
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    @media (min-width: 500px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const VampScore = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    background-color: #11102E;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (min-width: 500px){
        font-size: 36px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

const PropertiesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #11102E;
    height: 40%;
    font-size: 24px;
    border-radius: 10px;
    padding: 15px;
    min-width: 20%;
    &>div {
        display: flex;
        justify-content: space-between;
    }
    &>div:not(:last-child){
        margin-bottom: 5px;
    }
    @media (min-width: 500px){
        margin-left: 2%;
        margin-bottom: 0px;
        padding: 25px;
    }
`;

interface IVampProperty {
    background?: number;
    coat?: number;
    sweater?: number;
    face?: number;
    mouth?: number;
    hair?: number;
    eyes?: number;
    accesories?: number;
}

function RaritySection() {
    const [vampNumber, setVampNumber] = useState(0);
    const [vampImage, setVampImage] = useState("");
    const [vampMetadata, setVampMetadata] = useState([]);
    const [vampScore, setVampScore] = useState<number>();
    const [vampProperties, setVampProperties] = useState<IVampProperty>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val: number = parseInt(e.target.value);
        if(val < 0 || val == null) val = 0;

        if(val <= 199) setVampNumber(val)
        else setVampNumber(0);
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = '';
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = vampNumber.toString();
    }

    function getTraitRarity(trait_type: string, trait_name: string): string {
        const total = 200;
        switch (trait_type) {
            case "Background":
                return `${vampProperties.background}/${total}`;

            case "Coat":
                return `${vampProperties.coat}/${total}`;

            case "Sweater":
                return `${vampProperties.sweater}/${total}`;
            
            case "Face":
                return `${vampProperties.face}/${total}`;

            case "Mouth":
                return `${vampProperties.mouth}/${total}`;

            case "Hair":
                return `${vampProperties.hair}/${total}`;

            case "Eyes":
                return `${vampProperties.eyes}/${total}`;
            
            case "Accesories":
                return `${vampProperties.accesories}/${total}`;
        
            default:
                return "err";
        }
    }

    useEffect(() => {
        setVampImage(require(`./Vamps/${vampNumber}.png`).default);
        setVampMetadata(require(`./Metadata/${vampNumber}.json`).attributes);
        
    }, [vampNumber])

    useEffect(() => {
        const handleVampScore = () => {
            let score = 0;
            vampMetadata.forEach(({trait_type, value}) => {
                if(trait_type === "Background") {
                    vampRating.background.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                background: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Coat") {
                    vampRating.coat.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                coat: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Sweater") {
                    vampRating.sweater.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                sweater: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Face") {
                    vampRating.face.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                face: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Mouth") {
                    vampRating.mouth.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                mouth: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Hair") {
                    vampRating.hair.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                hair: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Eyes") {
                    vampRating.eyes.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                eyes: count
                            }));
                        };
                    })
                }
                else if(trait_type === "Accesories") {
                    vampRating.accesories.forEach(({name, val, count}) => {
                        if(name === value){ 
                            score += val;
                            setVampProperties(prevState => ({
                                ...prevState,
                                accesories: count
                            }));
                        };
                    })
                }
            });
            return score;
        }
        
        setVampScore(handleVampScore());
    }, [vampMetadata])

    return (
        <RarityContainer>
            <VampireCard>
                <VampImage src={vampImage}/>
                <VampScore title="Higher equals more rare">This Vamp has a rarity of: {vampScore?.toFixed(4)}</VampScore>
                <VampForm>
                    <FormField>
                        <label>OG SOLAVAMP #{vampNumber}</label>
                        <input type="number" value={vampNumber} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </FormField>
                </VampForm>
            </VampireCard>
            <PropertiesCard>
                {vampMetadata.map(({trait_type, value}, i) => 
                    <div key={i}>
                        <div>{trait_type}</div>
                        <div>{value === 'aureola' ? 'Aureola': value} ({getTraitRarity(trait_type, value)})</div>
                    </div>
                )}
            </PropertiesCard>
        </RarityContainer>
    )
}

export default RaritySection
