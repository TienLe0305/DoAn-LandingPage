import Link from "next/link";
import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <Spline
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]"
            scene="https://prod.spline.design/ebDHLKPZ9wIE1dlS/scene.splinecode"
          />
          <div className="relative z-[999] -mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 bg-gradient-to-b from-gray-900 to-gray-400 text-3xl font-bold leading-tight dark:from-gray-400 dark:to-gray-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight tracking-[-2.88px] text-7xl font-medium leading-[1.14] pb-1">
                  Introducing nebulAssistant - Your Personal Chatbot Assistant
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-dark dark:text-white sm:text-lg md:text-xl">
                  nebulAssistant is a free and versatile chatbot assistant,
                  designed as a Chrome extension, that can be integrated into
                  any website. Its built with React.js, Bootstrap for the Chrome
                  extension, and FastAPI for the backend, providing a seamless
                  and user-friendly experience for all your website visitors.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-2xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/TienLe0305/DoAn-FE"
                    className="inline-block rounded-2xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:text-white"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
