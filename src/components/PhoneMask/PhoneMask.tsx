import React, {useRef, useState} from 'react';
import './PhoneMask.css';
import {COUNTRIES} from './config';

type PhoneMaskProps = {
    disabled: boolean;
};

let success = false;

const PhoneMask: React.FC<PhoneMaskProps> = ({disabled}) => {
    const [countryCode, setcountryCode] = useState(COUNTRIES[0].label);
    const [values, setValues] = React.useState(Array(10).fill(''));
    const [style, setStyle] = useState<string>('num-input');
    const inputEl = useRef(null);

    const handleSelectChange = React.useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            event.target.value = event.target.value;//  сделано намерено чтобы отображались только цифры в поле select
            setcountryCode(event.target.value);
        },
        []
    );

    const phoneCheck = (phoneCode: string, phoneNum: string) => {
        if (
            !!COUNTRIES.find((item) => item.label === phoneCode) &&
            phoneNum.length == 10
        ) {
            setStyle('num-input-success');
            return;
        }
        setStyle('num-input-error');
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // if (!(event.target instanceof HTMLElement)) {
        //   return;
        // }
        if (event.key === 'Enter') {
            const phoneNumber = values.join('');
            console.log(countryCode + phoneNumber);
            phoneCheck(countryCode, phoneNumber);
            return;
        }
        if (event.key === 'ArrowLeft') {
            // @ts-ignore
            if (undefined !== event.target.dataset.index) {
                // @ts-ignore
                const index = +event.target.dataset.index;
                if (index > 0) {
                    inputRefs[index - 1].focus();
                    inputRefs[index - 1].select();
                }
            }
        }
        if (event.key === 'ArrowRight') {
            // @ts-ignore
            if (undefined !== event.target.dataset.index) {
                // @ts-ignore
                const index = +event.target.dataset.index;
                if (index < values.length - 1) {
                    inputRefs[index + 1].focus();
                    inputRefs[index + 1].select();
                }
            }
        }
        if (event.key === 'Backspace') {
            // @ts-ignore
            if (undefined !== event.target.dataset.index) {
                // @ts-ignore
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

            setValues(values.map((n, i) => (i === index ? value : n)));

            if (index < values.length - 1 && value) {
                inputRefs[index + 1].focus();
                inputRefs[index + 1].select();
            }
        }
    };

    return (
        <div className="MainForm">
            <label className="phone">Введите номер телефона</label>
            <div className="MainMask">
                <select
                    className="num-select"
                    value={countryCode}
                    onChange={handleSelectChange}
                    tabIndex={1}
                    required
                >
                    {
                        COUNTRIES.map((i) => (<>
                                <option key={i.label} className="option" label={i.label} hidden>
                                    {i.label}
                                </option>
                                <option key={i.text} className="option" label={i.text}>
                                    {i.label}
                                </option>
                            </>

                        ))}
                </select>
                {values.map((n, i) => (
                    <input
                        key={i}
                        disabled={disabled}
                        value={values[i]}
                        className={style}
                        type="number"
                        data-index={i}
                        onChange={onChange}
                        ref={(input) => (inputRefs[i] = input as HTMLInputElement)}
                        maxLength={1}
                        tabIndex={i + 2}
                        onKeyDown={handleKeyDown}
                    />
                ))}
            </div>
            {style === 'num-input-error' && (
                <div className="error">Неправильный номер телефона</div>
            )}
            {style === 'num-input-success' && (
                <div className="succes">Номер телефона введен верно</div>
            )}
        </div>
    );
};

export default React.memo(PhoneMask);
