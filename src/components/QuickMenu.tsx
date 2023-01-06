import styled from "styled-components";
import iconKakao from "../assets/icon__quick-kakao.png";
import iconCall from "../assets/icon__quick-call.png";

export function QuickMenu() {
  const BoxQuick = styled.div`
    position: fixed;
    bottom: 50px;
    left: calc(50% + 660px);
    z-index: 10;
    .button__quick {
      display: block;
      width: 70px;
      height: 70px;
      margin-top: 10px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #e5e5e5;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
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
          left: -20px;
          padding: 10px 15px;
          font-size: 20px;
          font-weight: bold;
          color: #000;
          background: #fff;
          border: 2px solid #000;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          white-space: nowrap;
          &:before {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 35px;
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
            left: 35px;
            display: block;
            width: 10px;
            height: 10px;
            background: #fff;
            border: 2px solid #000;
            transform: rotate(45deg);
            z-index: -1;
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
      <button type="button" className="button__quick button__call">
        <span className="for-a11y">상담<br/>전화</span>
        <div className="box__tooptip">1688-1234</div>
      </button>
      <button type="button" onClick={openLayer} className="button__quick button__kakao">
        <span className="for-a11y">톡상담</span>
      </button>
      <button type="button" onClick={onClickE} className="button__quick button__top">
        Top
      </button>
    </BoxQuick>
  );
}
