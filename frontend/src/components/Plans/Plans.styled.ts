import styled from "styled-components";
import { Button } from 'react-bootstrap';

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
    border ${props => props.color === 'primary' ? '2px solid #295cf4': '2px solid #FFF;'};
    outline: ${props => props.color === 'primary' ? '2px solid #FFF;' : '2px solid #295cf4;'}
    transition: 0.5s all ease-in;
    padding: 5px 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        border ${props => props.color === 'primary' ? '2px solid #FFF;': '2px solid #295cf4;'};
        outline: ${props => props.color === 'primary' ? '2px solid #295cf4;': '2px solid #FFF;'};
    }
`

export const LargePrice = styled.span`
   font-size: 43px;
   margin-top: -13px;
`

export const Period = styled.span`
    float: right;
`

export const ContainerPrice = styled.div`
    width: 120px;
    margin-bottom: 20px;
`