"use client";
import "./styles.css";
import Spline from "@splinetool/react-spline";

const Video = () => {
  return (
    <>
      <section className="secion-accelerate">
        <div className="padding-global">
          <div className="container-large bg-gray">
            <div className="accelerate-heading bg-colour-gray">
              <h3
                className="tablet-h2-style slide-in"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                Accelerate your development
                <br />
                with Continue
              </h3>
            </div>
          </div>
        </div>
      </section>
        <div className="section-spline-cards">
          <div className="spline-cards-content">
            <div className="spline-wrapper">
              <div className="w-layout-blockcontainer container-continue w-container">
                {/* <Spline scene="https://prod.spline.design/7mPBaoO1BWp2kDEn/scene.splinecode" /> */}
                <Spline scene="https://prod.spline.design/vnBC-lYF-EkOv3Xr/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
        <div className="accelerate-cards desktop">
          <div className="padding-global">
            <div className="container-large">
              <div className="cards-perform_component is-flex-horizonal">
                <div className="w-layout-grid accelerate-cards-grid">
                  <div className="accelerate-card">
                    <div className="accelerate-card-number-heading">
                      <div className="text-size-regular text-black-040">01</div>
                      <div className="accelerate-card-heading-wrapper">
                        <h3 className="heading-style-h5 txt-black080">
                          Tab to autocomplete
                        </h3>
                        <div className="spacer-8"></div>
                        <p className="text-size-medium text-color-black070">
                          Continue autocompletes single lines or entire sections
                          of code in any programming language as you type
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accelerate-card">
                    <div className="accelerate-card-number-heading">
                      <div className="text-size-regular text-black-040">02</div>
                      <div className="accelerate-card-heading-wrapper">
                        <h3 className="heading-style-h5 txt-black080">
                          Reference and chat
                        </h3>
                        <div className="spacer-8"></div>
                        <p className="text-size-medium text-color-black070">
                          Attach code or other context to ask questions about
                          functions, files, the entire codebase, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accelerate-card">
                    <div className="accelerate-card-number-heading">
                      <div className="text-size-regular text-black-040">03</div>
                      <div className="accelerate-card-heading-wrapper">
                        <h3 className="heading-style-h5 txt-black080">
                          Highlight and instruct
                        </h3>
                        <div className="spacer-8"></div>
                        <p className="text-size-medium text-color-black070">
                          Highlight code sections and press a keyboard shortcut
                          to rewrite code from natural language
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-accelerate bottom"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Video;
