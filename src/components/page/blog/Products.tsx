import ProductDetail from "../home/ProductDetail";

const Products = ({ heading }: { heading: string }): JSX.Element => {
  return (
    <div className="bg-white pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <div className="mb-[50px]">
          <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
            {heading}
          </h2>
          <hr className="divider mb-24" />
          <div className="flex flex-wrap justify-center">
            {mockData.map((product, idx) => (
              <ProductDetail key={idx} product={product} />
            ))}
          </div>
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
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
];
