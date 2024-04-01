// i worked on it
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import style from "./style.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

const CustomModal = (props) => {
  const {
    content,
    title,
    modaltype,
    updateModalType,
    setTitle,
    modal,
    className,
  } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (modaltype !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [modaltype]);

  const handleModalBack = () => {
    if (modal == "Deposit") {
      if (modaltype == "Deposit Something") {
        updateModalType("Deposit");
        setTitle("Deposit");
      }
    }

    if (modal == "Staking") {
      if (modaltype == "Staking Something") {
        updateModalType("Staking");
        setTitle("Staking");
      }
    }
  };
  return (
    <>
      <div>
        <Modal
          className={`${style.customModal} customModalStyle ${className}`}
          title={
            <>
              <div className={style.customModal_headerDesign}>
                {title !== "Staking" && (
                  <button onClick={handleModalBack}>
                    <ArrowLeftOutlined />
                  </button>
                )}
                <h5>{title}</h5>
              </div>
            </>
          }
          centered
          open={show}
          onCancel={() => {
            setShow && setShow(false);
            updateModalType && updateModalType("");
            setTitle && setTitle("");
          }}
          footer={null}
        >
          {content}
        </Modal>
      </div>
    </>
  );
};

export default CustomModal;
