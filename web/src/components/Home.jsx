import React from "react";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-border mb-4 text-center text-white">
                {" "}
                Feels the Fresh Busiines Perspectiove
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                reprehenderit amet corporis voluptatibus autem ipsum aperiam
                pariatur quas, deleniti magnam libero molestiae omnis laboriosam
                nemo quod, hic exercitationem non dolores?
              </p>
              <div className="buttons">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to="/roadmap"
                  className="btn btn-outline-light me-4 rounded-pill px-4 py-2"
                >
                  Roadmap
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;
