import styled from "styled-components";
import { SubVisual } from "../components/Visual";
import diagramImg from "../assets/image__diagram.png";
import { theme } from "../styles/Theme";
import { ArrowIconStyle } from "../styles/GlobalStyle";

interface serviceType {
  title: string;
  text: string;
}

interface iconType {
  icon: string;
  title: string;
  text: string;
}

const introData: Array<iconType> = [
  {
    icon: "../assets/image/icon__service-intro1.png",
    title: "쇼핑몰 CS대행 외  A/S접수, 예약상담 등 다양한 업무 및 해피콜, 만족도조사 등 전문적인 아웃바운드 업무도 가능합니다.",
    text: ""
  },
  {
    icon: "../assets/image/icon__service-intro2.png",
    title: "콜센터 통합시스템으로 녹취, 콜 통계정보 제공이 가능합니다.",
    text: ""
  },
  {
    icon: "../assets/image/icon__service-intro3.png",
    title: "놓치는 콜 없이 부재콜 콜백 진행",
    text: "상담원이 통화 중 으로 인해 미연결된 부재콜들을 통신시스템을 통해 확인 후 콜백 진행하고 있습니다."
  },
  {
    icon: "../assets/image/icon__service-intro4.png",
    title: "일일, 주간, 월간 업무보고서 발송",
    text: "구축된 통신시스템을 통한 데이터베이스를 기반으로 업무 종료 후 보고서를 작성하여 메일로 보고드립니다."
  },
  {
    icon: "../assets/image/icon__service-intro5.png",
    title: "규모에 따른 합리적인 비용 제공",
    text: "업무 규모에 맞는 적정인력 산출로 고객사 환경에 맞는 견적을 제시해드립니다."
  }
];

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

const stepData: Array<iconType> = [
  {
    icon: "../assets/image/icon__step1.png",
    title: "스타트업 기초 컨설팅",
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
    @media ${theme.device.mobile}{
      &:not(:first-child){
        margin-top:50px;
      }
      h3.text__title {
        margin-bottom: 15px;
        font-size: 20px;
        &:before {
          width: 20px;
          margin-bottom: 5px;
        }
      }
    }
  `;
  const BoxIntro = styled.ul`
    display: flex;
    flex-wrap: wrap;
    .list-item{
      display: flex;
      width: 50%;
      padding: 0 20px;
      align-items: center;
      &:not(:nth-child(-n+2)){
        margin-top: 30px;
      }
    }
    .box__icon {
      width: 120px;
      height: 120px;
      margin:0 auto;
      border-radius: 50%;
      text-align: center;
      background: linear-gradient(-45deg, ${theme.colors.pointB} 0% , ${theme.colors.pointG} 100%);
      img{
        width: 100%;
        height: 100%;
        object-fit : scale-down;
      }
    }
    .box__text {
      flex: 1;
      margin-left: 20px;
      font-size: 16px;
      word-break: keep-all;
      .text__title{
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
        color:${theme.colors.textMain};
      }
    }
    
    @media ${theme.device.tablet}{
      display: block;
      .list-item{
        width: 100%;
        margin-top: 30px;
      }
    }
    @media ${theme.device.mobile}{
      display: block;
      .list-item {
        width: 100%;
        margin-top: 15px !important;
        padding: 0; 
      }
      .box__icon {
        width: 65px;
        height: 65px;
        padding: 15px;
      }
      .box__text {
        font-size: 14px;
        line-height: 1.3;
        .text__title {
          margin-bottom: 5px;
          font-size: 16px;
        }
      }
    }
  `;
  const BoxDiagram = styled.ul`
    position: relative;
    padding-bottom: 100px;
    &:before {
      content: "";
      display: block;
      max-width: 400px;
      max-height: 400px;
      width: calc(100vw - 32px);
      height: calc(100vw - 32px);
      margin: 0 auto;
      background: url(${diagramImg}) no-repeat center / 100%;
    }
    .list-item {
      position: absolute;
      top: 70px;
      left: 0;
      width: calc(50% - 220px);
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
    @media ${theme.device.mobile}{
      padding-bottom: 0;
      .list-item{
        position: initial;
        top: 0;
        width: 100%;
        font-size: 14px; 
        &:nth-child(3) {
          left: 0;
          width: 100%;
          text-align: left;
        }
        &:not(:first-child){
          margin-top: 20px;
        }
        .text__title {
          font-size: 18px;
          line-height: 1;
        }
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
          ${ArrowIconStyle}
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
    @media ${theme.device.mobile}{
      display: block;
      font-size: 14px;
      .list-item:not(:last-child) {
        padding-right: 0;
        &:after {
          position: initial;
          top: 0;
          right: 0;
          margin: 20px auto;
          transform: rotate(90deg);
        }
      }
      .box__icon {
        max-width: 300px;
        margin: 0 auto;
      }
      .text__step {
        font-size: 20px;
      }
      .text__title {
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
  `;
  return (
    <>
      <SubVisual
        title="제공서비스"
        text="높은 퀄리티로 고객의 만족도를 높이는 MS COMPANY"
        image="./assets/image/image__sub-vis4.png" />
      <div className="inner">
        <BoxSection>
          <h3 className="text__title">MS COMPANY</h3>
          <BoxIntro>  
            {introData.map((item, idx)=>{
              return(
                <li className="list-item" key={idx}>
                  <div className="box__icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="box__text">
                    <p className="text__title">{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                </li>
              )
            })}
          </BoxIntro>
        </BoxSection>
        <BoxSection>
          <h3 className="text__title">업무범위</h3>
          <BoxDiagram>
            {serviceData.map((item, idx) => {
              return (
                <li className="list-item" key={idx}>
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
                <li className="list-item" key={idx}>
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
