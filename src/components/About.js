const About = () => {
  const red = { color: 'red' };
  const orange = { color: 'orange' };
  const gray = { color: '#808080' };
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/CS.jpeg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  I am a Graduate at the University of <span style={orange}>Illinois </span> Urbana-Champaign with a degree in Computer Science + Economics.
                </h3>
                
                {/* Undergraduate Section */}
                <div className="separated" />
                <div className="title">
                  <h4>Undergraduate</h4>
                </div>
                <p>
                  I completed my undergraduate degree in Computer Science + Economics at UIUC, focusing on data storage, organization, and analytics.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">DEC 2024</span>
                      <div className="media-body">Graduation Date</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3.65</span>
                      <div className="media-body">GPA</div>
                    </div>
                  </div>
                </div>

                {/* Master's Section */}
                <div className="separated" />
                <div className="title">
                  <h4>Master's</h4>
                </div>
                <p>
                  Currently pursuing a Master's degree with a focus on advanced topics in Data Science, Cloud Computing, and AI-driven insights.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">DEC 2025</span>
                      <div className="media-body">Graduation Date</div>
                    </div>
                  </div>
                </div>
                
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
