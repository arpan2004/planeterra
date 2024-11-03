const Services = () => {
  return (
    <div className="flex-none w-full h-auto flex items-center justify-center bg-neutral-200">
      <div className="w-full flex p-5 md:p-20 relative items-center flex-col">
        {" "}
        {/* Adjusted padding for smaller screens */}
        <div className="w-full max-w-[1400px]">
          <div className="gap-[16px] md:gap-[24px] flex transform scale-100 rotate-1 skew-x-0 skew-y-0 self-stretch transition-all duration-300 items-center justify-between bg-slate-500">
            <div className="w-full flex transform scale-100 -rotate-2 skew-x-0 skew-y-0 items-center justify-between bg-neutral-400 hover:bg-black hover:text-white hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-start gap-[16px] md:gap-[24px] w-full transform translate-x-0 translate-y-0 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-[2deg] skew-x-0 skew-y-0 transition-all duration-300 pt-[48px] md:pt-[96px] pl-[32px] md:pl-[64px] pr-[32px] md:pr-[64px] pb-[48px] md:pb-[96px] rounded-md">
                {/* Adjusted padding for smaller screens */}
                <span className="text-[28px] md:text-[35px] font-semibold leading-[1.5] transform rotate-[0.5deg]">
                  {/* Adjusted font size for smaller screens */}
                  Elevate Your Business with Our Drone Services
                </span>
                <p className="text-[16px] md:text-[18px] leading-[1.5] transform rotate-[0.5deg]">
                  {" "}
                  {/* Adjusted font size for smaller screens */}
                  Capture stunning aerial footage and images with our
                  professional drone services. Whether you need aerial
                  photography, videography, mapping, or inspections, we have you
                  covered.
                </p>
              </div>
              <div className="flex flex-1 items-start justify-end gap-[16px] md:gap-[24px] pr-[16px] md:pr-[32px] transform rotate-[0.5deg]">
                <button className="flex items-center justify-center gap-6 fill-red-500 text-white cursor-pointer transition-all duration-300 font-bold pt-4 md:pt-6 whitespace-nowrap border border-red-500 pl-4 md:pl-6 pr-4 md:pr-6 pb-4 md:pb-6 bg-red-500 hover:bg-slate-600 hover:border-slate-600">
                  {" "}
                  {/* Adjusted padding for smaller screens */}
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;