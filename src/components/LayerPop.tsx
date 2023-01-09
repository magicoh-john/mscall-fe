import React from "react";
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
				@media ${theme.device.mobile}{	
					width: calc(100% - 16px);
					min-height: 200px;
				}
			}
		}
		.box__container {
			position: absolute;
			top: 50%;
			left: 50%;
			background: #fff;
			border-radius: 20px;
			transform: translate(-50%, -50%);
			@media ${theme.device.mobile}{	
				border-radius: 8px;
			}
		}
		.text__head {
			padding: 15px;
			font-size: 20px;
			font-weight: bold;
			color: ${theme.colors.textMain};
			text-align: center;
			border-bottom: 1px solid #e5e5e5;
			@media ${theme.device.mobile}{	
				padding: 10px; 
				font-size: 18px;
			}
		}
		.box__content{
			padding: 20px;
			.title{
				font-size: 20px;
				@media ${theme.device.mobile}{	
					font-size: 16px;
				}
			}
		}
		.button__close {
			position: absolute;
			top: 0;
			right: 0;
			width: 60px;
			height: 60px;
			background: url(${iconClose}) no-repeat center / 40px;
			@media ${theme.device.mobile}{	
				width: 30px;
				height: 30px;
				background-size: 20px; 
			}
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