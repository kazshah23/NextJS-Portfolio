import Layout from "../src/layout/Layout";
const BlogThree = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            {/* <img src="static/img/maze.jpeg" title="" alt="" /> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">C++</a>
                  </h6>
                  <h2>Labrynth Solver</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/linkedinkaz.jpeg" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Kazmain Shah</label>
                      <span>26 FEB 2022</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    <a href = "https://github.com/kazshah23/Labryinth-Solver"> <i className="fab fa-github" /> Github Repo</a>
                  </p>
                  <p>
                  My Program uses a randomized version of Prim's algorithm to efficiently create mazes. To manage maze-related data,
                   the code employs various data structures, including vectors, queues, and maps. Notably, it utilizes a disjoint set
                    data structure (implemented as dsets) to track connected components and ensure maze connectivity without introducing 
                    cycles during generation. To solve the maze, the code utilizes Breadth-First Search (BFS) traversal, making use of 
                    queues, visited cell tracking, cell lengths, and path storage in maps.
                  </p>
                  <h4>Technical Architecture</h4>
                  <p>
                  The maze is represented as a grid of cells, with walls in four directions: up, down, left, and right, 
                  stored in the walls vector. The code also integrates functionality for generating visual representations 
                  of the maze using the cs225::PNG library. This includes setting up images, blackening specific edges to represent walls,
                   and generating PNG images of both the maze and its solution. Importantly, when drawing the maze with a solution, 
                   the code highlights the path by changing the color of pixels along the route in the generated PNG image.
                  </p>
                  <p>
                  While the code lacks direct input functionality for specifying maze dimensions or other parameters, it provides a modular 
                  organization within a C++ class called SquareMaze, encapsulating maze generation, solving, and drawing functions. 
                  This modular structure enhances code clarity and ease of use. The introduction of randomness through the rand() function
                   ensures that different mazes are generated each time the program runs, adding variety to the generated mazes. Overall, 
                   these technical features collectively enable the code to efficiently create, solve, and visually represent square mazes.
                  </p>
                  <p>
                  </p>
                  <p>
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">C++</a>
                  <a href="#">algorithms</a>
                  <a href="#">BFS Traversal</a>
                  <a href="#">RNG</a>
                  <a href="#">Disjoint Sets</a>
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogThree;
