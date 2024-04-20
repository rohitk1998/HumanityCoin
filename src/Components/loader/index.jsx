import { Spin } from "antd";

export const Loader = (props) =>
  props.loading && (
    <div className="loader_style">
      <Spin spinning={props.loading} size="large" />
    </div>
  );
