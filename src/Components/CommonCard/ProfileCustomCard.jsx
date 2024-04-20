import React from "react";
import style from "./style.module.scss";

function ProfileCustomCard(props) {
  return (
    <div className={style.profileCardSec}>
      <div className={style.profileCardSec__heading}>
        <h2>{props.title}</h2>
      </div>
      {props.data.map((item, idx) => (
        <div
          className={style.profileCardSec__profileInnerSec}
          key={`${idx}${item.heading}`}
        >
          <h4>{item.heading}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileCustomCard;
