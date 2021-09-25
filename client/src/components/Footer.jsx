import React, { memo, useEffect, useState } from "react";
import { Pagination } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchPagination } from "../redux/dogReduser";

function Footer(props) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchPagination({ page }));
  }, [page]);
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Pagination
        count={10}
        color="primary"
        onChange={(e, value) => setPage(value)}
      />
    </div>
  );
}

export default memo(Footer);
