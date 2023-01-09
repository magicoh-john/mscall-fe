import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export interface visType {
  image: string;
  title: string;
  text: string;
}

export function SubVisual(props: visType) {
  const BoxVisual = styled.div`
    position: relative;
    height: 200px;
    font-size: 20px;
    color: #fff;
    background: linear-gradient(to right, #3261ad 0%, #2f7d65 100%);
    overflow: hidden;
    &:before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.2);
      z-index: 1;
    }
    .inner {
      position: relative;
      display: flex;
      height: 100%;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:after{
        content: "";
        position: absolute;
        top: 0;
        right: -66px;
        width: 325px;
        height: 100%;
        background: url(${props.image}) no-repeat center right / auto 100%;
        z-index: 0;
      }
    }
    .title {
      position: relative;
      font-weight: bold;
      font-size: 40px;
      z-index: 1;
    }
    .text {
      position: relative;
      margin-top: 15px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.8);
      z-index: 1;
    }
    & + div {
      padding-top: 60px;
    }
    @media ${theme.device.mobile}{
      height: 150px;
      padding: 0 16px;
      font-size: 14px;
      .title {
        font-size: 25px;
      }
      .text{
        margin-top: 5px;
      } 
      & + div {
        padding-top: 30px;
      }
    }
  `;
  return (
    <BoxVisual>
      <div className="inner">
        <p className="title">{props.title}</p>
        <p className="text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
      </div>
    </BoxVisual>
  );
}

export interface mainVisType {
  id: string;
  image: string;
  title: string;
  text: string;
}

export function MainVisual(props: mainVisType) {
  const BoxVisual = styled.div`
    height: 580px;
    color: #fff;
    background: linear-gradient(45deg, #3261ad 0%, #2f7d65 45%);
    @media ${theme.device.mobile} {
      height: calc(100vw + 80px);
    }
    .inner {
      position: relative;
      display: flex;
      height: 100%;
      background: url(${props.image}) no-repeat center right/ auto 100%;
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      transform: scale(1.2);
      transition: all ease 0.6s;
      @media ${theme.device.mobile}{
        padding-top: 40px;
        background-size: 100% auto;
        background-position: bottom right;
        justify-content: initial;
      }
    }
    .title {
      position: relative;
      top: 100px;
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 50px;
      opacity: 0;
      transition: all ease 0.6s;
      transition-delay: 0.6s;
      @media ${theme.device.tablet}{
        font-size: 35px;
      }
      @media ${theme.device.mobile}{
        margin-bottom: 5px;
        font-size: 30px;
      }
      &:before {
        content: "";
        display: block;
        width: 40px;
        height: 4px;
        margin: 0 0 20px -5px;
        background: #fff;
        @media ${theme.device.mobile}{
          width: 20px;
          height: 2px;
          margin: 0 0 10px 0;
        }
      }
    }
    .text {
      position: relative;
      top: 100px;
      font-size: 20px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.8);
      opacity: 0;
      transition: all ease 0.6s;
      transition-delay: 0.9s;
      @media ${theme.device.mobile}{
        font-size: 14px;
      }
    }
    &.active {
      .inner {
        opacity: 1;
        transform: scale(1);
      }
      .title, .text {
        top: 0;
        opacity: 1;
      }
    }
  `;
  return (
    <BoxVisual id={props.id}>
      <div className="inner">
        <p className="title">{props.title}</p>
        <p className="text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
      </div>
    </BoxVisual>
  );
}
