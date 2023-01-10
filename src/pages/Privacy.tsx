import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { send } from "../common/AxiosUtil";
import { SubVisual } from "../components/Visual";
import { theme } from "../styles/Theme";
import selectIcon from "../assets/icon__select.png";
interface termsType{
  version: string,
  title: string,
  contents: string
}
export function Privacy() {
  const [version, setVersion] = useState<String[]>([]);
  const [terms, setTerms] = useState<termsType>({
    version: "",
    title: "",
    contents: ""
  });

  useEffect(()=>{
    if(!version.length){
      send("get", "/api/terms/findVersionList", "", {}, function(r) {
        setVersion(r.data.data);
      });
    }

    if(!terms.title){
      send("get", "/api/terms/top1", "", {}, function(r) {
        setTerms(r.data.data[0]);
      });
    }
  },[version, terms])

  const BoxTerms = styled.div`
    .title{
      margin-bottom:20px;
      font-size:40px;
      font-weight:bold;
      color:${theme.colors.textMain};
    }
    .box__summary{
      margin-bottom:30px;
      text-align:right;
      select{
        position:relative;
        width:220px;
        height:48px;
        margin-left:10px;
        padding:5px 10px;
        border-radius:8px;
        border:1px solid #e5e5e5;
        appearance:none;
        background:url(${selectIcon}) no-repeat center right 10px / 15px; 
      }
    }
    .text__title{
      margin-bottom:20px;
      font-size:25px;
      font-weight:bold;
      color:${theme.colors.textMain};
    }
    strong{
      font-weight:bold;
    }
  `;

  const onSelect = (event:React.FormEvent<HTMLSelectElement>)=>{
    event.preventDefault();
    const version = event.currentTarget.value.split(" ")[1];
    send("get", "/api/terms/findByVersion?version=" + version, "", {}, function(r) {
      setTerms({
        version: version,
        title: terms.title,
        contents: r.data.data
      })
    });
  }
  return (
    <>
      <SubVisual 
        title="개인정보처리방침" 
        text="" 
        image="../assets/image/image__sub-vis3.png" />
      <BoxTerms className="inner">
        <div className="box__summary">
          <select name="" id="" onChange={onSelect} value={"version " + terms.version}>
            {version.map((item,idx)=>{
              return(
                <option value={"version " + item} key={idx}>개인정보처리방침 {item}</option>
              )
            })}
          </select>
        </div>
        {terms.title?<p className="text__title">{terms?.title}<span className="text__version">({terms?.version})</span></p>:""}
        <div className="box__text" dangerouslySetInnerHTML={{ __html: terms?.contents }}></div>
      </BoxTerms>
    </>
  );
}
