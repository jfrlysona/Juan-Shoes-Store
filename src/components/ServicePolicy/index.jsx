import React from "react";

function ServicePolicy() {
  return (
    <section id="service-policy">
      <div className="service-policy-container">
        <div className="service-item service-shipping">
          <img
            src="https://htmldemo.net/juan/juan/assets/img/icon/policy-1.png"
            alt=""
          />
          <div className="service-item-text">
            <h5>FREE SHIPPING</h5>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div className="service-item service-support">
          <img
            src="https://htmldemo.net/juan/juan/assets/img/icon/policy-2.png"
            alt=""
          />
          <div className="service-item-text">
            <h5>ONLINE SUPPORT</h5>
            <p>Online support 24 hours a day</p>
          </div>
        </div>
        <div className="service-item service-guarantee">
          <img
            src="https://htmldemo.net/juan/juan/assets/img/icon/policy-3.png"
            alt=""
          />
          <div className="service-item-text">
            <h5>MONEY RETURN</h5>
            <p>Back guarantee under 5 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePolicy;
