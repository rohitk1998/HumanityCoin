import React, { forwardRef, useEffect } from "react";

export const FocusWithIncreaseWidth = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
        ref?.current?.focus();
      }, 500);

      // increase with of input field
      let dom = ref?.current?.input;
      dom?.addEventListener("input", () => {
        dom.style.width = dom.value.length + "ch";
      });
    }
  }, []);

  return <></>;
});
