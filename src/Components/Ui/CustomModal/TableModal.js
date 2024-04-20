import React, { useState } from "react";
import { Button, Modal } from "antd";
import style from "./style.module.scss";

import { ArrowLeftOutlined } from "@ant-design/icons";

const TableModal = ({ btn, children, heading, title }) => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div>
        <Button type="primary" onClick={() => setModal2Open(true)}>
          {btn}
        </Button>
        <Modal
          className={`${style.customModal} customModalStyle TableModalStyle`}
          title={
            heading ? (
              <div>
                <div className={style.customModal_headerDesign}>
                  <button className="blue">
                    <ArrowLeftOutlined />
                  </button>
                  <h5>{title}</h5>
                </div>
              </div>
            ) : (
              false
            )
          }
          centered
          // closeIcon={false}
          visible={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          style={
            {
              // borderRadius: "20px",
              // overflow: "hidden",
            }
          }
          // bodyStyle={{}}
          footer={null}
        >
          {children}
        </Modal>
      </div>
    </>
  );
};

export default TableModal;
