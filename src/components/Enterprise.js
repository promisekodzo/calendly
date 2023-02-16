import React from "react";

function Enterprise() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto d-flex flex-column">
            <h1 className="easySA">
              <span style={{ color: "blue" }}>Way more</span>than a scheduling
              link
            </h1>
            <p className="h5 mt-4">
              Standardize on the #1 scheduling platform and deliver the power of
              Calendly across your entire organization.
            </p>
            <button className="sales-contact-btn2 mt-5 mx-auto">
              Contact sales
            </button>
          </div>
        </div>
      </div>
      <section className="enterprise-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mx-auto">
              <h2>
                Trusted by more than 50,000 of the world’s leading organizations
              </h2>
            </div>
          </div>
          <div className="row mx-auto enterprise-companies">
            <div className="col">
              <div>
                <img src="/img/drop2.svg" alt="" />
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/img/ebay2.svg" alt="" />
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/img/visa2.svg" alt="" />
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/img/lyft2.svg" alt="" />
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/img/l'oreal2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solutions-section">
        <div className="container">
          <div className="row myCardsent">
            <div className="col-md-4">
              <div className="solutions-cardent">
                <h5>Sales</h5>
                <img
                  src="/img/Sales__1_.svg"
                  alt="Sales"
                  className="img-fluid"
                />
                <br />

                <p className="card-text">
                  Convert more leads and prospects into meetings and revenue.
                  Easily book demos and customer calls without the back and
                  forth.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="solutions-cardent">
                <h5>Customer Success</h5>
                <img
                  src="/img/Customer_Success.svg"
                  alt="Customer Success"
                  className="img-fluid"
                />
                <br />

                <p className="card-text">
                  Deliver better support interactions and customer
                  consultations. Stay connected with automated reminders and
                  follow-ups.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="solutions-cardent">
                <h5>Recruiting</h5>
                <img
                  src="/img/Recruiting__1_.svg"
                  alt="Recruiting"
                  className="img-fluid"
                />
                <br />
                <p className="card-text">
                  Fill your candidate pipeline and book more interviews and
                  recruiter screens with easy, standardized scheduling.
                </p>
              </div>
            </div>
            <button className="sales-contact-btn2 mt-5">Learn more</button>
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

export default Enterprise;
