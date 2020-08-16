import React, { ChangeEvent, FocusEvent } from 'react';

import { Container, Error } from './styles';

interface InputProps {
    nome: string;
    label: string;
    type: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    erro?: string;
}

const Input: React.FC<InputProps> = ({ nome, label, type, onChange, onBlur, erro }) => {
    return (
        <Container>
            <label htmlFor={nome}>{label}</label>
            <input id={nome} name={nome} type={type} onChange={onChange} onBlur={onBlur} />
            {erro && <Error>{erro}</Error>}
        </Container>
    );
};

export default Input;
