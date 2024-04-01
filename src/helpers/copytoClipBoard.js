import { message } from "antd";
import "react-toastify/dist/ReactToastify.css";

export const copytoClipBoard = (param) => {
  navigator.clipboard.writeText(param).then(
    () => {
      message.success("Copied");
    },
    (err) => {
      console.error("Async: Could not copy text: ", err);
    }
  );
};
