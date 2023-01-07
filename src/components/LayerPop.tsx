import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { theme } from "../styles/Theme";
import { Loading } from "./Loading";
import iconClose from "../assets/icon__close.png";

interface contentType{
	contents: string,
	stateIcon: string,
	stateTitle: string,
	stateSubTitle: null | string
}
interface propsType{
	open: boolean,
	type: string,
	headTitle: null | string,
	contents: contentType,
	closeLayer: Function
}
export function LayerPop(props:propsType){
	const BoxLayer = styled.div`
		display: ${props.open?"block":"none"};
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		z-index: 100;
		&.alert {
			.box__container {
				display: flex;
				width: 500px;
				min-height: 350px;
				justify-content: center;
				align-items: center;
			}
		}
		.box__container {
			position: absolute;
			top: 50%;
			left: 50%;
			background: #fff;
			border-radius: 20px;
			transform: translate(-50%, -50%);
		}
		.text__head {
			padding: 15px;
			font-size: 20px;
			font-weight: bold;
			color: ${theme.colors.textMain};
			text-align: center;
			border-bottom: 1px solid #e5e5e5;
		}
		.box__content{
			padding: 20px;
			.title{
				font-size: 20px;
			}
		}
		.button__close {
			position: absolute;
			top: 0;
			right: 0;
			width: 60px;
			height: 60px;
			background: url(${iconClose}) no-repeat center / 40px;
		}
	`;

	const closeEvt = (event:React.MouseEvent<HTMLButtonElement>)=>{
		event.preventDefault();
		props.closeLayer();
	}
	return(
		<BoxLayer className={props.type}>
			<div className="box__container">
				{props.headTitle?<h3 className="text__head">{props.headTitle}</h3>:""}
				<button type="button" className="button__close" onClick={closeEvt}><span className="for-a11y">닫기</span></button>
				<div className="box__content">
					<div dangerouslySetInnerHTML={{__html:props.contents.contents}}></div>
					<Loading icon={props.contents.stateIcon} title={props.contents.stateTitle} subTitle={props.contents.stateSubTitle} />
				</div>
			</div>
		</BoxLayer>
	)
}