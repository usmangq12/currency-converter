import React, { useEffect } from "react";

import {
  TableFooterContainer,
  ActiveButton,
  InActiveButton,
} from "../assets/styles/TableFooter";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <TableFooterContainer>
      {range.map((el, index) =>
        page === el ? (
          <ActiveButton key={index} onClick={() => setPage(el)}>
            {el}
          </ActiveButton>
        ) : (
          <InActiveButton key={index} onClick={() => setPage(el)}>
            {el}
          </InActiveButton>
        )
      )}
    </TableFooterContainer>
  );
};

export default TableFooter;
