import styled from "styled-components";
import { SubVisual } from "../components/Visual";
import diagramImg from "../assets/image__diagram.png";
import iconArrow from "../assets/icon__arrow.png";

interface serviceType {
  title: string;
  text: string;
}

interface stepType {
  icon: string;
  title: string;
  text: string;
}

const serviceData: Array<serviceType> = [
  {
    title: "CS관리",
    text: "Call, 게시판, 채팅상담, 리뷰 등 고객이 유입되는 모든 경로를 통한 응대 가능"
  },
  {
    title: "쇼핑몰 매출 증가",
    text: "원활한 쇼핑몰 관리와 전문적인 고객 응대로 인한 재 구매율 상승 및 매출증가"
  },
  {
    title: "쇼핑몰 관리",
    text: "각 사이트별 (카페24, 사방넷, 셀메이트, 메이크샵, 이지어드민, 고도몰 등) 어드민 처리 및 주문관리, 물류관리, 배송관리 프로그램 활용"
  }
];

const stepData: Array<stepType> = [
  {
    icon: "../assets/image/icon__step1.png",
    title: "스타트 업 기초 컨설팅",
    text: "스타트 업 회사의 경우 업체와 조율 하에 기초 컨설팅 지원 FAQ 작성, 고객상담 시간조정 업종 별 어드민 추천."
  },
  {
    icon: "../assets/image/icon__step2.png",
    title: "기존 업체 업무지원",
    text: "기존 업체 업무 방식에 맞춤 업무지원 기본적인 업무 프로세스 공유 받은 후 업무 진행업체 틀에 맞게 업무 진행 및 개선사항 요청"
  },
  {
    icon: "../assets/image/icon__step3.png",
    title: "대규모 컨설팅",
    text: "인력이 많이 필요한 대규모 프로젝트, 단기 프로젝트 등 한번에 많은 인원을 교육 및 업무에 투입 시키기 어려울 경우 제공되는 서비스"
  }
];

export default function Service() {
  const BoxSection = styled.div`
    &:not(:first-child) {
      margin-top: 100px;
    }
    h3.text__title {
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 30px;
      color: #222;

      &:before {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        margin-bottom: 10px;
        background: #222;
      }
    }
  `;
  const BoxDiagram = styled.ul`
    position: relative;
    padding-bottom: 100px;

    &:before {
      content: "";
      display: block;
      width: 400px;
      height: 400px;
      margin: 0 auto;
      background: url(${diagramImg}) no-repeat center / 100%;
    }

    .list-item {
      position: absolute;
      top: 70px;
      left: 0;
      width: 350px;

      &:nth-child(2) {
        left: auto;
        right: 0;
        .text__title {
          color: #860e68;
        }
      }

      &:nth-child(3) {
        top: auto;
        bottom: 0;
        left: calc(50% - 300px);
        width: 600px;
        text-align: center;
        word-break: keep-all;
        .text__title {
          color: #ff8e01;
        }
      }

      .text__title {
        margin-bottom: 10px;
        font-size: 25px;
        font-weight: bold;
        color: #1a258f;
      }
    }
  `;
  const BoxStep = styled.ul`
    display: flex;
    flex-wrap: nowrap;

    .list-item {
      position: relative;
      flex: 1;

      &:not(:last-child) {
        padding-right: 120px;
        &:after {
          content: "";
          position: absolute;
          top: calc(50% - 20px);
          right: 50px;
          display: block;
          width: 40px;
          height: 40px;
          background: #e5e5e5 url(${iconArrow}) no-repeat center;
          border-radius: 50%;
        }
      }
    }

    .box__icon {
      img {
        width: 100%;
      }
    }

    .text__step {
      margin-right: 5px;
      font-size: 30px;
      font-weight: bold;
    }

    .text__title {
      margin-bottom: 10px;
      font-size: 20px;
      color: #222;
    }
  `;
  return (
    <>
      <SubVisual
        title="제공서비스"
        text="높은 퀄리티로 고객의 만족도를 높이는 MS COMPANY"
        image="./assets/image/image__sub-vis4.png"
      ></SubVisual>
      <div className="inner">
        <BoxSection>
          <h3 className="text__title">업무범위</h3>
          <BoxDiagram>
            {serviceData.map((item, idx) => {
              return (
                <li className="list-item">
                  <div className="box__text">
                    <p className="text__title">{item.title}</p>
                    <p className="text">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </BoxDiagram>
        </BoxSection>
        <BoxSection>
          <h3 className="text__title">규모별 관리</h3>
          <BoxStep>
            {stepData.map((item, idx) => {
              return (
                <li className="list-item">
                  <p className="box__icon">
                    <img src={item.icon} alt="" />
                  </p>
                  <div className="box__text">
                    <p className="text__title">
                      <span className="text__step">STEP{idx + 1}.</span>
                      {item.title}
                    </p>
                    <p className="text">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </BoxStep>
        </BoxSection>
      </div>
    </>
  );
}
