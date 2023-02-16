import React from "react";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="easySA">
                Easy <br />
                scheduling <span style={{ color: "blue" }}>ahead</span>
              </h1>
              <p className="h5 mt-4">
                Calendly is your hub for scheduling meetings professionally and
                efficiently, eliminating the hassle of back-and-forth emails so
                you can get back to work.
              </p>
              <form>
                <input
                  type="email"
                  name="email"
                  className="emailField"
                  placeholder="Enter your Email"
                />
                <input type="submit" value="Sign Up" className="submitBtn" />
              </form>
              <p className="text-center pt-2">
                Create your free account. No credit card required.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/calendly-header.jpg"
                alt=""
                className="homeImg p-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <p className="users">
                Simplified scheduling for more than
                <span style={{ color: "blue" }}>10,000,000</span> users
                worldwide
              </p>
            </div>
            <div className="row mx-auto companies">
              <div className="col">
                <div>
                  <img src="/img/Compass.svg" alt="" />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="/img/drop.svg" alt="" />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="/img/ebay.svg" alt="" />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="/img/Lazboy.svg" alt="" />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="/img/twilio.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-3 mx-auto">
              <div className="line"></div>
              <span className="stepsBlue">1.</span>
              <h3>Create simple rules</h3>
              <p>
                Let Calendly know your availability preferences and it'll do the
                work for you.
              </p>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="line"></div>
              <span className="stepsBlue">2.</span>
              <h3>Share your link</h3>
              <p>Send guests your Calendly link or embed it on your website.</p>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="line"></div>
              <span className="stepsBlue">3.</span>
              <h3>Get booked</h3>
              <p>They pick a time and the event is added to your calendar.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
