import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>My Programming Skills.</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Backend Development</h5>
                <p>
                My passion for backend development is unwavering and stems from the deep satisfaction 
                I find in architecting and optimizing the core infrastructure of software applications. 
                I thrive on the intricacies of crafting efficient and secure server-side systems, as well as ensuring
                seamless data management and communication between various components. My enthusiasm for backend development
                is driven by the belief that a strong and well-structured foundation is the key to building robust and high-performing
                software solutions that truly make an impact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                Self-learning web development has been an incredibly gratifying journey for me, one that I deeply cherish. 
                I take immense pride in acquiring this skill set independently and becoming so fluent in. While I'm passionate about crafting the 
                robust and efficient server-side systems, I also have a keen interest in front-end development. My dream is to work 
                on projects that demand a full-stack approach, where I can seamlessly integrate both frontend and backend technologies
                to create holistic and user-centric web solutions. </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Agile Development </h5>
                <p>
                Incorporating Agile Development methodologies into my work experience as a manager and team member,
                 I've observed every step of this dynamic and collaborative process. This approach has enabled me to contribute 
                 to the continuous delivery of high-value solutions through iterative development cycles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Git</h5>
                <p>
                Experienced in managing code repositories, tracking changes, 
                and collaborating seamlessly with team members. My skills 
                include branching and merging strategies, conflict resolution, 
                and utilizing Git repositories to maintain clean and organized codebases,
                ensuring efficient teamwork and code versioning throughout the development lifecycle.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Clean Coder</h5>
                <p>
                  I will always leave code cleaner than how I got it. This is one of the most important trait that every programmer should have
                  and is a skill I take great pride in. The value of writing clean, organized code extends far beyond individual 
                  preference; it's an essential practice that significantly enhances the development process. Not only does it 
                  facilitate easier maintenance and updates for future developers, but it also fosters a collaborative environment
                   where fellow team members can seamlessly contribute their insights and expertise. 

                   I utilize the skills from the book "Clean Code" by Robert Martin.
                </p>
              </div>
            </div>
          </div>
         
        </div>
        <div className="separated" />
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;
