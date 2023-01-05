import {createGlobalStyle, css} from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    button{
        background:none;
        border:none;
    }
    input, select{
        font-weight:300;
    }
    a {
        color:${(props)=>props.theme.colors.textDefault};
        text-decoration:none;
    }
    body {
        font-family: 'Roboto','Noto Sans KR', sans-serif;
        font-weight:300;
        line-height:1.5;
        color:${(props) => props.theme.colors.textDefault};
        box-sizing:border-box;
        &.js-scroll-lock{
            height:100%;
            overflow:hidden;
        }
    }
    .text--point {
        &-B{
            color:${(props)=>props.theme.colors.pointB};
        }
        &-G{    
            color:${(props)=>props.theme.colors.pointG};
        }
    }
    .for-a11y{
        text-indent:-9999px;
        font-size:0;
    }
    .inner {
        width:1170px;
        margin:0 auto;

        @media ${props=>props.theme.device.tablet}{
            width:calc(100% - 40px);
        }
        @media ${props=>props.theme.device.mobile}{
            width:calc(100% - 32px);
        }
    }
    #cBody {
        padding-bottom:120px;
    }
    .scrollMotion{
        position:relative;
        top:100px;
        opacity:0;
        transition:all ease 0.6s;
        &.active{
            top:0;
            opacity:1;
            transform:scale(1);
        }
    }
`;

export const HeaderStyle = css`
    position:relative;
    padding:60px 0 40px;
    background:#fff;
    border-bottom:1px solid #e5e5e5;
    z-index:10;
    .inner  {
        position:relative;
    }
    .logo {
        position:absolute;
        top:-40px;
        left:0;
        width:250px;
        img{
            width:100%;
        }
    }
    .button__menu{
        display:none;
    }
    .gnb {  
        display:flex;
        justify-content:flex-end;
        a {
            display:block;
            padding:0 15px;
            font-size:18px;
            font-weight:500;
            color:#989898;
        }
    }

    @media ${props => props.theme.device.mobile}{
        height:80px;
        padding:15px 0;
        &:after{
            content:"";
            display:block;
            clear:both;
        }
        .logo{
            position:relative;
            top:0;
            left:0;
            float:left;
            width:160px;
            a{
                display:block;
            }
        }
        .button__menu{
            position:relative;
            float:right;
            display:block;
            width:50px;
            height:50px;
            padding:0;
            &:before, &:after{
                content:"";
                position:absolute;
                top:calc(50% - 11px);
                right:5px;
                display:block;
                width:40px;
                height:6px;
                border-radius:3px;
                background:linear-gradient(45deg, ${props=>props.theme.colors.pointB} 30%, ${props=>props.theme.colors.pointG} 80%);
                transition:all ease 0.4s; 
            }
            &:after{
                top:calc(50% + 6px);
                width:30px;
            }
            &.active{
                &:before{
                    top:calc(50% - 6px);
                    transform:rotate(45deg)
                }
                &:after{
                    top:calc(50% - 6px);
                    width:40px;;
                    transform:rotate(-45deg)
                }
            }
        }
        .gnb{
            position:fixed;
            top:80px;
            left:0;
            width:100%;
            height:0;
            display:block;
            background:#fff;
            overflow:hidden;
            opacity:0;
            transition:all ease 0.4s;
            a{
                padding:20px 16px;
            }

            &.active{
                height:calc(100% - 80px);
                opacity:1;
            }
        }
    }
`;

export const FooterStyle = css`
    position:relative;
    padding:40px 0;
    font-size:14px;
    border-top:1px solid #eee;
    background:#fff;
    z-index:10;
    .inner {
        position:relative;
        padding-left:130px;
    }
    .text__logo {
        position:absolute;
        top:0;
        left:0;
        width:100px;
        img{
            width:100%;
        }
    }
    .list__footer-util {
        margin-bottom:20px;
        li {
            display:inline-block;
            font-weight:bold;
            &:not(:last-child):after{
                content:"";
                display:inline-block;
                width:1px;
                height:12px;
                margin:1px 10px 0 10px;
                background:#e5e5e5;
                vertical-align:top;
            }
        }
    }

    .list__company-info {
        max-width:900px;
        margin-bottom:10px;
        li {
            display:inline-block;
            margin-bottom:5px;
            &:not(:last-child):after{
                content:"";
                display:inline-block;
                width:1px;
                height:12px;
                margin:2px 10px 0 10px;
                background:#e5e5e5;
                vertical-align:top;
            }
        }
    }
    .text__copy {
        color:#989898;
    }
`;    
