import styled from "styled-components"

export interface listDataType {
    img: string,
    title: string,
    sub_title : string,
    text : string
}
export interface arrDataProps{
    class: string,
    data : listDataType[]
}

export function FlexList(props:arrDataProps){
    const FlexList = styled.ul`
        display:block;
    `;

    const ListItem = styled.li`
        display:flex;
        justify-content:space-between;
        align-items:center;

        &:not(last-child){
            margin-bottom:30px;
        }

        &:nth-child(odd){
            flex-direction:row-reverse;
        }
    `;

    const ImgBox = styled.div`
        width:560px;
        border:1px solid #e5e5e5;
        border-radius:20px;
        overflow:hidden;

        & > img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    `;

    const TextBox = styled.div`
        width:490px;
        font-size:18px;
        word-break:keep-all;
        .text__title{
            margin-bottom:20px;
            font-size:30px;
            font-weight:bold;
            color:#222;
        }
    `;

    return (
        <FlexList>
            {
                // map 문법 1 : map(item=>({item.title}))
                // map 문법 2 : map((item) => {return({item.title})})
                props.data.map((item, idx) => {
                    return(
                        <ListItem key={idx} className={props.class}>
                            <ImgBox>
                                <img src={item.img} alt="" />
                            </ImgBox>
                            <TextBox>
                                <p className="text__title">{item.title}</p>
                                <p dangerouslySetInnerHTML={{__html:item.text}}></p>
                            </TextBox>
                        </ListItem>
                    )
                })  
            }
        </FlexList>
    )
}

export interface imgDataType {
    imgSrc : string,
    imgArt : string
}

export interface imgDataProps {
    data : imgDataType[]
}

export function GridList(props:imgDataProps){
    const GridList = styled.ul`
        display:grid;
        height:980px;
        grid-template-rows:2fr 1fr 2fr;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:30px;
    `;

    const ListItem = styled.li`
        background:purple;
        overflow:hidden;

        &:nth-child(2){
            grid-row:1/3;
            grid-column:2/2;
        }
        &:nth-child(4){
            grid-row:2/4;
            grid-column:1/2;
        }
        &:nth-child(5){
            grid-row:3/4;
            grid-column:2/2;
        }
        &:nth-child(6){
            grid-row:2/4;
            grid-column:3/4;
        }

        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    `;

    return(
        <GridList>
            {
                props.data.map((item, idx) =>{
                    return (
                        <ListItem key={idx}><img src={item.imgSrc} alt={item.imgArt} /></ListItem>
                    )
                })
            }
        </GridList>
    )
}

export function TableList(){
    const BoxTable = styled.ul`
        border-top:2px solid #222;    
        border-bottom:1px solid #222;    
    `;
    const ListItem = styled.li`
        padding:20px 0;
        & + &{
            border-top:1px solid #eee;
        }
    `;
    return (
        <BoxTable>
            <ListItem>list1</ListItem>
            <ListItem>list1</ListItem>
            <ListItem>list1</ListItem>
            <ListItem>list1</ListItem>
            <ListItem>list1</ListItem>
            <ListItem>list1</ListItem>
        </BoxTable>
    )
}