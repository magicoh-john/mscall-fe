import styled from "styled-components";

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

    &:not(last-child) {
      margin-bottom: 30px;
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  `;

  const ImgBox = styled.div`
    width: 560px;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const TextBox = styled.div`
    width: 490px;
    font-size: 18px;
    word-break: keep-all;
    .text__title {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      color: #222;
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