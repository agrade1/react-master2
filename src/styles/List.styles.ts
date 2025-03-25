import styled from "styled-components";

export const Title = styled.span`
    display: block;
    font-size: 2em;
    margin-bottom: 20px;
`
export const CountryList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`

export const Country = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: ${(props) => props.theme.textColor + "BF"};
    border-radius: 5px;
`

export const Text = styled.span`
    color: #ddd;
    font-size: 1.2em;
    color: ${(props) => props.theme.bgColor};
`
export const BtnDiv = styled.div`
    display: flex;
    gap: 10px;
`
export const Btn = styled.button`
    background-color: #161E22;
    border: 0;
    padding: 10px;
    border-radius: 5px;
`