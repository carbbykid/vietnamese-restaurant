import products from "constants/products";
import { addProduct } from "redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import Tabs from "components/common/Tabs";
import ProductsRelation from "./ProductsRelation";

const ProductDetail = ({ productId }: { productId: string }) => {
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === productId);
  return (
    <div className="wrap-content my-[80px]">
      {product ? (
        <div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <img src={product.imgUrl} alt="chipo" />
            </div>
            <div>
              <div className="text-[30px] text-chipo-heading">
                {product.productName}
              </div>
              <div className="mt-2">
                (<span className="text-chipo-orange">{product.avgRating}</span>
                &nbsp;Ratings)
              </div>

              <div className="flex gap-5 items-center mt-3">
                <div className="text-chipo-heading text-[20px]">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>
                <div className="text-[14px] text-chipo-text">
                  Category: {product.category}
                </div>
              </div>

              <div className="mt-3">{product.shortDesc}</div>

              <button
                onClick={() => dispatch(addProduct(product.id))}
                className="px-5 mt-10 py-2 bg-chipo-heading hover:bg-chipo-blue duration-200 cursor-pointer text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <Tabs
            data={[
              {
                id: 1,
                title: "Description",
                content: product.description,
              },
              {
                id: 2,
                title: `Reviews (${product.reviews.length})`,
                content: product.reviews,
              },
            ]}
          />
          <ProductsRelation category={product.category} />
        </div>
      ) : (
        "Not Found Product Detail"
      )}
    </div>
  );
};

export default ProductDetail;
