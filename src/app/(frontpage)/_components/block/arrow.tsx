import { HTMLAttributes } from "react";

export const Arrow = (props: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="7"
      height="4"
      viewBox="0 0 6 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3L2.82322 1.17678C2.92085 1.07915 3.07915 1.07915 3.17678 1.17678L5 3"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
