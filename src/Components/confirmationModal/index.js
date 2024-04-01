import React from "react";
import { Modal } from "antd";
import { StoreImages } from "../Storeimgaes/StoreImages";

const ConfirmationModal = (props) => {
  const { isOpen, isClose, yesConfirm, desc } = props;
  const { dlt } = StoreImages;

  return (
    <Modal
      className="headerModals otpmodal"
      centered
      visible={isOpen}
      onOk={() => isClose(false)}
      onCancel={() => isClose(false)}
      footer={null}
    >
      <div className="dltModal">
        <img src={dlt} />
        <h2>Are you sure ?</h2>
        <p>{desc}</p>
        <div className="dltBtn">
          <button onClick={isClose}>Cancel</button>
          <button className="confrBtn" onClick={yesConfirm}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
