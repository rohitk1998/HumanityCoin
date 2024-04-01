import React from "react";
import style from "./style.module.scss";

function ProfileDocumentCard(props) {
  return (
    <div className={style.profileCardSec}>
      <div className={style.profileCardSec__heading}>
        <h2>{props.title}</h2>
      </div>
      {props.data.map((item) => {
        return (
          <div
            className={style.profileCardSec__profileInnerSec}
            key={item.heading}
          >
            <h4>{item.heading}</h4>
            <p>
              <p>
                {item.content ?? (
                  <img src={item.url} alt="" className={style.docImg} />
                )}
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileDocumentCard;
