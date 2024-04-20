import React from "react";
import Turnstile from "react-turnstile";
import { cloudCaptchaSiteKey } from "../../api";
export const CloudflareCaptcha = (props) => {
  return (
    <Turnstile
      theme="light"
      className={`centerCaptcha ${props.className}`}
      sitekey={cloudCaptchaSiteKey()}
      onVerify={(token) => {
        props.onChange(token);
      }}
      onLoad={(widgetId) => {
        console.log("cloudflare captcha widgetId===>", widgetId);
      }}
      onExpire={(expire) => {
        console.log("cloudflare captcha expire===>", expire);
      }}
      onError={(err) => {
        console.log("cloudflare captcha err===>", err);
      }}
    />
  );
};
