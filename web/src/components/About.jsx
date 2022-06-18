import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="assets\about1.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6">
                Who <b> We </b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                tempore numquam et sapiente! Incidunt minus est debitis labore
                sint cum, corporis ad. Quasi, voluptatibus placeat enim,
                consequuntur nihil maiores itaque, laudantium cupiditate omnis
                quod magnam. Quisquam, consectetur mollitia. Modi, doloremque
                ut! Tempora, libero cupiditate eum dolorum ab rem inventore
                veniam ea nam! Molestiae dolorem quis vel ipsa facilis esse
                quas, commodi enim ut! Sequi nam nesciunt nobis explicabo
                tenetur saepe esse harum velit ipsa. Aliquam. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Voluptas obcaecati sed
                dignissimos sunt recusandae laborum a laboriosam iusto incidunt
                suscipit.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
