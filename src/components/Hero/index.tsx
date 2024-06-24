import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px]  md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <Spline
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]"
            scene="https://prod.spline.design/ebDHLKPZ9wIE1dlS/scene.splinecode"
          />
          <div className="relative z-[999] -mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="tracking-[1px] mb-5 bg-gradient-to-b from-gray-900 to-gray-400 pb-1 text-3xl text-7xl font-bold font-medium leading-[1.14] leading-tight tracking-[-2.88px] dark:from-gray-400 dark:to-gray-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Introducing nebulAssistant - Your Personal Chatbot Assistant
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-dark  sm:text-lg md:text-xl">
                  nebulAssistant is a free and versatile chatbot assistant,
                  designed as a Chrome extension, that can be integrated into
                  any website. Its built with React.js, Bootstrap for the Chrome
                  extension, and FastAPI for the backend, providing a seamless
                  and user-friendly experience for all your website visitors.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://drive.google.com/drive/u/0/folders/1FqZT0L9bMxPjcUvvw5kRZB5OTzyBSZLT"
                    className="rounded-2xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    <div className="mr-2 inline-block">
                      <Image
                        src="/images/hero/chrome.png"
                        alt="Image description"
                        width={24}
                        height={24}
                      />
                    </div>
                    Try it out
                  </Link>
                  <Link
                    href="https://github.com/TienLe0305/DoAn-FE"
                    className="inline-block rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out"
                  >
                    <div className="mr-2 inline-block">
                      <Image
                        src="/images/hero/github.png"
                        alt="Image description"
                        width={24}
                        height={24}
                      />
                    </div>
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
