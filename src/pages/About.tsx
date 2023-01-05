import styled from "styled-components";
import aboutImg from "../assets/image__about.png";
import { SubVisual } from "../components/Visual";

const dummyData = {
    title : "MS, <span class='text__blue'>M</span>ake <span class='text__green'>S</span>ervice<br/>최상의 서비스, 최고의 파트너",
    text : "MS COMPANY는<br/>높은 퀄리티로 고객의 다양한 민원과<br/>기업의 전반적인 CS 업무를 대행하고 있습니다.<br/><br/>정신적 노동으로 인한 CS 직원의 잦은 퇴사,<br/>부담스러운 신입 채용, 번거로운 교육 등의 문제를<br/>해결해 드립니다.<br/><br/>많은 경험으로 쌓아온 전문 CS 노하우를 기반하여<br/>좋은 기업 이미지 구축에 힘쓰겠습니다.<br/><br/>이제 CS는 MS COMPANY의 전문가에게 맡겨 주십시오!<br/><br/>전문가라는 단어에 걸맞게 고객사의 CS를<br/>체계적이며 효율적으로 관리하여<br/>새로운 성공 지표를 제시하는 최고의 파트너가 되겠습니다."
}

function About(){
    const BoxSection = styled.div`
        position:relative;
        display:flex;
        padding-bottom:50px;
        justify-content:space-between;
        align-items:center;

        .box__img {
            width:550px;
            height:550px;

            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }

        .box__text {
            width:calc(100% - 560px);
            padding-left:50px;
            font-size:18px;
            line-height:27px;
            box-sizing:border-box;

            &:before{
                content:"";
                display:block;
                width:40px;
                height:1px;
                margin-bottom:40px;
                background:#000;
            }
            p{
                margin-top:10px;
                font-size:19px;
                color:#999;
                line-height:1.5;
                word-break:keep-all;
                &.text__title{
                    margin-bottom:30px;
                    font-family:'Gowun Batang', serif;
                    font-size:40px;
                    font-weight:900;
                    color:#666;
                }
                .text__blue{
                    color:#3261ad;
                }
                .text__green{
                    color:#2f7d65;
                }
            }
        }
    `;

    return(
        <>
            <SubVisual title="회사 소개" text="MS COMPANY에 방문해주셔서 감사합니다." image="./assets/image/image__sub-vis2.png" />
            <div className="inner">
                <BoxSection className="box__info">
                    <div className="box__img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="box__text">
                        <p className="text__title" dangerouslySetInnerHTML={{__html:dummyData.title}}></p>
                        <p className="text" dangerouslySetInnerHTML={{__html:dummyData.text}}></p>
                    </div>
                </BoxSection>
            </div>
        </>
    )
}

export default About;
