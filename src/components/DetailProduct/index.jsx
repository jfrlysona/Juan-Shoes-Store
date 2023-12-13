import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../Details";

function DetailProduct() {
  const [detailsProduct, setdetailsProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" +
        id
    )
      .then((res) => res.json())
      .then((data) => setdetailsProduct(data));
  }, []);

  return (
    <section style={{paddingTop:'80px'}}>
      <Details detailsProduct={detailsProduct} />
    </section>
  );
}

export default DetailProduct;