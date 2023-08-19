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
                I am a Junior at the University of <span style={orange}>Illinois </span> Urbana-Champaign studying Computer Science + Economics.
                </h3>
                <p>
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">2025</span>
                      <div className="media-body">
                        Graduation <br />
                        Date
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3.77</span>
                      <div className="media-body">
                        GPA
                      </div>
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
        <div className="separated" />
        <div className="title">
          <h3>Languages &amp; Frameworks.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <h6>React</h6>
              </li>
              <li>
                <h6>Node.JS</h6>
              </li>
              <li>
                <h6>Pandas</h6>
              </li>
              <li>
                <h6>Flask</h6>
              </li>
              <li>
                <h6>Next.JS</h6>
              </li>
              <li>
                <h6>Numpy</h6>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My Languages</h3>
              <p>
              </p>
              {/* /skill */}
              <div className="skill-lt">
                <h6>C++</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Java</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "65%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>HTML/CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/Medline.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Developer</h6>
                  <label>Medline Industries</label>
                  <div className="rb-time">Internship</div>
                  <p>
                  • Developed a dynamic web portal using Java and JSP, and provided comprehensive documentation for the codebase to ensure ease of maintenance within the development team. <br/>
                  • Implemented a Messaging Tool using SOAP and HTTP enabling seamless XML message exchange and automated request URL generation based on user preferences. <br/>
                  • Applied advanced XML parsing and manipulation techniques to extract, modify, and format data fields within SOAP messages, significantly improving error analysis and resolution efficiency. <br/>
                  • Designed and implemented a robust backend connection to a SQL database in collaboration with cross-functional teams. This enhancement enabled streamlined data retrieval and manipulation for all page contents. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/illinois.png" className = "eduLogo" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Website Developer</h6>
                  <label>University of Illinois - ATLAS</label>
                  <div className="rb-time">Internship</div>
                  <p>
                  • Created and managed websites using Java catering to a daily user base of over 10k, aligning with client requirements. <br/>
                  • Conducted analysis on user statistics using Python to identify deficiencies in UI and website user experience. <br/>
                  • Frequently presented and discussed optimization strategies for content viewership and website implementation with
                  several different client teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/career.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Website Developer</h6>
                  <label>Career Advancement Exchange</label>
                  <div className="rb-time">Internship</div>
                  <p>
                  • Led and managed a team in the development of websites using React from initial concept to final implementation,
                  ensuring adherence to project timelines and deliverables. <br/>
                  • Collaborated closely with clients to understand their unique requirements, translating them into effective website
                  designs and functionalities.

                  </p>
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
