import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        <li><Link to="/products/p1">Product 1</Link></li>
        <li><Link to="/products/p2">Product 1</Link></li>
        <li><Link to="/products/p3">Product 1</Link></li>

      </ul>
    </div>
  );
};

export default Products;
