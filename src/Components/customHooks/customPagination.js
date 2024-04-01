import { Pagination } from "antd";
import React from "react";

const CustomPagination = (props) => {
  const { pageNo, limit, onChange, total, onShowSizeChange } = props;
  return (
    <>
      {total > 10 && (
        <div className="pagination">
          <Pagination
            className="rg-pagination"
            pageNo={pageNo}
            pageSize={limit}
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            total={total}
            current={pageNo}
          />
        </div>
      )}
    </>
  );
};

export default CustomPagination;
