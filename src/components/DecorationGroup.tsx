import type { DecorationGroupProps } from "../types";

export const DecorationGroup = ({
  items,
  defaultSrc,
  defaultAlt = "",
  animationClass = "",
  delay = 0,
}: DecorationGroupProps) => (
  <>
    {items.map((item, index) => {
      const src = item.src || defaultSrc;
      if (!src) return null;

      return (
        <div
          key={index}
          className={animationClass}
          style={{
            animationDelay: `${delay}ms`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <img
            src={src}
            alt={item.alt || defaultAlt}
            className={`absolute ${item.className}`}
          />
        </div>
      );
    })}
  </>
);

export const GhostDecorationGroup = ({
  items,
  defaultSrc = "/bird.svg",
  defaultAlt = "Flying bird",
}: Omit<DecorationGroupProps, "animationClass" | "delay">) => (
  <>
    {items.map((item, index) => (
      <div key={`ghost-wrapper-${index}`}>
        <img
          src={item.src || defaultSrc}
          alt={item.alt || defaultAlt}
          className={`absolute ${item.className}`}
        />
        <img
          src={item.src || defaultSrc}
          alt=""
          aria-hidden="true"
          className={`absolute ${item.className} animate-ghost-merge opacity-0`}
        />
      </div>
    ))}
  </>
);
