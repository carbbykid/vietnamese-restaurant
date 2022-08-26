import { useEffect, useRef, useState } from "react";

const Pagination = (): JSX.Element => {
  const [isInFirstPage, setIsInFirstPage] = useState(false);
  const [isInLastPage, setIsInLastPage] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState<number>();
  const [maxVisibleButtons, setmaxVisibleButtons] = useState<number>();

  const pages = useRef<JSX.Element[]>(null);

  useEffect(() => {
    for (let i = startPage(); i <= endPage(); i++) {
      pages.current?.push(
        <li key={i} className="pagination-item">
          {/* <button
            onClick={() => {
              onClickPage(i);
            }}
            className={isPageActive(i) ? "active" : ""}
          >
            {i}
          </button> */}
        </li>,
      );
    }
  }, []);

  //start page
  const startPage = (): number => {
    if (!totalPages || !maxVisibleButtons || !currentPage) return 1;

    if (currentPage === 1) {
      // When on the first page
      return 1;
    }

    // When on the last page
    if (totalPages < maxVisibleButtons) {
      return 1;
    }
    if (currentPage === totalPages) {
      return totalPages - maxVisibleButtons + 1;
    }

    // When in between
    return currentPage - 1;
  };

  //end page
  const endPage = () => {
    if (!totalPages || !maxVisibleButtons) {
      return 1;
    }
    if (totalPages < maxVisibleButtons) {
      return totalPages;
    }
    return Math.min(startPage() + maxVisibleButtons - 1, totalPages);
  };

  const onClickFirstPage = () => {
    console.log("onClickFirstPage");
  };
  const onClickPreviousPage = () => {
    console.log("onClickPreviousPage");
  };

  const onClickLastPage = () => {
    console.log("onClickLastPage");
  };

  const onClickNextPage = () => {
    console.log("onClickNextPage");
  };

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => onClickFirstPage()}
            className={isInFirstPage ? "disabled" : ""}
            disabled={isInFirstPage}
          >
            First
          </button>
        </li>

        <li className="pagination-item">
          <button
            onClick={() => onClickPreviousPage()}
            className={isInFirstPage ? "disabled" : ""}
            disabled={isInFirstPage}
          >
            «
          </button>
        </li>
        {/* {pages} */}
        <li className="pagination-item">
          <button
            onClick={() => onClickNextPage()}
            className={isInLastPage ? "disabled" : ""}
            disabled={isInLastPage}
          >
            »
          </button>
        </li>
        <li className="pagination-item">
          <button
            onClick={() => onClickLastPage()}
            className={isInLastPage ? "disabled" : ""}
            disabled={isInLastPage}
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
