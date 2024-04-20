import React from "react";
import { Modal } from "antd";

const ConfirmationModalNew = (props) => {
  const {
    isOpen,
    isClose,
    yesConfirm,
    desc,
    image,
    notBtnText,
    yesBtnTxt,
    heading,
  } = props;

  return (
    <Modal
      className="headerModals otpmodal"
      centered
      visible={isOpen}
      onOk={() => isClose()}
      onCancel={() => isClose()}
      footer={null}
      width={380}
    >
      <div className="dltModal">
        {image && <img src={image} />}
        {heading ? (
          <h2 className="mrbtm">{heading}</h2>
        ) : (
          <h2 className="mrbtm">Are you sure ?</h2>
        )}
        <p>{desc}</p>
        <div className="dltBtn">
          <button onClick={isClose}>{notBtnText ?? "No"} </button>
          <button className="confirmBtn" onClick={yesConfirm}>
            {yesBtnTxt ?? "Yes"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModalNew;
