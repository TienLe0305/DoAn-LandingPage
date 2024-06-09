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
                Increase work productivity
                <br />
                with nebulAssistant
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="section-spline-cards">
        <div className="spline-cards-content">
          <div className="spline-wrapper">
            <div className="w-layout-blockcontainer container-continue w-container">
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
                        Create content quickly
                      </h3>
                      <div className="spacer-8"></div>
                      <p className="text-size-medium text-color-black070">
                        With available options, you can easily create contents
                        on different platforms and different languages ​​quickly
                        and conveniently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accelerate-card">
                  <div className="accelerate-card-number-heading">
                    <div className="text-size-regular text-black-040">02</div>
                    <div className="accelerate-card-heading-wrapper">
                      <h3 className="heading-style-h5 txt-black080">
                        Quick Q&A
                      </h3>
                      <div className="spacer-8"></div>
                      <p className="text-size-medium text-color-black070">
                        With topics, prompts available for each topic and
                        language options available, you can quickly ask and
                        answer questions without having to waste time entering
                        additional prompts or creating context.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accelerate-card">
                  <div className="accelerate-card-number-heading">
                    <div className="text-size-regular text-black-040">03</div>
                    <div className="accelerate-card-heading-wrapper">
                      <h3 className="heading-style-h5 txt-black080">
                        Analyze and synthesize information quickly
                      </h3>
                      <div className="spacer-8"></div>
                      <p className="text-size-medium text-color-black070">
                        You can upload files, images and get the url of the
                        current website to get summarized and analyzed
                        information from them
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accelerate-card">
                  <div className="accelerate-card-number-heading">
                    <div className="text-size-regular text-black-040">04</div>
                    <div className="accelerate-card-heading-wrapper">
                      <h3 className="heading-style-h5 txt-black080">
                        Trusted virtual assistant
                      </h3>
                      <div className="spacer-8"></div>
                      <p className="text-size-medium text-color-black070">
                        Design and configuration can be integrated on any
                        website, helping nebula appear immediately whenever you
                        need it
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
