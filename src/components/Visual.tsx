import { useEffect, useState } from "react";
import styled from "styled-components";

export interface visType {
  image: string;
  title: string;
  text: string;
}

export function SubVisual(props: visType) {
  const BoxVisual = styled.div`
    display: flex;
    height: 200px;
    font-size: 20px;
    color: #fff;
    background-image: url(${props.image}),
      linear-gradient(to right, #3261ad 30%, #2f7d65 80%);
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: 1170px auto, cover;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 40px;
    }

    .text {
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
    }

    & + div {
      padding-top: 60px;
    }
  `;
  return (
    <BoxVisual>
      <p className="title">{props.title}</p>
      <p className="text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
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

      &:before {
        content: "";
        display: block;
        width: 40px;
        height: 4px;
        margin: 0 0 20px -5px;
        background: #fff;
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
    }

    &.active {
      .inner {
        opacity: 1;
        transform: scale(1);
      }
      .title,
      .text {
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
