import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Links = () => {
  const arrowClasses = `
    inline-flex
    text-gray-400
    transform
    transition-all duration-200 ease-in-out
    opacity-0 scale-90
    translate-x-[-1px] translate-y-[1px]
    group-hover:opacity-100 group-hover:scale-100
    group-hover:translate-x-[1px] group-hover:translate-y-[-1px]
  `;

  return (
    <React.Fragment>
      <a
        className="group text-body text-gray-500 block mb-2"
        href="https://x.com/baginskijakub11"
        target="_blank"
        rel="noopener noreferrer"
      >
        x.com/<b className="font-medium text-gray-800">baginskijakub11</b>
        <ArrowUpRight size={16} className={arrowClasses} />
      </a>

      <a
        className="group text-body text-gray-500 block mb-2"
        href="https://github.com/baginskijakub"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/
        <b className="font-medium text-gray-800">baginskijakub</b>
        <ArrowUpRight size={16} className={arrowClasses} />
      </a>

      {/* Mailto Link */}
      <a
        className="group text-body text-gray-500 block" // Added 'block'
        href="mailto:baginskijakub@icloud.com"
      >
        mailto:
        <b className="font-medium text-gray-800">baginskijakub@icloud.com</b>
        <ArrowUpRight size={16} className={arrowClasses} />
      </a>
    </React.Fragment>
  );
};
