import styled from "styled-components"

interface ButtonsProps{
    buttonAlign : string,
    bgColor : string,
    textTitle : string
}
const ButtonBox = styled.div`
    margin-top:50px;
`;
const ButtonItem = styled.button`
    display:inline-block;
    padding:15px 40px;
    background:${props=>props.color};
    border:none;
`;

export function Buttons(props:ButtonsProps){
    return(
        <ButtonBox >
            <ButtonItem color={props.bgColor}>{props.textTitle}</ButtonItem>
        </ButtonBox>
    )
}