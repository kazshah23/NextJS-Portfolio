import Layout from "../src/layout/Layout";
const BlogTwo = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/topsters2.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">C++</a>
                  </h6>
                  <h2>Mosaic Maker</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/linkedinkaz.jpeg" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Kazmain Shah</label>
                      <span>May 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <a href = "https://youtu.be/wN2gpYGeuT4"> <i className="fab fa-youtube" /> Visual Demo</a>
                <h4>Microservices</h4>
                  <p>
                  <h6>Image Resizing:</h6> The project begins by resizing uploaded images. This operation involves precise handling of image
                   dimensions to ensure that the aspect ratio is maintained while achieving the desired size. The Python Imaging Library 
                   (PIL) is used for this task.
                  </p>
                  
                  <p>
                  <h6>Color Matching with KDTree:</h6> The core technical component is the color matching algorithm. It calculates the average
                   color for various regions of the resized image. The KDTree, a data structure, is employed to efficiently locate the 
                   closest matching tile based on color similarity. This involves vector calculations to determine the nearest neighbor 
                   in the KDTree structure.
                  </p>
                  <p>
                  <h6>Tile Placement:</h6> The project's central function involves pasting tiles onto the resized image, systematically covering
                   its regions. Tiles are selected based on their color proximity to the target region. The placement process is managed
                    through loops, iterating over rows and columns to ensure accurate positioning.
                  </p>
                  <p>
                  <h6>Modularity via HTTP Requests:</h6> A noteworthy technical aspect is the modularity of the project. It communicates with 
                  other services through HTTP requests, allowing for potential integration with external image processing tools or future
                   enhancements. This modular design promotes scalability and adaptability.
                  </p>
                  <p>
                  <h4>Middleware Work</h4>
                  <h6>make_mosaic Route:</h6> The core functionality of the application is encapsulated in the make_mosaic route. Here's what it does:
                  Image Handling: It receives image data through a POST request, which is typically uploaded by the user. The code extracts the file type from the uploaded image (e.g., JPEG, PNG).
                  File Management: It generates a unique file name for the uploaded image and saves it locally. This saved image serves as the base for creating the mosaic.
                  Microservice Integration: The route defines a list of URLs, each pointing to a different microservice. These microservices are presumably responsible for generating specific parts of the mosaic.
                  Parallel Processing: Inside a loop, the code sends POST requests to each microservice, passing the base image file as part of the request. This loop allows for parallel processing, where multiple microservices work concurrently to create the mosaic.
                  Response Aggregation: The responses from each microservice are collected in the images list. Each response likely contains a portion of the mosaic.
                  JSON Response: Finally, the route responds with a JSON object containing the mosaic images returned by the microservices.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Python Flask</a>
                  <a href="#">Distributed Systems</a>
                  <a href="#">C</a>
                  <a href="#">Algorthims</a>
                  <a href="#">KDTree</a>
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogTwo;
