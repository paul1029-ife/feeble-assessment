import {
  DecorationGroup,
  GhostDecorationGroup,
} from "./components/DecorationGroup";
import HeroSection from "./components/HeroSection";
import { ArrowDown } from "./components/icons/ArrowDown";
import NavBar from "./components/NavBar";
import type { DecorationItem } from "./types";

const TOP_BIRDS: DecorationItem[] = [
  { className: "hidden md:block top-59.75 left-[250.18px]" },
  { className: "hidden md:block top-55.25 right-[400.18px]" },
];

const GHOST_BIRDS: DecorationItem[] = [
  { className: "hidden md:block top-64.5 left-[400.3px]" },
  { className: "hidden md:block top-94.25 right-[343.18px]" },
];

const CLOUDS: DecorationItem[] = [
  {
    src: "/cloud-1.svg",
    className: "w-full md:w-auto bottom-[-90px] left-0 opacity-30",
  },
  {
    src: "/cloud-2.svg",
    className: "w-full md:w-auto bottom-[-30px] opacity-20",
  },
  {
    src: "/cloud-3.svg",
    className: "w-full md:w-auto bottom-0 left-0 opacity-10",
  },
];

const MESSAGES: DecorationItem[] = [
  { src: "/message-1.svg", className: "hidden md:block bottom-10 left-40" },
  { src: "/message-2.svg", className: "hidden md:block bottom-18 left-96" },
  {
    src: "/message-3.svg",
    className: "hidden md:block bottom-14 left-[940px]",
  },
  { src: "/message-4.svg", className: "hidden md:block bottom-10 left-300" },
];

const BackgroundGlow = () => (
  <div className="bg-white w-[471.26px] h-[441.76px] absolute top-[-240.76px] rounded-full -left-80 blur-[120px] pointer-events-none" />
);

function App() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(/hero.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen text-white bg-no-repeat"
    >
      <BackgroundGlow />
      <NavBar />

      <DecorationGroup
        items={TOP_BIRDS}
        defaultSrc="/bird.svg"
        defaultAlt="Flying bird"
        animationClass="animate-bird-enter"
      />

      <img
        src="/message-1.svg"
        alt="Bird flying across"
        className="absolute top-40 left-0 w-10 md:w-auto animate-fly-right opacity-80 pointer-events-none z-10"
      />

      <img
        src="/message-1.svg"
        alt="Bird flying across"
        className="absolute top-64 right-0 w-8 md:w-auto animate-fly-left opacity-80 pointer-events-none z-10"
      />

      <GhostDecorationGroup items={GHOST_BIRDS} />

      <HeroSection />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-lg font-medium text-[#1D2026] tracking-tight">
          Scroll to learn more
        </span>
        <ArrowDown />
      </div>

      <DecorationGroup
        items={CLOUDS}
        defaultAlt="Decorative cloud"
        animationClass="animate-bottom-group"
      />

      <DecorationGroup
        items={MESSAGES}
        defaultAlt="Floating message bubble"
        animationClass="animate-bottom-group"
        delay={350}
      />
    </div>
  );
}

export default App;
