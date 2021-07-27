import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product {params.prodId} detail</h1>
    </section>
  );
};

export default ProductDetail;
