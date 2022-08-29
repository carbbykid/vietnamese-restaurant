import Pagination from "components/common/Pagination";
import { useCallback, useEffect, useState } from "react";
import ProductDetail from "../home/ProductDetail";

const Products = ({ heading }: { heading: string }): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [recordsPerPage, setRecordPerPage] = useState(9);
  const [listItems, setListItems] = useState<any>([]);

  const onPageChanged = (e: any) => {
    setPage(e);
    loadListItem();
  };

  const loadListItem = useCallback(() => {
    setTotalPages(Math.floor(mockData.length / recordsPerPage));
    setListItems(handleDataOnPage(page, recordsPerPage));
  }, [page, recordsPerPage]);

  const handleDataOnPage = (page: number, size: number) => {
    const offset = (page - 1) * size;
    const data = [];
    for (let i = offset; i < offset + size; i++) {
      data.push(mockData[i]);
    }
    return data;
  };

  useEffect(() => {
    loadListItem();
  }, [loadListItem]);

  return (
    <div className="bg-white pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <div className="mb-[50px]">
          <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
            {heading}
          </h2>
          <hr className="divider mb-24" />
          <div className="flex flex-wrap justify-center">
            {listItems.map((product: any, idx: any) => (
              <ProductDetail key={idx} product={product} />
            ))}
          </div>
          {listItems.length === 0 ? (
            <li className="flex item-center">No Record Found</li>
          ) : (
            <li />
          )}
          {listItems.length > 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              maxVisibleButtons={3}
              onPageChanged={(e: any) => onPageChanged(e)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

const mockData = [
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-1",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-2",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-2",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-3",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Mami",
    desc: "The FirstWatch ever released",
    price: "300$",
  },
];
