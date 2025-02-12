import Image from "next/legacy/image";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="text-color_E3F1FF bg-color_003262">
      <div className="pt-3 pb-3 md:pt-12 px-4 md:pl-4 md:pr-12">
        <div className="flex flex-col gap-y-8 md:gap-y-1 items-center md:grid md:grid-cols-3">
          <div className="order-1">
            <div className="flex justify-center md:block">
              <Link href={"/"}>
                <div className="md:pl-4">
                  <div>
                    <Image
                      src="/logo-dark.svg"
                      height={80}
                      width={150}
                      alt="Quinn"
                    />
                  </div>

                  {/* <div>
            <span className="">LinkedIn with</span>
            <span> </span>

            <span className="text-color_0166C8">Quinn</span>
          </div> */}
                </div>
              </Link>
            </div>
            <div className="mt-1">
              <div className="max-w-[300px] text-[12px] text-color_E3F1FF text-center">
                With my global business expertise, I help you make meaningful
                connections and optimise your LinkedIn strategy for better
                results
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col order-3 md:order-2">
            <div className=" font-bold text-[16px] lg:text-[18px]">
              Wish to discuss further?
            </div>
            <div className="mt-6">
              <button className="py-3 px-6 lg:px-5 lg:py-3 min-w-[140px] rounded-[10px] text-[12px] lg:text-[18px] bg-color_0166C8 font-semibold shadow-home_button_shadow">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex justify-end order-2 md:order-3">
            <div className=" max-w-[300px]">
              <div className="bg-color_0166C8 rounded-[10px] py-7 px-5 ">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-[16px] ">
                    <div>StephenQuinn</div>
                    <div>@stephen</div>
                  </div>
                  <div className="">
                    <img
                      src="/Footer/twitterX.svg"
                      className="w-[28px]"
                      alt="Twitter"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className=" text-center text-[12px]">
                    Get continuous LinkedIn support to optimise your profile,
                    grow your network, and achieve your goals, anytime
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-4">
            <div className="flex md:pl-8">
              <img
                src="/Footer/footer_tiktok.svg"
                className="w-[52px] h-[49px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12">
        <div className="border-t border-white">
          <div className="py-3 md:py-5 flex justify-between text-[10px] md:text-[12px] font-medium">
            <div>@2024 Stephen Inc. All right reserved</div>
            <div>Terms & Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}
