import styled from "styled-components";
import { theme } from "../styles/Theme";

export interface listDataType {
  img: string;
  title: string;
  sub_title: string;
  text: string;
}
export interface arrDataProps {
  class: string;
  data: listDataType[];
}

export function FlexList(props: arrDataProps) {
  const FlexList = styled.ul`
    display: block;
  `;
  const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:last-child {
      padding-left: 40px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
      & > div:last-child {
        padding-left: 0;
        padding-right: 40px;
      }
    }
    @media ${theme.device.mobile}{
      display: block;
      & > div:last-child {
        padding-left: 0;
      }
      &:nth-child(odd) > div:last-child {
        padding-right: 0;
      }
    }
  `;

  const ImgBox = styled.div`
    width: 560px;
    max-width: 50%;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    overflow: hidden;
    @media ${theme.device.mobile}{
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const TextBox = styled.div`
    width: 490px;
    max-width: 100%;
    font-size: 18px;
    word-break: keep-all;
    .text__title {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      color: #222;
    }
    @media ${theme.device.mobile}{
      font-size: 14px;
      .text__title {
        margin-bottom: 5px;
        font-size: 20px;
        line-height: 1.2;
      }
    }
  `;

  return (
    <FlexList>
      {
        props.data.map((item, idx) => {
          return (
            <ListItem key={idx} className={props.class}>
              <ImgBox>
                <img src={item.img} alt="" />
              </ImgBox>
              <TextBox>
                <p className="text__title">{item.title}</p>
                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </TextBox>
            </ListItem>
          );
        })
      }
    </FlexList>
  );
}