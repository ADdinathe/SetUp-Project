import * as React from 'react';

import 'styles/styles.scss';
import { Status } from 'utils/meta';

import StatusBlock from '../ErrorPic';
import CustomSelect from '../CustomSelect';

// TODO: установить prettier и eslint
import { COUNTRIES } from './config';
import { InputWrapper, MainForm, MainMask, StyledInput, StyledLabel } from './PhoneMask.styles';
// TODO: сделать свой хук
// import usePhoneMask from './usePhoneMask';

type PhoneMaskProps = {
    disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({ disabled }: PhoneMaskProps) => {
    // TODO: хранить индекс в массиве, а не лейбл
    const [countryCode, setCountryCode] = React.useState(COUNTRIES[0].label);

    const [values, setValues] = React.useState(Array(10).fill(''));
    // TODO: более говорящее название, например, valuesRef
    const revealRef = React.useRef<HTMLInputElement[]>(Array(10));

    // TODO: более говорящее название, например, inputStatus
    const [style, setStyle] = React.useState(Status.default);

    // TODO: вынести в utils/validate.ts, добавить в аргументы коллбэки onSuccess: VoidFunction, onError: VoidFunction
    const phoneCheck = (phoneNum: string): boolean => {
        const result = phoneNum.match(/[0-9]{10}/g);

        if (phoneNum.length == 10 && result) {
            setStyle(Status.success);
            return true;
        }

        setStyle(Status.error);
        return false;
    };

    const shiftAndDash = React.useCallback((index: number, dash: number) => {
        revealRef.current[index + dash].focus();
        revealRef.current[index + dash].select();
    }, [revealRef]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            phoneCheck(values.join(''));
            return;
        }

        const index = Number((event.target as HTMLInputElement).dataset?.index);

        switch (event.key) {
            // TODO: фигурные скобки в switch case + enum для значений кнопок
            case 'ArrowLeft':
                if (index > 0) {
                    shiftAndDash(index, -1)
                }
                break;
            case 'ArrowRight':
                if (index < 9) {
                    shiftAndDash(index, 1)
                }
                break;
            case 'Backspace':
                if (index > 0 && !values[index]) {
                    // TODO: сделать лучше
                    setValues(values => values.map((v, i) => (i === index ? '' : v)));
                    shiftAndDash(index, -1);
                }
                break;
            case 'Delete':
                if (index < 9) {
                    shiftAndDash(index, 1)
                }
                break;
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.dataset.index !== undefined) {
            const index = Number(event.target.dataset.index);
            const value = event.target.value;

            setValues(values =>
                values.map((v, i) => (i === index ? value.slice(0, 1) : v))
            );

            if (index < 9 && value) {
                shiftAndDash(index, 1)
            }
        }
    };

    return (
        <MainForm>
            <StyledLabel>Введите номер телефона</StyledLabel>
            <MainMask>
                <CustomSelect
                    create={setCountryCode}
                    // TODO: таб индекс для дропдауна
                    // TODO: один пропс status вместо error и success
                    error={style === Status.error}
                    success={style === Status.success}
                />
                {values.map((v, i) => (
                    <InputWrapper
                        key={i}
                        opening={i == 0}
                        closing={i == 3}
                        dash={i == 6 || i == 8}
                    >
                        <StyledInput
                            // TODO: один пропс status
                            error={style === Status.error}
                            success={style === Status.success}
                            disabled={disabled}
                            value={v}
                            data-index={i}
                            tabIndex={i + 2}
                            ref={(el: HTMLInputElement) => {
                                revealRef.current[i] = el
                            }}
                            onChange={onChange}
                            onKeyDown={handleKeyDown}
                        />
                    </InputWrapper>
                ))}
            </MainMask>
            <StatusBlock
              // TODO: перенести компоненты STatusBlock и CustomSelect в PhoneMask/components
                // TODO: пропс status
            style={style}/>
        </MainForm>
    );
};

export default React.memo(PhoneMask);
