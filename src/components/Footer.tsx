import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FooterStyle } from "../styles/GlobalStyle";
import logo from "../assets/logo.png";

function Footer(){
    const Footer = styled.footer`
        ${FooterStyle}
    `;
    return(
        <Footer>
            <div className="inner">
                <p className="text__logo"><img src={logo} alt="" /></p>
                <ul className="list__footer-util">
                    <li><Link to="/about">회사소개</Link></li>
                    <li><Link to="/privacy">개인정보취급방침</Link></li>
                    <li><Link to="/qna">견적문의</Link></li>
                </ul>
                <ul className="list__company-info">
                    <li>상호 : MS COMPANY</li>
                    <li>주소 : 경기도 화성시 매송면 화성로 2381번길 23, 1층</li>
                    <li>Tel : 070-4814-1759</li>
                    <li>사업자 등록 번호 : 577-02-02822</li>
                    <li>Email : mscc@ms-call.kr</li>
                </ul>
                <p className="text__copy">ⓒ2023 MSCOMPANY. all rights reserved.</p>
            </div>
        </Footer>
    )
}

export default Footer;