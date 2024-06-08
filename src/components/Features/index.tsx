import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="transparent">
            <div className="grid min-h-96 grid-cols-3 gap-4">
              <div className="relative flex flex-col justify-between rounded-2xl bg-white p-8 text-left shadow-md shadow-cyan-500/50">
                <div className="margin-bottom margin-small">
                  <div className="subtitle-large text-color-purple">01</div>
                </div>
                <div>
                  <h3 className="mb-2 text-4xl font-medium">
                    Remain in flow while coding
                  </h3>
                  <p className="text-gray-600">
                    by removing the barriers that block productivity when
                    building software
                  </p>
                </div>
                <div className="absolute bottom-auto left-auto right-0 top-0 max-w-[48%]">
                  <Image
                    src="/images/features/feature1.png"
                    alt=""
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative flex flex-col justify-between rounded-2xl bg-white p-8 text-left shadow-md shadow-blue-500/50">
                <div className="margin-bottom margin-small">
                  <div className="subtitle-large text-color-purple">02</div>
                </div>
                <div>
                  <h3 className="mb-2 text-4xl font-medium">
                    Accelerate development
                  </h3>
                  <p className="text-gray-600">
                    with a plug-and-play system that makes it easy to get
                    started and integrates with your entire stack
                  </p>
                </div>
                <div className="absolute bottom-auto left-auto right-0 top-0 max-w-[48%]">
                  <Image
                    src="/images/features/feature2.png"
                    alt=""
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative flex flex-col justify-between rounded-2xl bg-white p-8 text-left shadow-md shadow-indigo-500/50">
                <div className="margin-bottom margin-small">
                  <div className="subtitle-large text-color-purple">03</div>
                </div>
                <div>
                  <h3 className="mb-2 text-4xl font-medium">
                    Become a leader in AI
                  </h3>
                  <p className="text-gray-600">
                    by setting up your code assistant to evolve as new
                    capabilities emerge
                  </p>
                </div>
                <div className="absolute bottom-auto left-auto right-0 top-0 max-w-[48%]">
                  <Image
                    src="/images/features/feature3.png"
                    alt=""
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
