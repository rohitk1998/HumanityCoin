import React from "react";
import style from "./../Pages/CustomTabs/style.module.scss";
import { StoreImages } from "../Storeimgaes/StoreImages";

const HeadComman = (props) => {
  const { backArrow } = StoreImages;
  const { onClick, title } = props;
  return (
    <>
      <div className={style.btnList_heading}>
        <button onClick={onClick} className="curserPointer">
          <img src={backArrow} alt="icon" />
        </button>
        <h5>{title}</h5>
      </div>
    </>
  );
};

export default HeadComman;
