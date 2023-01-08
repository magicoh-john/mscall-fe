import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexList, listDataType } from "../components/List";
import { MainVisual } from "../components/Visual";
import chartImg1 from "../assets/image__main-chart.png";
import { theme } from "../styles/Theme";

const dummyData: Array<listDataType> = [
  {
    img: "../assets/image/image__main-sec1.png",
    title: "전문상담원",
    sub_title: "creative",
    text: "자사의 체계적인 CS교육을 받은 업종별 전문 상담원 투입으로 빠른 업무 진행이 가능하여, 미숙한 응대로 인한 고객 클레임을 사전에 미리 방지할 수 있습니다."
  },
  {
    img: "../assets/image/image__main-sec2.png",
    title: "기업이미지 상승",
    sub_title: "art",
    text: "CS전문상담원을 고용함으로써 고객들에게 친절한 응대 및 능숙한 업무처리 등 높은 수준의 서비스를 제공할 수 있습니다. 고객만족 서비스는 기업의 이미지를 높이는 가장 바른 길입니다."
  },
  {
    img: "../assets/image/image__main-sec3.png",
    title: "직원관리의 효율성",
    sub_title: "print",
    text: "급여, 4대보험료, 퇴직금여, 연차수당 등의 인건비를 절감할 수 있으며 직원들의 퇴사로 인한 교육기간등의 불필요한 시간도 단축할 수 있습니다."
  },
  {
    img: "../assets/image/image__main-sec4.png",
    title: "매출증대",
    sub_title: "creative",
    text: "CS업무를 전문가에게 맡기면서 인건비 절감 및 마케팅에 전념하여 매출증대에 힘을 쓸 수 있습니다. 낮은 클레임과 친절하고 신속한 응대는 곧 기업의 매출로 이어질 것입니다."
  },
  {
    img: "../assets/image/image__main-sec5.png",
    title: "콜센터 구축비용 절감",
    sub_title: "creative",
    text: "콜센터 구축에 필요한 컴퓨터 및 사무실임대료, 통신장비, 녹취 장비 등에 대한 비용절감이 가능합니다."
  }
];

interface iconType {
  img: string;
  text: string;
}

const iconData: Array<iconType> = [
  {
    img: "../assets/image/icon__work1.png",
    text: "인바운드"
  },
  {
    img: "../assets/image/icon__work2.png",
    text: "아웃바운드"
  },
  {
    img: "../assets/image/icon__work3.png",
    text: "톡 상담"
  },
  {
    img: "../assets/image/icon__work4.png",
    text: "게시판"
  },
  {
    img: "../assets/image/icon__work5.png",
    text: "발주"
  },
  {
    img: "../assets/image/icon__work6.png",
    text: "전산업무"
  }
];

function Home() {
  const [ load, setLoad ] = useState(false);
  useEffect(() => {
    setLoad(true);
    if(load){
      setTimeout(() => {
        document.getElementById("mainVis")?.classList.add("active");
      }, 300);
    }
    window.addEventListener("scroll", function (e) {
      const boxes = document.getElementsByClassName(
        "scrollMotion"
      ) as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < boxes.length; i++) {
        const offsetTop = boxes[i].offsetTop;
        if (window.scrollY + window.outerHeight / 1.2 > offsetTop) {
          setTimeout(() => {
            boxes[i].classList.add("active");
          }, 300);
        }
      }
    });
  },[load]);

  const BoxSection = styled.div`
    padding-top: 120px;
    @media ${theme.device.mobile} {
      padding-top: 60px;
    } 
    .box__chart {
      position: relative;
      width: 800px;
      max-width:100%;
      margin: 0 auto;
      img {
        width: 100%;
        transition: all linear 0.4s;
        transition-delay: 0.8s;
      }
      &.active {
        .image__chart {
          opacity: 0.5;
        }
      }
    }
    .list__work-icon {
      display: flex;
      width: 950px;
      max-width:100%;
      margin: 0 auto;
      flex-wrap: wrap;
      .list-item {
        width: calc(100% / 3);
        padding: 0 20px;
        text-align: center;
        &:not(:nth-child(-n + 3)) {
          padding-top: 40px;
        }
        img{
          max-width:100%;
        }
        .text {
          margin-top: 20px;
          font-size: 20px;
          font-weight: bold;
          color: #222;
        }

        @media ${theme.device.mobile} {
          &:not(:nth-child(-n + 3)) {
            padding-top: 20px;
          }
          .text {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  `;

  const Title = styled.h3`
    margin-bottom: 60px;
    font-size: 40px;
    color: #000;
    text-align: center;
    strong {
      font-weight: bold;
    }
    br {
      display: none;
    }
    @media ${theme.device.mobile}{
      margin-bottom: 30px;
      font-size: 25px;
      line-height: 1.2;
      br {
        display: block;
      }
    }
  `;

  return (
    <>
      <MainVisual
        id="mainVis"
        image="./assets/image/image__main-vis.png"
        title="MS, Make Service"
        text="최상의 서비스, 최고의 파트너"
      />
      <BoxSection className="inner">
        <Title className="scrollMotion">
          <strong>MS COMPANY</strong>는<br/> 이런 업무를 합니다.
        </Title>
        <ul className="list__work-icon">
          {iconData.map((item, idx) => {
            return (
              <li className="list-item scrollMotion">
                <img src={item.img} alt="" />
                <p className="text">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </BoxSection>
      <BoxSection className="inner">
        <Title className="scrollMotion">
          <strong>MS COMPANY</strong>와<br/> 함께라면 ?
        </Title>
        <FlexList data={dummyData} class="scrollMotion"></FlexList>
      </BoxSection>
      <BoxSection>
        <Title className="scrollMotion">
          <strong>MS COMPANY</strong>가<br/> 비용절감에 도움을 드리겠습니다.
        </Title>
        <div className="box__chart scrollMotion">
          <img src={chartImg1} alt="" />
        </div>
      </BoxSection>
    </>
  );
}

export default Home;
