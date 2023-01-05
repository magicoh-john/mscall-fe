import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import { HeaderStyle } from "../styles/GlobalStyle";

const active = { color:"black" }
export function Header(){
    const BoxHeader = styled.header`
        ${HeaderStyle}
    `;
    const menuEvent=(event:React.FormEvent<HTMLButtonElement>)=>{
        if(event.currentTarget.className.match("active") === null){
            event.currentTarget.classList.add("active");
            event.currentTarget.nextElementSibling?.classList.add("active");
            document.querySelector("body")?.classList.add("js-scroll-lock");
        }else{
            event.currentTarget.classList.remove("active");
            event.currentTarget.nextElementSibling?.classList.remove("active");
            document.querySelector("body")?.classList.remove("js-scroll-lock");
        }
    }
    return(
        <BoxHeader id="header">
            <div className="inner">
                <h1 className="logo">
                    <NavLink to="/"><img src={logo} alt="" /></NavLink>
                </h1>
                <button type="button" className="button__menu" onClick={menuEvent}><span className="for-a11y">메뉴 열기</span></button>
                <nav className="gnb">
                    <NavLink to="/about" style={({isActive}) => ( isActive ? active : {})}>회사소개</NavLink>
                    <NavLink to="/service" style={({isActive}) => ( isActive ? active : {})}>제공서비스</NavLink>
                    <NavLink to="/process" style={({isActive}) => ( isActive ? active : {})}>계약프로세스</NavLink>
                    <NavLink to="/qna" style={({isActive}) => ( isActive ? active : {})}>견적문의</NavLink>
                </nav>
            </div>
        </BoxHeader>
    )
}