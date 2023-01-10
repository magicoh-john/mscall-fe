import styled from "styled-components";
import { SubVisual } from "../components/Visual";
import iconArrow from "../assets/icon__arrow.png";
import { theme } from "../styles/Theme";
import { ArrowIconStyle } from "../styles/GlobalStyle";

interface processType {
  src: string;
  title: string;
  text: string;
}

const processData: Array<processType> = [
  {
    src: "../assets/image/image__process1.png",
    title: "사전미팅",
    text: "견적서 발송 및 운영프로세스 파악"
  },
  {
    src: "../assets/image/image__process2.png",
    title: "업무분석 & 기초컨설팅",
    text: "세부업무분석 및 문제점 파악 후 기초컨설팅 진행"
  },
  {
    src: "../assets/image/image__process4.png",
    title: "업무시작",
    text: "업무진행 및 업무종료 후 DAILY REPORT 발송"
  },
  {
    src: "../assets/image/image__process3.png",
    title: "인원배정 및 사전교육",
    text: "관리자 및 실무자 배정 사전교육 진행"
  }
];

export default function Process() {
  const ProcessList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${theme.device.mobile}{
      display:block;
    }
  `;
  const ProcessItem = styled.li`
    position: relative;
    width: calc(50% - 60px);
    &:not(:nth-child(-n + 2)) {
      margin-top: 120px;
    }
    &:nth-child(2) .box__image:after {
      top: auto;
      bottom: -160px;
      left: calc(50% - 20px);
      right: auto;
      transform: rotate(90deg);
    }
    &:nth-child(3) .box__image:after {
      transform: rotate(180deg);
    }
    &:last-child .box__image:after {
      display: none;
    }
    @media ${theme.device.tablet}{
      width: calc(50% - 40px);
    }
    @media ${theme.device.mobile}{
      width: 100%; 
      max-width: 400px;
      margin: 0 auto !important;
      &:not(:last-child):after {
        content: "";
        margin:20px auto;
        ${ArrowIconStyle}
        transform: rotate(90deg);
      }
    }
    .box__image {
      position: relative;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      box-shadow 2px 2px 5px rgba(0,0,0,0.1);
      text-align: center;
      img {
        width: 80%;
      }
      &:after {
        content: "";
        position: absolute;
        top: calc(50% - 20px);
        right: -80px;
        ${ArrowIconStyle}
      }
      @media ${theme.device.tablet}{
        &:after{
          right: -60px;
        }
      }
      @media ${theme.device.mobile}{
        width: 100%; 
        &:after {
          display: none;
        }
      }
    }
    .box__text {
      margin-top: 20px;
      word-break: keep-all;
      .text__title {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 20px;
        color: #222;
      }
    }
  `;
  return (
    <>
      <SubVisual
        title="계약 프로세스"
        text="체계적인 프로세스로 업무 진행하는 MS COMPANY"
        image="./assets/image/image__sub-vis3.png"
      ></SubVisual>
      <div className="inner">
        <ProcessList>
          {processData.map((item, idx) => {
            return (
              <ProcessItem key={idx}>
                <div className="box__image">
                  <img src={item.src} alt="" />
                </div>
                <div className="box__text">
                  <p className="text__title">{item.title}</p>
                  <p className="text">{item.text}</p>
                </div>
              </ProcessItem>
            );
          })}
        </ProcessList>
      </div>
    </>
  );
}
