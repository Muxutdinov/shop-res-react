import React from "react";
import b3 from '../imges/blog/b3.jpg'
import b6 from '../imges/blog/b6.jpg'

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="blog-box">
        <div className="imgWrapper">
          <img src={b3} alt="" />
        </div>
        <div className="blog-deatels">
          <h3>Odatdagi kiyinishingizni o'zgartiring</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae voluptate odit ducimus reprehenderit earum nulla
            voluptatibus aut. Sequi iure facere doloribus unde sed architecto,
            sunt temporibus assumenda deleniti similique voluptatum!
          </p>
          <div>Batafsil malumot</div>
        </div>
        <h1>13/01</h1>
      </div>
      <div className="blog-box">
        <div className="imgWrapper">
          <img src={b6} alt="" />
        </div>
        <div className="blog-deatels">
          <h3>Odatdagi kiyinishingizni o'zgartiring</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae voluptate odit ducimus reprehenderit earum nulla
            voluptatibus aut. Sequi iure facere doloribus unde sed architecto,
            sunt temporibus assumenda deleniti similique voluptatum!
          </p>
          <div>Batafsil malumot</div>
        </div>
        <h1>13/01</h1>
      </div>
      <div className="blog-box">
        <div className="imgWrapper">
          <img src={b3} alt="" />
        </div>
        <div className="blog-deatels">
          <h3>Odatdagi kiyinishingizni o'zgartiring</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae voluptate odit ducimus reprehenderit earum nulla
            voluptatibus aut. Sequi iure facere doloribus unde sed architecto,
            sunt temporibus assumenda deleniti similique voluptatum!
          </p>
          <div>Batafsil malumot</div>
        </div>
        <h1>13/01</h1>
      </div>
    </section>
  );
};

export default Blogs;
