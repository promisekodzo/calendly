import React from "react";

function Individuals() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="easySA">
                The genius way <br />
                work <span style={{ color: "blue" }}>better</span>
              </h1>
              <p className="h5 mt-4">
                Calendly makes it easy to work smarter when you’re working solo.
                Meetings, sessions, and appointments become more efficient ways
                to achieve success and accomplish goals.
              </p>
              <button className="signUp-btn mt-5">Sign up for free</button>
            </div>
            <div className="col-md-6">
              <img
                src="/img/Calendly-Individuals-Hero.webp"
                alt=""
                className="img-fluid individualImg1 p-3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/img/indiv.PNG"
                alt=""
                className="img-fluid individualImg1 p-3"
              />
            </div>
            <div className="col-md-6">
              <h6>A CURATED CALENDAR</h6>
              <h1>Book up efficiently</h1>
              <p className="h5 mt-4">
                When invitees select a meeting slot from your schedule, they
                only see the times you're available, and only the length and
                type of meeting you want to have. Your schedule fills up
                efficiently, and everyone avoids excess email exchanges.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
              <h6>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
              <h1>Work like you have a personal assistant</h1>
              <p className="h5 mt-4">
                Because Calendly automates administrative tasks like sending
                reminder emails and follow-ups, you can focus on the work that
                builds your business and brings customers back for more.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/individ2.PNG"
                alt=""
                className="img-fluid individualImg1 p-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="individual-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mr-auto">
              <h1 className="find-Plans">
                Find just-right plans for individuals and small teams
              </h1>
              <button className="seeplans-btn mt-5">See our plans</button>
            </div>
          </div>
        </div>
      </section>
      <section className="individualFooter">
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

export default Individuals;
