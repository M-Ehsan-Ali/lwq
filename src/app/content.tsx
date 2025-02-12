import Image from "next/legacy/image";

export const cardsData = [
  {
    imageSrc: "/home/Certificate.svg",
    title: "Mastering LinkedIn for 19 Years",
    description:
      "Guiding you with deep industry expertise on the world’s top professional network",
    differentClassName: "bg-color_0166C8",
  },
  {
    imageSrc: "/home/Communication.svg",
    title: "Powerful Communication",
    description: "Delivering messages that are clear, concise, and impactful",
    differentClassName: "bg-color_174571 lg:mt-24",
  },
  {
    imageSrc: "/home/Goal.svg",
    title: "Effective LinkedIn Strategies",
    description: "Practical solutions that maximize your time and results",
    differentClassName: "bg-color_0166C8",
  },
  {
    imageSrc: "/home/PersonalHotspot.svg",
    title: "Global Network Advantage",
    description:
      "Tap into my extensive international connections across various industries and regions",
    differentClassName: "bg-color_174571 lg:mt-24",
  },
];

export default function Home() {
  return (
    <div id="home">
      <div className="px-4 lg:px-12 text-white">
        <div className="pt-8 md:pt-16">
          <div className="flex justify-center md:hidden">
            <div className="relative w-[160px] h-[160px] overflow-hidden mb-4">
              <Image
                src="/home/quinn-man.jpeg"
                alt="Quinn Man"
                layout="fill"
                objectFit="contain" // Ensures the image covers the circle without distorting
                className="rounded-full bg-[#D3D3D3]"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-color_0166C8 to-color_137EE6 rounded-[16px] overflow-hidden shadow-home_hero_shadow">
            <div className="flex items-stretch">
              {/* Left Content Section */}
              <div className="flex-grow p-4 lg:pl-20 lg:pr-12 lg:py-12">
                <div className="text-[15px] lg:text-[40px] font-bold text-center lg:text-left">
                  I’m Stephen Quinn
                </div>
                <div className="mt-0 lg:mt-3 text-[12px] lg:text-[22px] font-bold text-center lg:text-left">
                  Founder & CEO
                </div>
                <div className="mt-3 lg:mt-5 text-[12px] lg:text-[22px] font-medium text-center lg:text-left">
                  With 27 years in business internationally, and 19 years of
                  utilising in LinkedIn, I bring expertise for International
                  C-Suites & High Performing Entrepreneurs in leveraging the
                  platform.
                </div>
                <div className="flex justify-center lg:justify-start">
                  <div
                    className="mt-6"
                    style={{
                      width: 233,
                      height: 1.5,
                      backgroundColor: "white",
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 pt-4">
                  <div className="col-span-3 lg:col-span-2 flex items-center justify-center lg:justify-start">
                    <div className="text-[12px] lg:text-[16px] text-center lg:text-left">
                      Unlock your potential with Stephen Quinn
                    </div>
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
                    <button className="py-3 px-4 lg:px-5 lg:py-3 rounded-[10px] text-[12px] lg:text-[18px] bg-white text-black font-semibold shadow-home_button_shadow">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="hidden items-stretch md:flex">
                <div className="relative w-[320px]  xl:w-[400px] h-full bg-[#D3D3D3]">
                  <Image
                    src="/home/quinn-man.jpeg"
                    alt="Quinn Man"
                    layout="fill"
                    objectFit="contain"
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative text-white">
        <div className="hidden lg:block absolute top-[20px] right-[60px]">
          <Image
            src={"/home/LinkedIn.svg"}
            layout="intrinsic"
            width={140}
            height={140}
            alt="LinkedIn"
          />
        </div>

        <div className="pt-12 pb-6 lg:pb-0">
          <div className="text-color_174571 text-[16px] font-bold  md:text-[28px] md:font-medium text-center">
            Why Choose Stephen Quinn?
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-center px-4">
          {/* Card 1 */}

          {cardsData?.map((item) => {
            return (
              <div
                key={item.title}
                className={`${item.differentClassName} px-3 py-5 min-w-[245px] max-w-[245px] lg:min-w-[205px] lg:max-w-[205px] xl:min-w-[245px] xl:max-w-[245px] rounded-[10px] min-h-[200px] shadow-home_cards_shadow`}
              >
                <div className="flex justify-center">
                  <Image
                    src={item.imageSrc}
                    layout="intrinsic"
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>
                <div className="text-[17.5px] lg:text-[14px] xl:text-[17.5px] mt-3 text-center">
                  {item.title}
                </div>
                <div className="text-[13px] lg:text-[11px] xl:text-[13px] mt-6 text-center">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-12"></div>
    </div>
  );
}
