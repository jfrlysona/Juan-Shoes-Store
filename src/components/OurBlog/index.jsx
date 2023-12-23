import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OurBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 8)));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="ourBlog">
      <div className="ourBlog-text">
        <h1>Our Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <Slider {...settings} className="ourBlog-cards">
        {blogs.map((x) => (
          <BlogCard
            key={x.id}
            title={x.title}
            author={x.author}
            date={x.createdAt[0]}
            blogId={x.id}
            img={x.image}
          />
        ))}
      </Slider>
      {/* <div className="ourBlog-cards">
      
      </div> */}
    </section>
  );
}

export default OurBlog;
