import { useCallback, useEffect, useState } from "react";

type Pagination = {
  totalPages: number;
  currentPage: number;
  maxVisibleButtons: number;
  onPageChanged: (e: any) => void;
};
const Pagination = ({
  totalPages,
  currentPage,
  maxVisibleButtons,
  onPageChanged,
}: Pagination): JSX.Element => {
  const [pages, setPages] = useState<JSX.Element[] | null>();

  const isInFirstPage = (): boolean => {
    return currentPage === 1;
  };

  const isInLastPage = (): boolean => {
    if (totalPages === 0) {
      return true;
    }
    return currentPage === totalPages;
  };

  //start page
  const startPage = useCallback((): number => {
    if (currentPage === 1) {
      // When on the first page
      return 1;
    }

    // When on the last page
    if (totalPages < maxVisibleButtons) {
      return 1;
    }

    //When on the near last page and can't jump
    if (currentPage + Math.floor(maxVisibleButtons / 2) > totalPages)
      return (
        currentPage -
        Math.floor(maxVisibleButtons / 2) +
        (totalPages - (currentPage + Math.floor(maxVisibleButtons / 2)))
      );

    if (currentPage - Math.floor(maxVisibleButtons / 2) < 1) return 1;
    // When in between
    return currentPage - Math.floor(maxVisibleButtons / 2);
  }, [currentPage, maxVisibleButtons, totalPages]);

  //end page
  const endPage = useCallback(() => {
    if (totalPages < maxVisibleButtons) {
      return totalPages;
    }
    return Math.min(startPage() + maxVisibleButtons - 1, totalPages);
  }, [maxVisibleButtons, startPage, totalPages]);

  const onClickFirstPage = () => {
    if (currentPage === 1) return;
    return onPageChanged(1);
  };

  const onClickPreviousPage = () => {
    if (currentPage === 1) return;
    return onPageChanged(currentPage - 1);
  };

  const onClickPage = useCallback(
    (page: number) => {
      onPageChanged(page);
    },
    [onPageChanged],
  );

  const onClickLastPage = () => {
    if (currentPage === totalPages) return;
    return onPageChanged(totalPages);
  };

  const onClickNextPage = () => {
    if (currentPage === totalPages) return;
    return onPageChanged(currentPage + 1);
  };

  const isPageActive = useCallback(
    (page: number) => {
      return currentPage === page;
    },
    [currentPage],
  );

  useEffect(() => {
    const pagesTerm = [];
    for (let i = startPage(); i <= endPage(); i++) {
      pagesTerm.push(
        <li key={i} className="pagination-item">
          <button
            onClick={() => {
              onClickPage(i);
            }}
            className={`${isPageActive(i) ? "active" : ""} rounded-button`}
          >
            {i}
          </button>
        </li>,
      );
    }
    setPages(pagesTerm);
  }, [endPage, isPageActive, onClickPage, startPage]);

  return (
    <div>
      <ul className="flex items-center justify-center">
        <li className="pagination-item">
          <button
            onClick={onClickFirstPage}
            className={isInFirstPage() ? "disabled" : ""}
            disabled={isInFirstPage()}
          >
            First
          </button>
        </li>

        <li className="pagination-item">
          <button
            onClick={onClickPreviousPage}
            className={`${isInFirstPage() ? "disabled" : ""}`}
            disabled={isInFirstPage()}
          >
            «
          </button>
        </li>
        {pages}
        <li className="pagination-item">
          <button
            onClick={onClickNextPage}
            className={`${isInLastPage() ? "disabled" : ""}`}
            disabled={isInLastPage()}
          >
            »
          </button>
        </li>
        <li className="pagination-item">
          <button
            onClick={onClickLastPage}
            className={isInLastPage() ? "disabled" : ""}
            disabled={isInLastPage()}
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
