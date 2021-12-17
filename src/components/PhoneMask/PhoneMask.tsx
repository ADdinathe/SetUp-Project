    //TODO: стиль на скрол в списке; -hz kak ego delat
    //  всякие оптимизации реактовские и причесать коду меня сегодня будет много вопросов по рефам, я не могу придумать как понять на какой именно инпут нажимают
    // и еще есть проблема я не до конца в типах разобрался наверное, но я
import React, {useRef, useState} from 'react';
import './PhoneMask.css';
import {COUNTRIES} from './config';
import {Meta} from "../../utils/meta";
import {
    MainForm,
    MainMask,
    StyledErrorBlock,
    StyledLabel,
    StyledSuccessBlock,
    StyledSelect,
    StyledOption,
    StyledInput, ErrorPic
} from "./PhoneMask.styles";

type PhoneMaskProps = {
    disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({disabled}) => {
    const [countryCode, setcountryCode] = useState(COUNTRIES[0].label);
    const [values, setValues] = React.useState(Array(10).fill(''));
    const [style, setStyle] = useState<string>("input");
    const inputEl = useRef(null);

    const handleSelectChange = React.useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            event.target.value = event.target.value;//  сделано намерено чтобы отображались только цифры в поле select
            setcountryCode(event.target.value);
        },
        []
    );

    const phoneCheck = (phoneCode: string, phoneNum: string) => {
        setStyle('loading');
        if (
            !!COUNTRIES.find((item) => item.label === phoneCode) &&
            phoneNum.length == 10
        ) {
            setStyle('success');
            return;
        }
        setStyle('error');
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        if (event.key === 'Enter') {
            const phoneNumber = values.join('');
            console.log(countryCode + phoneNumber);
            phoneCheck(countryCode, phoneNumber);
            return;
        }
        if (event.key === 'ArrowLeft') {

            if (undefined !== event.target.dataset.index) {

                const index = +event.target.dataset.index;
                if (index > 0) {
                    inputRefs[index - 1].focus();
                    inputRefs[index - 1].select();
                }
            }
        }
        if (event.key === 'ArrowRight') {

            if (undefined !== event.target.dataset.index) {

                const index = +event.target.dataset.index;
                if (index < values.length - 1) {
                    inputRefs[index + 1].focus();
                    inputRefs[index + 1].select();
                }
            }
        }
        if (event.key === 'Backspace') {

            if (undefined !== event.target.dataset.index) {

                const index = +event.target.dataset.index;
                if (index > 0) {
                    setValues(values.map((n, i) => (i === index ? '' : n)));
                    inputRefs[index - 1].focus();
                    inputRefs[index - 1].select();
                }
            }
        }
    };
    const inputRefs: HTMLInputElement[] = [];

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.dataset.index !== undefined) {
            const index = +event.target.dataset.index;
            const value = event.target.value;

            setValues(values.map((n, i) => (i === index ? event.target.value.slice(0,1) : n)));

            if (index < values.length - 1 && value) {
                inputRefs[index + 1].focus();
                inputRefs[index + 1].select();
            }
        }
    };
    return (
        <MainForm>
            <StyledLabel>Введите номер телефона</StyledLabel>
            <MainMask>


                <StyledSelect
                    value={countryCode}
                    onChange={handleSelectChange}
                    tabIndex={1}
                    required> {
                    COUNTRIES.map((i) => (<>
                            <StyledOption key={i.label} label={i.label} hidden> {i.label}</StyledOption>
                            <StyledOption key={i.text} label={i.text}> {i.label}</StyledOption>
                        </>
                    ))}
                </StyledSelect>
                (
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={0}
                    disabled={disabled}
                    value={values[0]}
                    type="number"
                    data-index={0}
                    max="10"
                    tabIndex={2}

                    ref={(input) => ( input? inputRefs[0] = input : console.log("123"))}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={1}
                    disabled={disabled}
                    value={values[1]}
                    type="number"
                    data-index={1}
                    max="10"
                    tabIndex={3}
                    ref={(input) => (inputRefs[1] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />

                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={2}
                    disabled={disabled}
                    value={values[2]}
                    type="number"
                    data-index={2}
                    max="10"
                    tabIndex={4}
                    ref={(input) => (inputRefs[2] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                ) -
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={3}
                    disabled={disabled}
                    value={values[3]}
                    type="number"
                    data-index={3}
                    max="10"
                    tabIndex={5}
                    ref={(input) => (inputRefs[3] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={4}
                    disabled={disabled}
                    value={values[4]}
                    type="number"
                    data-index={4}
                    max="10"
                    tabIndex={6}
                    ref={(input) => (inputRefs[4] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={5}
                    disabled={disabled}
                    value={values[5]}
                    type="number"
                    data-index={5}
                    max="10"
                    tabIndex={7}
                    ref={(input) => (inputRefs[5] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />-
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={6}
                    disabled={disabled}
                    value={values[6]}
                    type="number"
                    data-index={6}
                    max="10"
                    tabIndex={8}
                    ref={(input) => (inputRefs[6] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={7}
                    disabled={disabled}
                    value={values[7]}
                    type="number"
                    data-index={7}
                    max="10"
                    tabIndex={9}
                    ref={(input) => (inputRefs[7] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />-
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={8}
                    disabled={disabled}
                    value={values[8]}
                    type="number"
                    data-index={8}
                    max="10"
                    tabIndex={10}
                    ref={(input) => (inputRefs[8] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <StyledInput
                    error={style === Meta.error}
                    success={style === Meta.success}
                    key={9}
                    disabled={disabled}
                    value={values[9]}
                    type="number"
                    data-index={9}
                    max="10"
                    tabIndex={11}
                    ref={(input) => (inputRefs[9] = input as HTMLInputElement)}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />

                {/*{values.map((n, i) => (*/}
                {/*    */}
                {/*    <StyledInput*/}
                {/*        error={style === Meta.error}*/}
                {/*        success={style === Meta.success}*/}
                {/*        key={i}*/}
                {/*        disabled={disabled}*/}
                {/*        value={values[i]}*/}
                {/*        type="number"*/}
                {/*        data-index={i}*/}
                {/*        max="10"*/}
                {/*        tabIndex={i + 2}*/}
                {/*        ref={(input) => (inputRefs[i] = input as HTMLInputElement)}*/}
                {/*        onChange={onChange}*/}
                {/*        onKeyDown={handleKeyDown}*/}
                {/*    />*/}
                {/*))}*/}
            </MainMask>
            {style === Meta.error && (<ErrorPic>
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666656 13H15.3333L7.99999 0.333313L0.666656 13ZM8.66666 11H7.33332V9.66665H8.66666V11ZM8.66666 8.33331H7.33332V5.66665H8.66666V8.33331Z" fill="#F03738"/>
                    </svg>
                    <StyledErrorBlock>Неправильный номер телефона</StyledErrorBlock>
            </ErrorPic>

            )}
            {style === Meta.success && (<ErrorPic>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00001 0.333313C3.32001 0.333313 0.333344 3.31998 0.333344 6.99998C0.333344 10.68 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00001 0.333313ZM5.66668 10.3333L2.33334 6.99998L3.27334 6.05998L5.66668 8.44665L10.7267 3.38665L11.6667 4.33331L5.66668 10.3333Z" fill="#3CC13B"/>
                </svg>
                    <StyledSuccessBlock>Номер телефона введен верно</StyledSuccessBlock>
            </ErrorPic>

            )}
        </MainForm>


    );
};

export default React.memo(PhoneMask);
