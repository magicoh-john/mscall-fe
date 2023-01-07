import styled from "styled-components"
import { theme } from "../styles/Theme";

interface propsType{
	icon: string,
	title: string,
	subTitle: null | string
}

export function Loading(props:propsType) {
	const BoxLoading = styled.div`
		text-align: center;
		.box__icon {
			width: 120px;
			margin: 0 auto;
			img {
				width: 100%
			}
		}
		.box__text {
			margin-top: 10px;
		}
		.title {
			font-size: 30px;
			font-weight: bold;
			color: ${theme.colors.textMain};
		}
	`;
	return (
		<BoxLoading>
			<div className="box__icon"><img src={props.icon} alt="" /></div>
			<div className="box__text">
				<p className="title">{props.title}</p>
				{props.subTitle ?<p className="sub-title">{props.subTitle}</p>:""}
			</div>
		</BoxLoading>
	)
}