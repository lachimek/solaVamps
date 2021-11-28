import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import styled from 'styled-components';
import { faqItem } from '../../SiteDataInterface';
import '../FaqSection/accordion-style.css';

const FaqContainer = styled.div`
    padding-top: 30px;
    @media (min-width: 500px){
        padding-top: 60px;
    }
`;

const FaqHeader = styled.div`
    font-size: 40px;
    letter-spacing: 10px;
    margin-right: -10px;
    text-align: center;
    margin-bottom: 30px;

    @media (min-width: 500px){
        font-size: 64px;
        letter-spacing: 20px;
        margin-right: -20px;
        margin-bottom: 50px;
    }
`;


interface FaqProps {
    faqRef: React.RefObject<HTMLDivElement>,
    faqData: faqItem[]
}

const FaqSection = (props: FaqProps) => {
    return (
        <FaqContainer ref={props.faqRef}>
            <FaqHeader>FAQ</FaqHeader>
            <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                {props.faqData.map((data, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {data.question}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                {data.answer}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                
            </Accordion>
        </FaqContainer>
    )
}

export default FaqSection;