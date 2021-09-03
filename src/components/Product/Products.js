import useFetch from "../useFetch";
import List from "./List";

function Products() {
     const { data: products } = useFetch('http://localhost:8000/products');

     return (
          <div>
               <h1>Products</h1>
               { products && <List products={products} />}
          </div>
     )
}

export default Products