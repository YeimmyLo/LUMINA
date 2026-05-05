import type { SVGProps } from "react";
import type { BenefitIconName, CommitmentIconName } from "@/data/home";

type BaseSvgProps = SVGProps<SVGSVGElement>;

const benefitProps: BaseSvgProps = {
  className: "h-8 w-8",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.8,
  viewBox: "0 0 32 32",
  "aria-hidden": true
};

const commitmentProps: BaseSvgProps = {
  className: "mx-auto mb-6 h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.7,
  viewBox: "0 0 48 48",
  "aria-hidden": true
};

export function BenefitSvgIcon({ name }: { name: BenefitIconName }) {
  switch (name) {
    case "water_drop":
      return (
        <svg {...benefitProps}>
          <path d="M16 3.5c4.9 5.7 8 10 8 15a8 8 0 0 1-16 0c0-5 3.1-9.3 8-15Z" />
          <path d="M12.3 20.3c.8 2 2.1 3 4.1 3.2" />
        </svg>
      );
    case "spa":
      return (
        <svg {...benefitProps}>
          <path d="M16 25c0-6.7-3.5-11.1-10.5-13.3C6.3 18.7 9.8 23.1 16 25Z" />
          <path d="M16 25c0-6.7 3.5-11.1 10.5-13.3C25.7 18.7 22.2 23.1 16 25Z" />
          <path d="M16 25c3.2-5.5 3.2-10.8 0-16-3.2 5.2-3.2 10.5 0 16Z" />
        </svg>
      );
    case "auto_awesome":
      return (
        <svg {...benefitProps}>
          <path d="M16 3.5l2.3 7.2L25.5 13l-7.2 2.3L16 22.5l-2.3-7.2L6.5 13l7.2-2.3L16 3.5Z" />
          <path d="M24 22l.9 2.7 2.6.8-2.6.9L24 29l-.9-2.6-2.6-.9 2.6-.8L24 22Z" />
          <path d="M7.5 20l.6 1.8 1.9.7-1.9.6-.6 1.9-.7-1.9-1.8-.6 1.8-.7.7-1.8Z" />
        </svg>
      );
  }
}

export function CommitmentSvgIcon({ name }: { name: CommitmentIconName }) {
  switch (name) {
    case "package_2":
      return (
        <svg {...commitmentProps}>
          <path d="M8 16.5 24 8l16 8.5-16 8.5L8 16.5Z" />
          <path d="M8 16.5v15L24 40l16-8.5v-15" />
          <path d="M24 25v15" />
          <path d="m15.5 12 16.2 8.6" />
        </svg>
      );
    case "cruelty_free":
      return (
        <svg {...commitmentProps}>
          <path d="M17 23c-3.2 0-5.8 2.8-5.8 6.2 0 5 4.3 8.8 12.8 8.8s12.8-3.8 12.8-8.8c0-3.4-2.6-6.2-5.8-6.2" />
          <path d="M17 23c-3.4-5.2-3.2-9.8.5-13.8 4.4 3.3 6.4 7.8 6.5 13.8" />
          <path d="M31 23c3.4-5.2 3.2-9.8-.5-13.8-4.4 3.3-6.4 7.8-6.5 13.8" />
          <path d="M19.2 29h.1" />
          <path d="M28.7 29h.1" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...commitmentProps}>
          <path d="M18 19.5 23 15c2-1.8 4.3-1.8 6.3 0l2.7 2.4" />
          <path d="m16 28 5.5 5.5c1 1 2.7 1 3.7 0l7.3-7.3" />
          <path d="M6 22l7-7 7 7-7 7-7-7Z" />
          <path d="m28 22 7-7 7 7-7 7-7-7Z" />
          <path d="m13 29 4.4 4.4" />
        </svg>
      );
    case "water_drop":
      return (
        <svg {...commitmentProps}>
          <path d="M24 6c5.5 6.5 9.5 12 9.5 19A9.5 9.5 0 0 1 14.5 25c0-7 4-12.5 9.5-19Z" />
          <path d="M20 27c.9 2.4 2.7 3.7 5.5 4" />
          <path d="M35 10c3.8 2.3 5.7 5.8 5.7 10.5" />
        </svg>
      );
  }
}
