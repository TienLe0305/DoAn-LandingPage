import Image from "next/image";
import "./styles.css";
const AboutSectionOne = () => {
  return (
    <section id="about">
      <div className="section-how-it-works">
        <div className="padding-global">
          <div className="container-large flex-align-center">
            <div
              className="how-it-works-content slide-in"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="how-it-works-heading-wrapper">
                <div className="subtitle-large text-color-purple text-align-center">
                  How it works
                </div>
                <div className="spacer-20"></div>
                <h2 className="text-align-center width-custom my-0 text-6xl font-medium leading-[1.14] tracking-[-2.4px]">
                  Technologies have been used
                </h2>
              </div>
              <div className="spacer-58"></div>
              <div className="h-i-w-card-wrapper max-width-736 is-relative">
                <div className="how-it-works-card is-gradient-wrapper shadow-cyan-500/50">
                  <Image
                    src="/images/about/bg-gradient.jpg"
                    alt=""
                    width={924}
                    height={200}
                    className="how-it-works-gradient"
                    sizes="(max-width: 991px) 100vw, 848px"
                    quality={100}
                  />
                  <div
                    className="how-it-works-card is-gradient"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="card-img-wrapper"></div>
                    <div className="how-it-works-card-content-wrapper text-center">
                      <h3 className="txt-black-080 ">Extension</h3>
                      <div className="spacer-56"></div>
                      <div className="h-i-w-buttons-wrappers flex flex-wrap items-center justify-center gap-3">
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/react.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">React.js</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/bootstrap.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">Bootstrap</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/css.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">CSS</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/typescript.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">TypeScript</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/chrome.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">
                              Chrome Extension
                            </div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/webpack.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">Webpack</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="how-it-works-card is-gradient-wrapper is-2 shadow-blue-500/50">
                  <div
                    className="how-it-works-card is-gradient is-transparent-none"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="card-img-wrapper"></div>
                    <div className="how-it-works-card-content-wrapper is-center">
                      <div className="div-block-19">
                        <h3 className="txt-black-080">Backend</h3>
                      </div>
                      <div className="spacer-56"></div>
                      <div className="h-i-w-buttons-wrappers flex flex-wrap items-center justify-center gap-3">
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/python.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">Python</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/fastapi.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">fastAPI</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/mongo.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">MongoDB</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/docker.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">Docker</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/chrome.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">
                              Chrome Extension
                            </div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/aws.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">AWS</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/openAI.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">openAI</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/about/bg-gradient.jpg"
                    alt=""
                    width={924}
                    height={200}
                    className="how-it-works-gradient"
                    sizes="(max-width: 991px) 100vw, 848px"
                    quality={100}
                  />
                </div>
                <div className="how-it-works-card is-gradient-wrapper is-3 shadow-indigo-500/50">
                  <div className="how-it-works-card is-gradient is-transparent-none">
                    <div className="card-img-wrapper"></div>
                    <div className="how-it-works-card-content-wrapper">
                      <h3 className="txt-black-080">Landing Page</h3>
                      <div className="spacer-56"></div>
                      <div className="h-i-w-buttons-wrappers flex flex-wrap items-center justify-center gap-3">
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/typescript.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">TypeScript</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/nextjs.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">NextJS</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/tailwindcss.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">TailwindCSS</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/css.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">CSS</div>
                          </div>
                        </div>
                        <div className="h-i-w-button-wrapper">
                          <div className="h-i-w-button flex items-center justify-center gap-1 rounded-xl bg-gray-200 p-2">
                            <Image
                              src="/images/about/eslint.png"
                              alt="Image description"
                              width={24}
                              height={24}
                            />
                            <div className="h-i-w-button-text">ESLint</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/about/bg-gradient.jpg"
                    alt=""
                    width={924}
                    height={200}
                    className="how-it-works-gradient"
                    sizes="(max-width: 991px) 100vw, 848px"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
