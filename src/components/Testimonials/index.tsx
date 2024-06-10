import { Testimonial } from "@/types/testimonial";
import Spline from "@splinetool/react-spline";
import "./styles.css";

const Testimonials = () => {
  return (
    <section>
      <div className="roll-out-continue-content-wrapper">
        <div className="padding-global">
          <div className="container-large is-grid">
            <div className="roll-out-continue-content">
              <div
                className="roll-out-stroke slide-in"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="roll-out-content">
                  <div className="roll-out-content-left">
                    <div className="roll-out-heading-wrapper">
                      <h3>
                        Launch Nebula and share it with your friends and family
                      </h3>
                      <div className="spacer-21"></div>
                      <div className="text-size-medium text-color-black070">
                        Discover how Nebula can revolutionize your web
                        experience by providing a seamless, integrated chat bot
                        for all your queries and data analysis needs. Enhance
                        your productivity and web usage with this versatile
                        virtual assistant, and see the transformative impact it
                        can have on your everyday online activities.
                      </div>
                    </div>
                    <div className="spacer-21"></div>
                  </div>
                </div>
                <div className="blob-wrapper is-home">
                  <div className="blob is-home">
                    <Spline
                      scene="https://prod.spline.design/H4tTOmKffGoOUJYB/scene.splinecode"
                      style={{
                        width: "800px !important",
                        height: "800px !important",
                      }}
                    />
                  </div>
                  <div className="shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
