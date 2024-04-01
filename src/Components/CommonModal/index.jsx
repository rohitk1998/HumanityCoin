import { Modal } from "antd";
import { useEffect } from "react";

const CommonModal = (props) => {
  const { width, className, isOpen, onCancel, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    }
  }, [isOpen]);

  const oncloseBtn = () => {
    document.body.classList.remove("modal-open");
    onCancel();
  };
  return (
    <Modal
      className={`headerModals ${className}`}
      width={width ?? 415}
      centered
      visible={isOpen}
      onOk={oncloseBtn}
      onCancel={oncloseBtn}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CommonModal;
