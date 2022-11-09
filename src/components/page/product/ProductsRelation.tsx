import Product from "components/common/Product";
import products from "constants/products";

const ProductsRelation = ({ category }: { category: string }) => {
  return (
    <div className="mt-20">
      <div className="text-chipo-heading font-semibold text-[20px]">
        You might also like
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {products.map((product) => {
          if (product.category === category)
            return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsRelation;
