import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../Details";
import RelatedProducts from "../RelatedProducts";
import DetailInformation from "../DetailInformation";

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
    <>
      <section style={{ paddingTop: "80px" }}>
        <Details detailsProduct={detailsProduct} />
      </section>
      <section id="tabs-container">
        <DetailInformation detailsProduct={detailsProduct}/>
      </section>
      <section>
        <RelatedProducts detailsProduct={detailsProduct}/>
      </section>
    </>
  );
}

export default DetailProduct;
