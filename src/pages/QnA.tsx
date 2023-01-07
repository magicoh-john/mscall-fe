import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { send } from "../common/AxiosUtil";
import { Loading } from "../components/Loading";
import { LayerPop } from "../components/LayerPop";
import checkIcon from "../assets/icon__checkbox.png";
import qnaImage from "../assets/image__qna.png";

const BoxQna = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-top: 60px;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #5b8ad4 30%, #4ac29d 80%);
    z-index: -1;
  }
  .box__buttons {
    margin-top: 20px;
    text-align: center;
    button:not(:last-child) {
      margin-right: 20px;
    }
    .button__submit {
      width: 200px;
      height: 55px;
      font-size: 20px;
      font-weight: bold;
      line-height: 55px;
      color: #fff;
      background: #3263a8;
      border-radius: 8px;
    }
    .button__cancel {
      width: 200px;
      height: 55px;
      font-size: 20px;
      font-weight: bold;
      line-height: 55px;
      color: #222;
      background: #e5e5e5;
      border-radius: 8px;
    }
  }
`;

const SectionTitle = styled.div`
  position: relative;
  width: 540px;
  margin-right: 40px;
  padding-top: 180px;
  overflow: hidden;
  img {
    width: 100%;
    margin-left: -10px;
  }
  .title__h2 {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 40px;
    font-weight: 900;
    color: #fff;
    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 1px;
      margin-bottom: 15px;
      background: #fff;
    }
  }
  .sub__title {
    position: absolute;
    top: 90px;
    left: 0;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const BoxSection = styled.div`
	display: flex;
	width: calc(100% - 580px);
	padding-bottom: 40px;
	background: #fff;
	border-radius: 20px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	justify-content: center;
	align-items: center;
`;

const BoxForm = styled.form`
  .list__form {
    position: relative;
    padding: 15px 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: calc(100% - 40px);
      border-top: 1px solid #e5e5e5;
      transform: translateX(-50%);
    }
    .list-item {
      padding: 10px 30px;
      .box__title {
        width: 150px;
        margin-bottom: 15px;
        font-weight: bold;
        color: #222;
        .text__title.text__essential {
          &:after {
            content: "*";
            display: inline-block;
            margin-left: 4px;
            color: red;
          }
        }
      }

      .text__unit {
        display: inline-block;
        font-weight: normal;
      }
      .box__form-set {
        .box__input {
          display: block;
          width: 100%;
          height: 50px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;

          input {
            width: 100%;
            height: 100%;
            padding: 10px 20px;
            background: #fafafa;
            border-radius: 8px;
            border: none;
          }
        }
        .box__textarea {
          display: inline-block;
          width: 100%;
          height: 150px;
          border: 1px solid #e5e5e5;
          background: #fafafa;
          border-radius: 8px;
          textarea {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: none;
            border: none;
          }
        }
        .box__checkbox {
          display: inline-block;
          margin-right: 20px;
          vertical-align: top;
          input[type="checkbox"] {
            width: 20px;
            height: 20px;
            border: 1px solid #e5e5e5;
            appearance: none;
            border-radius: 2px;
            &:checked {
              background: url(${checkIcon}) no-repeat center / 20px;
            }
            & + label {
              display: inline-block;
              margin-left: 10px;
              font-size: 16px;
              line-height: 20px;
              vertical-align: top;
            }
          }
        }
        .text__error {
          margin-top: 10px;
          font-size: 14px;
          color: red;
        }
      }
      .text__noti {
        margin-top: 10px;
        font-size: 14px;
        color: #999;
        line-height: 1.3;
      }
    }
  }
`;

const BoxAgree = styled.div`
  padding: 30px 20px;
  .text__title {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #222;
  }
  ul {
    margin-top: 10px;
  }
  p,
  li {
    margin-bottom: 5px;
  }
  br + span {
    display: inline-block;
    margin-top: 10px;
  }
  strong {
    font-weight: bold;
  }
  .box__agree {
    max-height: 120px;
    padding: 20px;
    font-size: 14px;
    line-height: 20px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow-y: auto;
  }
  .box__form-set {
    margin-top: 15px;
    text-align: right;
    .box__radio {
      display: inline-block;
      margin-left: 20px;
      vertical-align: top;
      input[type="radio"] {
        width: 20px;
        height: 20px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        appearance: none;
        &:checked {
          position: relative;
          border-color: #3261ad;
          &:after {
            content: "";
            position: absolute;
            top: calc(50% - 5px);
            left: calc(50% - 5px);
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #3261ad;
          }
        }
        & + label {
          display: inline-block;
          margin-left: 10px;
          font-size: 16px;
          color: #3261ad;
          line-height: 20px;
          vertical-align: top;
        }
      }
    }
  }
`;

export function QnA() {
  const [term, setTerm] = useState({
    title: "",
    contents: ""
  });
	const [status, setStatus] = useState({
		state: false,
		icon: "",
		title: "",
		subTitle: ""
	});
	const [isOpen, setIsOpen] = useState(false);
	const [layerStatus, setLayerStatus] = useState({
		type: "",
		headTitle: "",
		contents:{
			contents: "",
			stateIcon: "",
			stateTitle: "",
			stateSubTitle: ""
		}
	});
  const [submitDisabled, setSubmitDisabled] = useState(false);

	const closeLayer = () =>{
		setIsOpen(false);
	};

  useEffect(() => {
		if(!term.title){
			send("get", "/api/terms/top1", "", {}, function (r) {
				setTerm({
					title: r.data.data[0].title,
					contents: r.data.data[0].contents
				});
			});
		}

		if(isOpen){
			setLayerStatus({
				type: "alert",
				headTitle: "",
				contents: {
					contents: "",
					stateIcon: status.icon,
					stateTitle: status.title,
					stateSubTitle: status.subTitle
				}
			})
		}
  }, [term, status, isOpen]);

  const { register, watch, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      agree: "no",
      company: "",
      industry: "",
      name: "",
      tel: "",
      email: "",
      workType: "",
      workLoad: "",
      contents: "",
      reCaptchaToken: ""
    }
  });

  const onChangeRecaptcha = (token: string) => {
    setValue("reCaptchaToken", token);
  };

  const onValid = (data: any) => {
    if (!watch("reCaptchaToken")) {
			setIsOpen(true);
			setStatus({
				state: false,
				icon: "../assets/image/icon__error.gif",
				title: "reCAPTCHA 인증을 확인해주세요.",
				subTitle: ""
			});
      return false;
    }

    if (watch("agree") !== "yes") {
			setIsOpen(true);
			setStatus({
				state: false,
				icon: "../assets/image/icon__error.gif",
				title: "개인정보 취급 방침 약관에 동의해 주세요.",
				subTitle: ""
			})
      return false;
    }

    if (submitDisabled) {
			setIsOpen(true);
			setStatus({
				state: false,
				icon: "../assets/image/icon__loading.gif",
				title: "처리중입니다.",
				subTitle: "잠시만 기다려주세요."
			})
      return false;
    }

    setSubmitDisabled(true);
    send(
      "post",
      "/api/inquiry/save",
      "application/x-www-form-urlencoded",
      data,
      function (r) {
        const result = r.data;
        if (result.data > 0) {
					setStatus({
						state:true,
						icon:"../assets/image/icon__complete.gif",
						title:"등록 완료되었습니다.",
						subTitle:"담당자가 확인 후 연락드릴 예정입니다."
					});
        }
      }
    );
  };

  interface WorkType {
    code: string;
    name: string;
  }

  const [workType] = React.useState<WorkType[]>([
    { code: "C", name: "전화" },
    { code: "B", name: "게시판" },
    { code: "M", name: "1:1 메신저" },
    { code: "O", name: "발주" },
    { code: "E", name: "기타" }
  ]);

  const workTypeList: JSX.Element[] = workType.map((data, key) => (
    <span className="box__checkbox" key={key}>
      <input type="checkbox" id={`workType${key}`} value={data.code} {...register("workType", { required: "업무 종류를 선택해주세요." })} />
      <label htmlFor={`workType${key}`}>{data.name}</label>
    </span>
  ));

  return (
		<>
			<BoxQna className="inner">
				<SectionTitle>
					<img src={qnaImage} alt="contact" />
					<h2 className="title__h2">견적 문의</h2>
					<p className="sub__title">
						견적 문의사항 남겨주시면 <br />
						담당자가 확인 후 친절하게 답변해 드리겠습니다.
					</p>
				</SectionTitle>
				<BoxSection>
					{!status.state?
						<BoxForm onSubmit={handleSubmit(onValid)}>
							<BoxAgree>
								<p className="text__title">{term.title}</p>
								<div className="box__agree" dangerouslySetInnerHTML={{ __html: term.contents }}></div>
								<div className="box__form-set">
									<span className="box__radio">
										<input type="radio" id="yes" value="yes" {...register("agree", { required: true })} />
										<label htmlFor="yes">동의함</label>
									</span>
									<span className="box__radio">
										<input type="radio" id="no" value="no" {...register("agree", { required: true })} />
										<label htmlFor="no">동의안함</label>
									</span>
								</div>
							</BoxAgree>
							<ul className="list__form">
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">회사명</p>
									</div>
									<div className="box__form-set">
										<span className="box__input">
											<input type="text" placeholder="회사명을 입력해주세요" maxLength={50} {...register("company", { required: "회사명을 입력하지 않았습니다. 입력해주세요." })} />
										</span>
										<p className="text__error">
											{formState.errors?.company?.message}
										</p>
									</div>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">업종</p>
									</div>
									<div className="box__form-set">
										<span className="box__input">
											<input type="text" placeholder="업종을 입력해주세요" maxLength={50} {...register("industry", { required: "업종을 입력하지 않았습니다. 입력해주세요." })} />
										</span>
										<p className="text__error">
											{formState.errors?.industry?.message}
										</p>
									</div>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">성명</p>
									</div>
									<div className="box__form-set">
										<span className="box__input">
											<input type="text" placeholder="성명을 입력해주세요" maxLength={50} {...register("name", { required: "성명을 입력하지 않았습니다. 입력해주세요.", pattern: { value: /^[가-힣]{2,5}|[a-zA-Z]{2,10}$/, message: "한글, 영문만 입력 가능합니다." }})} />
										</span>
										<p className="text__error">{formState.errors?.name?.message}</p>
									</div>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">연락처</p>
									</div>
									<div className="box__form-set">
										<span className="box__input">
											<input type="text" placeholder="-제외한 숫자로만 입력해주세요" maxLength={20} {...register("tel", { required: "연락처를 입력하지 않았습니다.", pattern: { value: /^[0-9]{10}/, message: "10자리 숫자로만 입력 가능합니다." }})} />
										</span>
										<p className="text__error">{formState.errors?.tel?.message}</p>
									</div>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">이메일</p>
									</div>
									<div className="box__form-set box__email">
										<span className="box__input">
											<input type="text" placeholder="abc@email.com" maxLength={75} {...register("email", { required: "이메일을 입력하지 않았습니다.", pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "@포함한 이메일만 가능합니다."}})} />
										</span>
										<p className="text__error">{formState.errors?.email?.message}</p>
									</div>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">업무 종류</p>
									</div>
									<div className="box__form-set">
										{workTypeList}
										<p className="text__error">
											{formState.errors?.workType?.message}
										</p>
									</div>
									<p className="text__noti">- 중복 선택 가능</p>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title text__essential">업무량</p>
									</div>
									<div className="box__form-set">
										<span className="box__input">
											<input type="text" placeholder="ex) 전화 60 / 게시판 30 / 톡상담 20 / 기타 10" maxLength={100} {...register("workLoad", { required: "업무량을 입력해주세요." })} />
										</span>
										<p className="text__error">
											{formState.errors?.workLoad?.message}
										</p>
									</div>
									<p className="text__noti">
										- 일일 기준 응대콜 처리량, 게시판 처리량, 톡상담 처리량, 기타 처리량를 입력해주세요.
									</p>
								</li>
								<li className="list-item">
									<div className="box__title">
										<p className="text__title">문의사항</p>
									</div>
									<div className="box__form-set">
										<span className="box__textarea">
											<textarea maxLength={21844} {...register("contents")} />
										</span>
									</div>
								</li>
								<li className="list-item">
									<ReCAPTCHA
										onChange={token => {
											onChangeRecaptcha(token || "");
										}}
										sitekey={
											process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string
										}
									/>
									<input type="hidden" {...register("reCaptchaToken")} />
								</li>
							</ul>
							<div className="box__buttons">
								<button type="submit" className="button__submit">작성완료</button>
							</div>
						</BoxForm>
					:
						<Loading icon={status.icon} title={status.title} subTitle={status.subTitle} />
					}
				</BoxSection>
			</BoxQna>
			
			<LayerPop open={isOpen} type={layerStatus.type} headTitle={layerStatus.headTitle} contents={layerStatus.contents} closeLayer={closeLayer}></LayerPop>
		</>
  );
}
