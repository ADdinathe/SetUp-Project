import React, {useRef, useState} from 'react';
import 'styles/App.scss';
import {COUNTRIES} from './config';
import {Status} from 'utils/meta';
import {
    MainForm,
    MainMask,
    StyledInput,
    StyledLabel,
    InputWrapper,
} from './PhoneMask.styles';
import StatusBlock from "../ErrorPic";
import CustomSelect from "../CustomSelect";

type PhoneMaskProps = {
    disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({disabled}) => {
    const [countryCode, setCountryCode] = useState(COUNTRIES[0].label);
    const [values, setValues] = React.useState(Array(10).fill(''));
    const [style, setStyle] = useState<string>('input');
    const revealRef = useRef<HTMLInputElement[]>(Array(10));

    const phoneCheck = (phoneNum: string) => {
        let result = phoneNum.match(/[0-9]{10}/g);
        if (phoneNum.length == 10 && result) {
            setStyle('success');
            return true;
        }
        setStyle('error');
        return false;
    };
    const shiftAndDash = (index: number, dash: number) => {
        revealRef.current[index + dash].focus();
        revealRef.current[index + dash].select();
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        if (event.key === 'Enter') {
            const phoneNumber = values.join('');
            phoneCheck(phoneNumber)
                ? console.log(countryCode + phoneNumber)
                : console.log('error');

            return;
        }
        const index = Number(event.target.dataset.index);
        switch (event.key) {

            case 'ArrowLeft':
                if (index > 0) {
                    shiftAndDash(index, -1)
                }
                break;
            case 'ArrowRight':
                if (index < values.length - 1) {
                    shiftAndDash(index, 1)
                }
                break;
            case 'Backspace':
                if (index > 0 && values[index] == '') {
                    setValues(values.map((n, i) => (i === index ? '' : n)));
                    revealRef.current[index - 1].focus();
                }
                break;
            case 'Delete':
                if (index < values.length - 1) {
                    shiftAndDash(index, 1)
                }
                break;
        }
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.dataset.index !== undefined) {
            const index = Number(event.target.dataset.index);
            const value = event.target.value;

            setValues(
                values.map((n, i) => (i === index ? value.slice(0, 1) : n))
            );

            if (index < values.length - 1 && value) {
                shiftAndDash(index, 1)
            }
        }
    };
    const ChosenCountrySetter = (chosenCountry: string) => {
        setCountryCode(chosenCountry);
    }
    return (
        <MainForm>
            <StyledLabel>Введите номер телефона</StyledLabel>
            <MainMask>
                <CustomSelect
                    create={ChosenCountrySetter}
                    error={style === Status.error}
                    success={style === Status.success}
                />

                {values.map((n, i) => (
                    <InputWrapper
                        key={i}
                        opening={i == 0}
                        closing={i == 3}
                        dash={i == 6 || i == 8}
                    >
                        <StyledInput
                            error={style === Status.error}
                            success={style === Status.success}
                            disabled={disabled}
                            value={values[i]}
                            type="number"
                            data-index={i}
                            max="9"
                            tabIndex={i + 2}
                            ref={(el) => {
                                revealRef.current[i] = el as HTMLInputElement
                            }}
                            onChange={onChange}
                            onKeyDown={handleKeyDown}
                        />
                    </InputWrapper>
                ))}
            </MainMask>
            <StatusBlock style={style}/>

        </MainForm>
    );
};

export default React.memo(PhoneMask);
