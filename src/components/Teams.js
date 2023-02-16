import React from "react";

function Team() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="easySA">
                <span style={{ color: "blue" }}>Power up</span> your teams
              </h1>
              <p className="h5 mt-4">
                Calendly gives you control over team scheduling with a
                standardized, scalable process. It's secure, easy to manage, and
                integrates with your team's favorite tools, so you can get
                everyone working as efficiently and effectively as possible.
              </p>
              <button className="start-free-btn mt-5 mr-4">
                Start for free
              </button>
              <button className="sales-contact-btn mt-5">Contact sales</button>
            </div>
            <div className="col-md-6">
              <img
                src="/img/Calendly-Teams-Hero.webp"
                alt=""
                className="img-fluid individualImg1 p-3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1 className="stremline-tasks">
                Streamline tasks, extend team reach
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/img/Capture2.PNG"
                alt=""
                className="img-fluid individualImg1 pr-5"
              />
            </div>
            <div className="col-md-6">
              <h6 style={{ color: "blue" }}>AUTOMATED ASSIGNMENT</h6>
              <h1>Control how your team gets booked</h1>
              <p className="h5 mt-4">
                With Calendly, you can offer sessions that are a few minutes or
                a few hours, for one invitee or a group. Automated round-robin,
                first-available, or geography-based assignments let you easily
                divvy up meetings in any way that works for your team members.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solutions-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 style={{ color: "blue" }}>SOLUTIONS</h6>
              <h1 className="py-3">The right Calendly for the work you do</h1>
            </div>
          </div>
          <div className="row myCards">
            <div className="col-md-3">
              <div className="solutions-card">
                <div>
                  <img
                    src="/img/Calendly-Reps.webp"
                    alt="Sales"
                    className="img-fluid"
                  />
                  <br />
                  <h5>Sales</h5>
                  <p className="card-text">Get to your best leads faster.</p>
                </div>
                <br />

                <a href="#" className="learnMore-btn">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="solutions-card">
                <div>
                  <img
                    src="/img/Recruiting.webp"
                    alt="Recruiting"
                    className="img-fluid"
                  />
                  <br />
                  <h5>Recruiting</h5>
                  <p className="card-text">Less emailing, more closing</p>
                </div>
                <br />
                <a href="#" className="learnMore-btn">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="solutions-card">
                <div>
                  <img
                    src="/img/Customer_Success.webp"
                    alt="Customer success"
                    className="img-fluid"
                  />
                  <br />
                  <h5>Customer success</h5>
                  <p className="card-text">
                    Connect with customers when it matters
                  </p>
                </div>
                <a href="#" className="learnMore-btn">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="solutions-card">
                <div>
                  <img
                    src="/img/Education.webp"
                    alt="Education"
                    className="img-fluid"
                  />
                  <br />
                  <h5>Education</h5>
                  <p className="card-text">Boost student success</p>
                </div>
                <br />
                <a href="#" className="learnMore-btn">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="individualFooter mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="easyAhead">
                Easy
                <br />
                <span style={{ color: "blue" }}>ahead</span>
              </h1>
              <h6 className="ind">
                We take the work out of connecting with others so you can
                accomplish more.
              </h6>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle language-dropdown"
                  data-toggle="dropdown"
                >
                  English
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    French
                  </a>
                  <a className="dropdown-item" href="#">
                    Spanish
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="mainLink">
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">About Calendly</a>
                </li>
                <li>
                  <a href="#">Contact Sales</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="mainLink">
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Customer Sucsess</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li>
                  <a href="#">Recruiting</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="mainLink">
                  <a href="#">Popular Features</a>
                </li>
                <li>
                  <a href="#">Embeded Calendly</a>
                </li>
                <li>
                  <a href="#">Availability</a>
                </li>
                <li>
                  <a href="#">Sending Notification</a>
                </li>
                <li>
                  <a href="#">Using calendly Mobile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
