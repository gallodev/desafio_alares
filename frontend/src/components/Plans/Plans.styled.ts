import styled from "styled-components";
import Button from 'react-bootstrap/Button';

export const Speed = styled.span`
    font-size: 30px;
    color: ${props => props.color === 'primary' ? "#ffffff" : "#295cf4"};
`

export const SpeedLabel = styled.span`
    color: #00ffa5;
    font-size: 20px;
`

export const ContractButton = styled(Button)`
    border-radius: 50px;
    color: #295cf4;
    background-color: #00ffa5;
    border 2px solid #FFF;
    outline: 2px solid #295cf4;
    transition: 0.5s all ease-in;
    padding: 5px 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        border 2px solid #295cf4;
        outline: 2px solid #FFF;
    }
`