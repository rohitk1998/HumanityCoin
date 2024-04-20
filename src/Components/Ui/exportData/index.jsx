import React, { useEffect, useState } from "react";
import { Row, Col, message } from "antd";
import CommonButton from "../button/CommonButton.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  downloadDateName,
  exportObj,
  exportTypeObj,
  fieldType,
  sendExportType,
} from "../../../staticObjects/primary.jsx";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { startEndDateSchema } from "../../../Schema/date";
import CommonRenderFields from "../../Ui/commonRenderFields";
import CommonModal from "../../CommonModal/index.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import { downloadData } from "../../../redux/services/transHistories.js";
import { useDispatch } from "react-redux";

const initData = {
  startDate: null,
  endDate: null,
  status: "",
};

function ExportData(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [moduleType, setModuleType] = useState("");
  const [exportModal, setExportModal] = useState(false);
  const [exportType, setExportType] = useState(exportObj[0].value);
  const { currentTab } = props;
  const { startDate, endDate } = downloadDateName;

  const {
    handleSubmit,
    control,
    formState: { errors, isValid: formIsvalid },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(startEndDateSchema),
    defaultValues: initData,
  });

  useEffect(() => {
    setModuleType(currentTab);
  }, [currentTab]);

  const onSubmit = (data) => {
    if (formIsvalid) {
      setExportModal(true);
    }
  };

  const commanProp = {
    errors,
    control,
    type: fieldType.dateInput,
    inputProps: { type: "date" },
  };

  const exportHandle = async () => {
    if (!exportType) {
      message.error("Please select export type");
      return;
    }

    let stDate = new Date(getValues().startDate);
    stDate.setUTCHours(0, 0, 0, 0);
    let newStartDate = stDate.toUTCString();

    let enDate = new Date(getValues().endDate);
    enDate.setUTCHours(23, 59, 59, 999);
    let newEndDate = enDate.toUTCString();

    let res = await dispatch(
      downloadData({
        from: newStartDate,
        to: newEndDate,
        csv_type: sendExportType[moduleType],
        download_type: exportType,
      })
    );

    if (res.payload.status) {
      setExportModal(false);
      setExportType(exportObj[0].value);
      let win = window.open(res.payload.link);
      win.focus();
    }
  };

  return (
    <>
      <div className="filtrspacing">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={21}>
            <Col lg={20} md={14} xs={24}>
              <Row gutter={21}>
                <Col lg={4} md={12} xs={24} className="text_size">
                  <CustomSelect
                    placeholder="Convert"
                    label="Type"
                    drop_data={exportTypeObj}
                    onChange={(val) => setModuleType(val)}
                    value={moduleType}
                  />
                </Col>
                <Col lg={4} md={12} xs={24} className="text_size">
                  <CommonRenderFields
                    {...commanProp}
                    name={startDate}
                    label={t("download.start_date")}
                  />
                </Col>
                <Col lg={4} md={12} xs={24} className="text_size">
                  <CommonRenderFields
                    {...commanProp}
                    name={endDate}
                    label={t("download.end_date")}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={10} xs={24}>
              <div className="mb24 centerbutns">
                <CommonButton
                  title="Submit"
                  className="btn"
                  onClick={handleSubmit(onSubmit)}
                />
                <CommonButton
                  title="Reset"
                  className="btn"
                  onClick={() => {
                    reset();
                    setModuleType(currentTab);
                  }}
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
      <CommonModal
        centered
        isOpen={exportModal}
        onCancel={() => setExportModal(false)}
        className="export_modal"
      >
        <h2 className="titleModal">Export Account Statement</h2>
        <CustomSelect
          placeholder="PDF"
          label="Export Type"
          drop_data={exportObj}
          onChange={(val) => setExportType(val)}
          value={exportType}
        />
        <div className="mb24 centerbutns">
          <CommonButton
            title="Cancel"
            className="btn"
            onClick={() => {
              setExportModal(false);
            }}
          />
          <CommonButton title="Export" className="btn" onClick={exportHandle} />
        </div>
      </CommonModal>
    </>
  );
}

export default ExportData;
