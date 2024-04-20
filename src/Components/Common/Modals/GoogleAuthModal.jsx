import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import "./modal.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  disableTwoFactorAuth,
  enableTwoFactorAuth,
  generateQrCode,
} from "../../../redux/services";
import { copytoClipBoard } from "../../../helpers";
import { useTranslation } from "react-i18next";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import { otpCodeSchema } from "../../../Schema";
import { ButtonCustom } from "../../Ui/button/ButtonCustom";

const GoogleAuthModal = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const user = useSelector((state) => state.user.data);
  const getCode = useSelector((state) => state?.commonApiData?.getCode);

  const [openModal, setOpenModal] = useState(false);

  const { open, onCancel } = props;
  const { copyICONPNG } = StoreImages;
  const isOtp = user.otp;
  const secretKey = getCode?.data?.url.split("secret=")[1];
  const barCode = getCode?.data?.barcode;

  const checkData = async () => {
    if (!isOtp) {
      let res = await dispatch(generateQrCode());
      if (res.payload.status) {
        setOpenModal(true);
      } else {
        setOpenModal(false);
        onCancel();
      }
    } else {
      setOpenModal(true);
    }
  };

  useEffect(() => {
    checkData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpCodeSchema),
  });

  const onSubmit = async (data) => {
    if (data) {
      let res = isOtp
        ? await dispatch(disableTwoFactorAuth(data))
        : await dispatch(enableTwoFactorAuth(data));
      if (res.payload.status) {
        onCancel();
      }
    }
  };

  return (
    <div>
      {openModal && (
        <Modal
          className="customModalStyle googleAuthModal"
          title={
            <div className="">
              <h5>{`${isOtp ? t("google_disable") : t("google_enable")}`}</h5>
            </div>
          }
          centered
          open={open}
          onCancel={onCancel}
          footer={null}
        >
          <div className="description innerModelSec">
            {!user.otp && (
              <div className="modalparAuth center spanBalance">
                <h3>{t("authenticator_secret_code")}</h3>

                <span className="infoSpan">
                  <p>{secretKey}</p>
                </span>

                <p className="centerTxt">
                  {secretKey?.length > 40
                    ? secretKey?.substring(0, 40) + "..."
                    : secretKey}
                  <img
                    className="copyICONimg"
                    src={copyICONPNG}
                    alt="copyICONimg"
                    onClick={() => copytoClipBoard(secretKey)}
                  />
                </p>
              </div>
            )}

            {barCode && (
              <img alt="QR Code" src={"data:image/png;base64," + barCode} />
            )}

            <div className="modalNotes">
              <ul>
                <li>{t("install_authenticator")}</li>
                <li> {t("scan_authenticator")} </li>
              </ul>
            </div>

            <div className="barcodeContnt">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="code">
                  {t("6_dizits")}
                  <input {...register("code")} />
                  {errors.code && (
                    <span className="errorCls">{t(errors.code.message)}</span>
                  )}
                </label>

                <ButtonCustom
                  label={user?.otp ? t("buttons.disable") : t("buttons.enable")}
                  htmlType="submit"
                  anchortype
                />
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GoogleAuthModal;
