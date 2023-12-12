import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import DetailProduct from "../DetailProduct";
// ..
AOS.init();
function QuickView({ closeModal }) {
  return (
    <div className="quick-view-modal" onClick={closeModal}>
      <div
        className="quick-view-modal-container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="close-qw">
        <i className="fa-sharp fa-regular fa-xmark" onClick={closeModal}></i>
        </div>
        <DetailProduct />
      </div>
    </div>
  );
}

export default QuickView;
