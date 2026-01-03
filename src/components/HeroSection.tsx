const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 absolute top-38.25 px-4 md:px-0">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="bg-white px-2 pt-1 pb-1.25 rounded-[200px] flex items-center gap-2 shadow-[0_1px_4px_0_rgba(12,12,13,0.05)]">
          <img src="/hamburger.svg" alt="Hamburger Icon" />
          <span className="text-[#006FE8] font-semibold text-sm tracking-wide">
            #1 iMessage Automation Tool
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1D2026] text-center leading-[1.1] tracking-tight max-w-5xl">
          <span className="text-[#007AFF]">iMessage</span> Automation{" "}
          <br className="hidden md:block" />
          for Teams and AI <br className="hidden md:block" /> Workflows.
        </h1>

        <p className="text-black text-base md:text-lg text-center max-w-3xl leading-[130%] font-normal">
          Coup lets you, your team, or AI workflows send iMessages directly from
          <br className="hidden md:block" />
          your phone number, running securely on your Mac or Mac Mini.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button className="bg-[#007AFF]  text-white text-lg font-medium py-3 px-5 rounded-full w-full sm:w-auto">
          Get Started
        </button>

        <button className="bg-transparent border-[#6C788F] border-[0.75px] text-[#1D2026] text-lg font-medium px-5 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
          <div className="flex gap-3 w-full items-center justify-center sm:justify-start">
            <img src="/apple.svg" alt="Apple Logo" />
            <div className="w-0.5 h-4 bg-[#6C788F]" />
            Download the Mac app
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
