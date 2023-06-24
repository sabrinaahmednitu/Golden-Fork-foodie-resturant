import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div>
        <h1>Why you choose us</h1>
        <p>
          Barton waited twenty always repair in within we do.An delighted
          offending curiosity my is dashwoods at .Boy prosperous increasing
          surrounded
        </p>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
          <img
            src="../../../images/adult-blur-blurred-background-687824.png"
            alt=""
            className="blog-img"
          />
          <div className="blog-text">
            <div>
              <img src="../../../images/icons/Group 204.png" alt="" />
            </div>
            <div>
              <h5>Fast Delivery</h5>
              <p>
                Keep your system is sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="See more"> See more </a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="../../../images/chef-cook-food-33614.png"
            alt=""
            className="blog-img"
          />

          <div className="blog-text">
            <div>
              <img src="../../../images/icons/Group 1133.png" alt="" />
            </div>
            <div>
              <h5>A Good Auto Responder</h5>
              <p>
                Keep your system is sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="See more"> See more </a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="../../../images/architecture-building-city-2047397.png"
            alt=""
            className="blog-img"
          />
          <div className="blog-text">
            <div>
              <img src="../../../images/icons/Group 245.png" alt="" />
            </div>
            <div>
              <h5>Home Delivery</h5>
              <p>
                Keep your system is sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="See more"> See more </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
