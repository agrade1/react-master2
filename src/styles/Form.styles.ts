import styled from "styled-components";

export const Title = styled.span`
    display: block;
    font-size: 2em;
    margin-bottom: 20px;
`
export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 8px;
    background-color: #161E22;
    border: 0;
    font-size: 1.2em;
    color: ${(props)=>props.theme.textColor};
    line-height: 30px;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 8px 12px;
    background-color: #0E161A;
    border: 0;
    color: white;
    font-size: 1.2em;
    line-height: 30px;
    border-radius: 5px;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 2em;
    margin-bottom: 20px;
    color: ${(props)=>props.theme.accentColor};
`
