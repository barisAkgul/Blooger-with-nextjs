import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="pt-40 pb-40" id="home" aria-label="home">
      <div className="container gap-16 items-center max-w-screen-lg">
        <div className="hero-content">
          <p className="text-lg font-bold">Hello Everyone!</p>

          <h1 className="mt-10 mb-10 text-4xl md:text-6xl font-extrabold text-columbia-blue">
            Welcome to{" "}
            <span className="text-transparent-background-clip ">Blooger</span>
          </h1>

          <p className="mb-12">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="input-wrapper max-w-[400px]">
            <input
              type="email"
              name="email_address"
              placeholder="Type your email address"
              required
              className="input-field"
              autoComplete="off"
            />

            <button className="btn btn-primary">
              <span className="span">Subscribe</span>

              {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
            </button>
          </div>
        </div>

        <div className="relative max-w-[400px] ml-auto">
          <img
            src="./assets/images/pattern-2.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-1"
          />

          <img
            src="./assets/images/pattern-3.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-2"
          />
        </div>

        <img
          src="./assets/images/shadow-1.svg"
          width="500"
          height="800"
          alt=""
          className="hero-bg hero-bg-1 hidden md:block"
        />

        <img
          src="./assets/images/shadow-2.svg"
          width="500"
          height="500"
          alt=""
          className="hero-bg hero-bg-2 hidden md:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
