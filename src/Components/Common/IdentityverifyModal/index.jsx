import React from "react";
import CommonModal from "../../CommonModal";
import Identityverify from "../Identityverify";

function IdentityverifyModal(props) {
  const { isOpen, onClose, onClick } = props;
  return (
    <CommonModal isOpen={isOpen} onCancel={onClose}>
      <Identityverify cbOnClick={onClick} />
    </CommonModal>
  );
}
export default IdentityverifyModal;
