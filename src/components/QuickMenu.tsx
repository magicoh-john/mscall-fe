import styled from "styled-components";
import iconKakao from "../assets/icon__quick-kakao.png";
import iconCall from "../assets/icon__quick-call.png";
import { theme } from "../styles/Theme";

export function QuickMenu() {
  const BoxQuick = styled.div`
    position: fixed;
    bottom: 50px;
    left: calc(50% + 600px);
    z-index: 10;
    @media ${theme.device.desktop}{
      left: auto;
      right: 30px; 
    }
    @media ${theme.device.mobile}{
      right: 16px; 
    }
    .button__quick {
      display: block;
      width: 70px;
      height: 70px;
      margin-top: 10px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #e5e5e5;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      @media ${theme.device.desktop}{
        width: 60px;
        height: 60px;
      }
      @media ${theme.device.mobile}{
        width: 45px;
        height: 45px;
        margin-top: 5px;
        background-size: 30px, cover !important;
      }
      &.button__kakao {
        background: #ffe500 url(${iconKakao}) no-repeat center / 50px;
      }
      &.button__call {
        position: relative;
        color: #fff;
        background-image: url(${iconCall}), linear-gradient(to right, #3261ad 30%, #2f7d65 80%);
        background-repeat: no-repeat, no-repeat;
        background-size: 50px, cover;
        background-position: center, 0 0;
        .box__tooptip {
          position: absolute;
          top: -70px;
          right: -20px;
          padding: 10px 15px;
          font-size: 20px;
          font-weight: bold;
          color: #000;
          background: #fff;
          border: 2px solid #000;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          white-space: nowrap;
          animation: moveTooltip 0.6s ease-in Infinite Alternate;
          &:before {
            content: "";
            position: absolute;
            bottom: -3px;
            right: 50px;
            display: block;
            width: 10px;
            height: 10px;
            background: #fff;
            transform: rotate(45deg);
            z-index: 1;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: -6px;
            right: 50px;
            display: block;
            width: 10px;
            height: 10px;
            background: #fff;
            border: 2px solid #000;
            transform: rotate(45deg);
            z-index: -1;
          }
          @media ${theme.device.mobile}{
            top: -40px;
            right: -10px;
            padding: 5px 10px;
            font-size: 16px;
            line-height: 1;
            border-width: 1px;
            animation: moveTooltip-m 0.6s ease-in Infinite Alternate;
            &:before, &:after{
              bottom:-2px;
              right:30px;
              width:5px;
              height:5px;
            }
            &:after{
              bottom: -4px;
            }
          }
        }
        @keyframes moveTooltip {
          from {
            top: -80px;
          }
          to {
            top: -70px;
          }
        }
        @keyframes moveTooltip-m {
          from {
            top: -50px;
          }
          to {
            top: -40px;
          }
        }
      }
    }
  `;

  const openLayer = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open("http://pf.kakao.com/_jMWSxj", "", "width=400, height=600");
    return false;
  };

  const onClickE = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <BoxQuick>
      <a href="tel:1660-3695" className="button__quick button__call">
        <span className="for-a11y">상담<br/>전화</span>
        <div className="box__tooptip">1660-3695</div>
      </a>
      <button type="button" onClick={openLayer} className="button__quick button__kakao">
        <span className="for-a11y">톡상담</span>
      </button>
      <button type="button" onClick={onClickE} className="button__quick button__top">
        Top
      </button>
    </BoxQuick>
  );
}
