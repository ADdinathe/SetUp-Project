import React, {useState} from 'react';
import 'styles/App.scss';
import {COUNTRIES} from "../PhoneMask/config";
import {Status} from "../../utils/meta";

import {
    StyledSelectWrapper,
    StyledSelectedWrapper,
    StyledSelected,
    DropDownListContainer,
    ListContainer,
    ListItem
} from "./Select.styles"

type CustomSelectProps = {
    error?: boolean,
    success?: boolean,
    create: (country: string) => void

};

const CustomSelect: React.FC<CustomSelectProps> = ({create, error, success} ) => {
    const [countryCode, setCountryCode] = useState(COUNTRIES[0].text.split('	').slice(0, 2).join(""));
    const [showUp, setShowUp] = useState<boolean>(false);
    const handleClick = React.useCallback(() => {
        console.log(123)
        setShowUp(!showUp);

    }, []);
    return (
        <StyledSelectWrapper>
            <StyledSelectedWrapper onClick={handleClick} success={success}
                                   error={error}>
                <StyledSelected> {countryCode}</StyledSelected>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.175 0.533325L5 4.34999L8.825 0.533325L10 1.70833L5 6.70833L0 1.70833L1.175 0.533325Z"
                          fill="#C2C9D1"/>
                    <path d="M1.175 0.533325L5 4.34999L8.825 0.533325L10 1.70833L5 6.70833L0 1.70833L1.175 0.533325Z"
                          fill="black" fillOpacity="0.25"/>
                </svg>
            </StyledSelectedWrapper>


            {showUp &&
                <DropDownListContainer>
                    <ListContainer>
                        {COUNTRIES.map((i) => (
                            <ListItem key={Math.random()} onClick={() => {
                                setCountryCode(i.text.split('	').slice(0, 2).join(""))
                                    create(i.label)
                                setShowUp(!showUp)
                            }}>{i.text}</ListItem>
                        ))}
                    </ ListContainer>
                </DropDownListContainer>

            }
        </StyledSelectWrapper>
    );

}


export default React.memo(CustomSelect);
