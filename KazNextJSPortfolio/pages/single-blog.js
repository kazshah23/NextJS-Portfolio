import Layout from "../src/layout/Layout";
const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/Plane.jpeg" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">C++</a>
                  </h6>
                  <h2>Open Flights Data Analysis</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/Plane.jpg" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Kazmain Shah</label>
                      <span>26 FEB 2022</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    <a href = "https://github.com/RitulSoni/Open-Flights-Data-Project">Github Repo</a>
                  </p>
                  <p>
                  Our project uses the OpenFlights data set, where we get access to thousands of airports, routes, and data.
                   We took this data and cleaned it to give us the pertinent data subset need to created a Graph of connected airports
                    and routes. We used an adjacency list representation of a weighted graph to be able to run in optimal runtimes which 
                    will be discussed below. Users are able to run various simple command line commands to run the various algorthims we 
                    created to find the shortest path from one airport to another, to find the busiest airports, and also see the number 
                    of aiports who are connected together in a single component.
                  </p>
                  <h4>Technical Architecture</h4>
                  <p>
                  The OpenFlights dataset contains information about airports and the routes between them. 
                  An adjacency list representation of a graph can be used to store this data by representing each airport 
                  as a vertex in the graph and each route between airports as an edge in the graph.
                  </p>
                  <p>
                  To create the adjacency list, we would first need to parse the dataset and extract the information about the
                   airports and routes. We would then create a vertex for each airport and add it to the adjacency list. For each route
                    in the dataset, we would add an edge to the adjacency list that connects the vertices representing the source and 
                    destination airports.
                  </p>
                  <p>
                  Once the adjacency list has been constructed, it can be used to answer various questions about the airports and routes
                   in the dataset. For example, we could use the adjacency list to find the shortest path between two airports, or to 
                   compute the connected components of the graph to see which airports are reachable from each other. The adjacency list 
                   would also allow us to efficiently store and access the data from the OpenFlights dataset.
                  </p>
                  <p>
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">C++</a>
                  <a href="#">Group Work</a>
                  <a href="#">Data Analysis</a>
                  <a href="#">Algorthims</a>
                  <a href="#">Data Structures</a>
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleBlog;
