import TableCustom from "components/common/TableCustom";
import products, { ProductType } from "constants/products";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, selectAllProducts } from "redux/slice/cartSlice";
import groupByAndCount from "util/groupBy";
import Subtotal from "./Subtotal";

const GenerateProductInCart = () => {
  const productsId = useSelector(selectAllProducts);

  const groupByToArray = (arr: any[], key: string) => {
    return Object.values(groupByAndCount(arr, key));
  };

  const getProductInMyCart = () => {
    const result: ProductType[] = [];
    productsId.forEach((productId) => {
      const term = products.find(
        (product) => product.id === (productId as unknown as string),
      );
      if (term) {
        result.push(term);
      }
    });
    return groupByToArray(result, "id");
  };

  return (
    <div className="wrap-content my-[80px]">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <TableCustom
            data={getProductInMyCart()}
            titleRow={RenderTitleRow()}
          />
        </div>
        <div className="col-span-1">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default GenerateProductInCart;

const RenderTitleRow = () => {
  const dispatch = useDispatch();
  return [
    {
      title: "Image",
      field: ({ imgUrl }: any) => {
        return <img className="w-[50px] h-[50px]" src={imgUrl} />;
      },
    },
    { title: "Title", field: "productName" },
    { title: "Price", field: "price" },
    { title: "Qty", field: "quantity" },
    {
      title: "Delete",
      field: ({ id }: any) => {
        return (
          <button
            onClick={() => dispatch(removeProduct(id))}
            className="text-[20px] text-chipo-heading"
          >
            <FaRegTrashAlt />
          </button>
        );
      },
    },
  ];
};
