import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}) => {
  const totalPages = Math.max(1,Math.ceil(totalItems / itemsPerPage));

  const renderPaginationButtons = () => {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="first"
        disabled={currentPage === 1}
        onClick={() => handlePagination(1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="previous"
        disabled={currentPage === 1}
        onClick={() => handlePagination(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        disabled={currentPage===totalPages}
        onClick={() => handlePagination(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="last"
        disabled={currentPage === totalPages}
        onClick={() => handlePagination(totalPages)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    );

    return pageButtons;
  };

  return <div
  style={{
    display : "flex",
    gap : "12px",
    alignItems : "center",
    flexWrap : "wrap"
  }}
  >
  <div
  style={{
    fontWeight : "bold"
  }}
  >Page {currentPage} of {totalPages}</div>
  <div className="pagination">{renderPaginationButtons()}</div>
  </div>
};

export default Pagination;
