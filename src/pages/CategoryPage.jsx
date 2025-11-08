import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { extendedProducts } from "../data/extendedData";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const CategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  let categoryName;
  if (category === "electronics") {
    categoryName = "electronics";
  } else if (category === "mens-clothing") {
    categoryName = "men's clothing";
  } else if (category === "womens-clothing") {
    categoryName = "women's clothing";
  } else if (category === "jewelery") {
    categoryName = "jewelery";
  } else {
    categoryName = category.replace("-", " ");
  }

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      const filteredProducts = extendedProducts.filter(
        (product) => product.category === categoryName
      );
      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          <h1 className="text-3xl font-bold text-center col-span-full mb-8 capitalize">
            {categoryName}
          </h1>
          {products.map((product) => (
            <Product key={product.id} post={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;