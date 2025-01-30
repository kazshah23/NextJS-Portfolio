import Layout from "../src/layout/Layout";

const BlogFour = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            {/* <img src="static/img/ecommerce.jpeg" title="" alt="" /> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">AI & E-Commerce</a>
                  </h6>
                  <h2>AI-Powered E-Commerce Developer</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/linkedinkaz.jpeg" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Kazmain Shah</label>
                      <span>29 JAN 2025</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    <a href="https://github.com/kazshah23/AI-Ecommerce-Automation">
                      <i className="fab fa-github" /> Github Repo
                    </a>
                  </p>
                  <p>
                    I developed an AI-driven automation pipeline to streamline product design, listing, and order fulfillment,
                    enabling scalable and low-maintenance e-commerce operations. By integrating Flask, FastAPI, OpenAI’s DALL-E, and MongoDB,
                    the system efficiently generates unique, brand-consistent product designs optimized for Etsy storefronts.
                  </p>
                  <h4>Technical Architecture</h4>
                  <p>
                    The backend is powered by **Flask and FastAPI**, allowing for seamless API communication and rapid image generation using OpenAI’s DALL-E.
                    A structured MongoDB database stores design metadata, user preferences, and order tracking information.
                  </p>
                  <p>
                    The pipeline consists of several key components:
                    <ul>
                      <li>**Automated Image Generation**: Custom API endpoints generate T-shirt designs using carefully crafted DALL-E prompts.</li>
                      <li>**Etsy Shop Integration**: Automated listing creation with AI-driven descriptions optimized for search visibility.</li>
                      <li>**Order Fulfillment Workflow**: Tracks and manages order processing, ensuring scalability with minimal manual intervention.</li>
                    </ul>
                  </p>
                  <p>
                    This system successfully generated over **$1,000 in revenue**, demonstrating the power of AI-driven automation
                    in streamlining e-commerce operations. The modular nature of the architecture allows easy expansion to new products and platforms.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">AI</a>
                  <a href="#">E-Commerce</a>
                  <a href="#">Flask</a>
                  <a href="#">FastAPI</a>
                  <a href="#">OpenAI</a>
                  <a href="#">MongoDB</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogFour;
