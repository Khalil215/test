import React from "react";
import Blog from "./blog";
import BottomLink from "../bottomLink";

type Props = {};

const Blogs = (props: Props) => {
  const blogs = [
    {
      video:"/images/vid1.png",
      book:"/images/book1.png"
    },
    {
      video:"/images/vid2.png",
      book:"/images/book2.png"
    },
    {
      video:"/images/vid3.png",
      book:"/images/book3.png"
    },
  ]
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Equity Jobs</h2>
      </div>
      <div className="mt-20">
        <div className="cardFlex">
          {blogs.map((blog, index) => (
              <Blog
                key={index}
                video={blog.video}
                book={blog.book}
              />
            ))}
        </div>
      </div>
      <BottomLink text="See More Blogs & Resources" />
    </section>
  );
};

export default Blogs;
