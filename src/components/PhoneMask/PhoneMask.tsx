//TODO: стиль на скрол в списке; -hz kak ego delat
//  всякие оптимизации реактовские и причесать код
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
    const inputRef = useRef(null);
    const revealRef = useRef<HTMLInputElement[]>([]);

    const handleSelectChange = React.useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            event.target.value = event.target.value;//  сделано намерено чтобы отображались только цифры в поле select
            setcountryCode(event.target.value);
        },
        []
    );

    const phoneCheck = (phoneCode: string, phoneNum: string) => {
        if (
            phoneNum.length == 10
        ) {
            setStyle('success');
            return;
        }
        setStyle('error');
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
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

            if (event.target.dataset.index !== undefined) {

                const index = Number(event.target.dataset.index);
                if (index > 0) {
                    revealRef.current[index - 1].focus()
                    revealRef.current[index - 1].select();
                    // inputRefs[index - 1].focus();
                    // inputRefs[index - 1].select();
                }
            }
        }
        if (event.key === 'ArrowRight') {

            if (undefined !== event.target.dataset.index) {

                const index = +event.target.dataset.index;
                if (index < values.length - 1) {
                    revealRef.current[index + 1].focus()
                    revealRef.current[index + 1].select();
                }
            }
        }
        if (event.key === 'Backspace') {

            if (undefined !== event.target.dataset.index) {

                const index = +event.target.dataset.index;
                if (index > 0 && values[index]=='') {
                    setValues(values.map((n, i) => (i === index ? '' : n)));
                    revealRef.current[index - 1].focus()
                    // revealRef.current[index - 1].select();
                }
            }
        }
    };
    const inputRefs: HTMLInputElement[] = [];

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.dataset.index !== undefined) {
            const index = +event.target.dataset.index;
            const value = event.target.value;

            setValues(values.map((n, i) => (i === index ? event.target.value.slice(0, 1) : n)));

            if (index < values.length - 1 && value) {
                revealRef.current[index + 1].focus()
                revealRef.current[index + 1].select();
            }
        }
    };

    const myRefs = (el: any) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el)
        }
        console.log(revealRef)
    }


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

                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                    ref={myRefs}
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
                        <path
                            d="M0.666656 13H15.3333L7.99999 0.333313L0.666656 13ZM8.66666 11H7.33332V9.66665H8.66666V11ZM8.66666 8.33331H7.33332V5.66665H8.66666V8.33331Z"
                            fill="#F03738"/>
                    </svg>
                    <StyledErrorBlock>Неправильный номер телефона</StyledErrorBlock>
                </ErrorPic>

            )}
            {style === Meta.success && (<ErrorPic>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.00001 0.333313C3.32001 0.333313 0.333344 3.31998 0.333344 6.99998C0.333344 10.68 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00001 0.333313ZM5.66668 10.3333L2.33334 6.99998L3.27334 6.05998L5.66668 8.44665L10.7267 3.38665L11.6667 4.33331L5.66668 10.3333Z"
                            fill="#3CC13B"/>
                    </svg>
                    <StyledSuccessBlock>Номер телефона введен верно</StyledSuccessBlock>
                </ErrorPic>

            )}
        </MainForm>


    );
};

export default React.memo(PhoneMask);
