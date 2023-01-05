import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/pagination';
import { Buttons } from "./Buttons";

export interface dataProps{
    textAlign: string,
    image : string,
    title : string,
    text : string,
    buttonText : string
};

export interface arrDataProps{
    data : dataProps[];
}

export function DefaultRolling (props:arrDataProps){
    const BgBox = styled.div`
        position:absolute;
        top:50%;
        left:50%;
        width:100%;
        height:100%;
        background:#e5e5e5;
        transform:translate(-50%, -50%);
        z-index:-1;
    `;

    const TextBox = styled.div`
        position:absolute;
        top:50%;
        left:calc(50% - 580px);
        max-width:580px;
        font-size:24px;
        color:#000;
        transform:translateY(-50%);

        .text__title {
            font-size:48px;
            font-weight:700;

            &:after {
                content:"";
                display:block;
                width:55px;
                height:2px; 
                margin:30px 0;
                background:#000;
            }
        }

        &.right {
            left:auto;
            right:calc(50% - 580px);
        }
    `;

    const Img = styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
    `;

    return(
        <Swiper 
            spaceBetween={10}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            className="swiper-default"
        >
            {
                props.data.map((item, idx)=>{
                    return(
                        <SwiperSlide key={idx}>
                            <BgBox>
                                {/* public 폴더 안에 있는 경로 */}
                                <Img src={`${process.env.PUBLIC_URL}/assets/image/${item.image}`} alt=""/>
                                {/* src 폴더 안에 경로 - 주의점 index.html 에 모듈 불러와야 적용된다. */}
                                {/* <Img src={require(`./assets/${item.image}`).default} alt="" /> */}
                            </BgBox>
                            <TextBox className={item.textAlign}>
                                <p className="text__title">{item.title}</p>
                                <p className="text" dangerouslySetInnerHTML={{__html:item.text}}></p>
                                <Buttons buttonAlign={item.textAlign} bgColor="purple" textTitle={item.buttonText}></Buttons>
                            </TextBox>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}