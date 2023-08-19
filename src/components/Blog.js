import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>My Projects.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/Plane.jpeg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">December 2022 </div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Openflights Data Analysis
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/Maze.jpeg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">March 2022</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                    Labrynth Solver
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/topsters2.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">April 2022</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Mosaic Maker
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/linkedlist.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">November 2022</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Linked List Discovery
                    </a>
                  </Link>
                </h6>
              </div>
              
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            {/* <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
