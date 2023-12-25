import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Search({ closeSearch }) {
  return (
    <section id="search">
      <div className="close-search">
        <i
          className="fa-sharp fa-regular fa-xmark"
          onClick={() => closeSearch()}
        ></i>
      </div>
      <div
        className="search-input"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <input type="text" placeholder="Search entire storage here..." />
        <p>
          <i className="fa-sharp fa-regular fa-magnifying-glass"></i> Search
        </p>
      </div>
    </section>
  );
}

export default Search;
