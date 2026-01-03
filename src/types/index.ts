export interface DecorationItem {
  className: string;
  src?: string;
  alt?: string;
}

export interface DecorationGroupProps {
  items: DecorationItem[];
  defaultSrc?: string;
  defaultAlt?: string;
  animationClass?: string;
  delay?: number;
}
