import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    button{
      background: none;
      border: none;
    }
    input, select{
      font-weight: 300;
    }
    a {
      color: ${theme.colors.textDefault};
      text-decoration: none;
    }
    body {
      font-family: 'Roboto','Noto Sans KR', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      color: ${theme.colors.textDefault};
      box-sizing: border-box;
      &.js-scroll-lock{
        height: 100%;
        overflow: hidden;
      }
    }
    .text--point {
      &-B{
        color: ${theme.colors.pointB};
      }
      &-G{    
        color: ${theme.colors.pointG};
      }
    }
    .for-a11y{
      text-indent: -9999px;
      font-size: 0;
    }
    .inner {
      width: 1170px;
      margin: 0 auto;
      @media ${theme.device.desktop}{
        width: calc(100% - 220px);
      }
      @media ${theme.device.tablet}{
        width: 94%;
      }
      @media ${theme.device.mobile}{
        width: calc(100% - 32px);
      }
    }
    #cBody {
      padding-bottom: 120px;
      @media ${theme.device.mobile}{
        padding-bottom: 60px;
      }
    }
    .scrollMotion{
      position: relative;
      top: 100px;
      opacity: 0;
      transition: all ease 0.6s;
      &.active{
        top: 0;
        opacity: 1;
        transform: scale(1);
      }
      @media ${theme.device.mobile}{
        top: 60px;
      }
    }
`;

export const HeaderStyle = css`
  position: relative;
  padding: 60px 0 40px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
  .inner {
    position: relative;
  }
  .logo {
    position: absolute;
    top: -40px;
    left: 0;
    width: 250px;
    img {
      width: 100%;
    }
  }
  .button__menu {
    display: none;
  }
  .gnb {
    display: flex;
    justify-content: flex-end;
    a {
      display: block;
      padding: 0 15px;
      font-size: 18px;
      font-weight: 500;
      color: #989898;
    }
  }

  @media ${theme.device.mobile} {
    height: 60px;
    padding: 10px 0;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .logo {
      position: relative;
      top: 0;
      left: 0;
      float: left;
      width: 130px;
      a {
        display: block;
      }
    }
    .button__menu {
      position: relative;
      float: right;
      display: block;
      width: 40px;
      height: 40px;
      padding: 0;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: calc(50% - 9px);
        right: 5px;
        display: block;
        width: 20px;
        height: 4px;
        border-radius: 3px;
        background: linear-gradient(
          45deg,
          ${theme.colors.pointB} 30%,
          ${theme.colors.pointG} 80%
        );
        transition: all ease 0.4s;
      }
      &:after {
        top: calc(50% + 4px);
        width: 30px;
      }
      &.active {
        &:before {
          top: calc(50% - 2px);
          width: 30px;
          transform: rotate(45deg);
        }
        &:after {
          top: calc(50% - 2px);
          transform: rotate(-45deg);
        }
      }
    }
    .gnb {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: 0;
      display: block;
      background: #fff;
      overflow: hidden;
      opacity: 0;
      transition: all ease 0.4s;
      a {
        padding: 20px 16px;
      }

      &.active {
        height: calc(100% - 60px);
        opacity: 1;
      }
    }
  }
`;

export const FooterStyle = css`
  position: relative;
  padding: 40px 0;
  font-size: 14px;
  line-height: 1.3;
  border-top: 1px solid #eee;
  background: #fff;
  z-index: 10;
  @media ${theme.device.mobile}{
    padding: 20px 0;
    font-size: 14px;
  }
  .inner {
    position: relative;
    padding-left: 130px;
    @media ${theme.device.mobile}{
      padding-left: 0;
    }
  }
  .text__logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    img {
      width: 100%;
    }
    @media ${theme.device.mobile}{
      position: relative;
      width: 80px;
      margin: 0 auto 10px;
    }
  }
  .list__footer-util {
    margin-bottom: 20px;
    li {
      display: inline-block;
      font-weight: bold;
      &:not(:last-child):after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 12px;
        margin: 1px 10px 0 10px;
        background: #e5e5e5;
        vertical-align: top;
      }
    }
    @media ${theme.device.mobile}{
      margin-bottom: 10px;
    }
  }

  .list__company-info {
    max-width: 900px;
    margin-bottom: 10px;
    li {
      display: inline-block;
      margin-bottom: 5px;
      &:not(:last-child):after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 12px;
        margin: 2px 10px 0 10px;
        background: #e5e5e5;
        vertical-align: top;
      }
    }
  }
  .text__copy {
    color: #989898;
    @media ${theme.device.mobile}{
      font-size: 12px;
    }
  }
`;
