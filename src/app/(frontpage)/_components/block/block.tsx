import { PropsWithChildren } from "react";
import { Arrow } from "./arrow";

const Root = (props: PropsWithChildren) => {
  return <div className="-ml-12 w-full flex gap-5">{props.children}</div>;
};

const Side = (props: { children: string }) => {
  return (
    <div className="flex gap-1 py-1">
      <div className="w-4 text-[10px] text-gray-400 font-mono tracking-widest vertical-text text-center">
        {props.children.toUpperCase().replaceAll("O", "0")}
      </div>

      <div className="flex flex-col items-center justify-center h-full text-gray-300">
        <Arrow />
        <span className="bg-gray-300 h-full w-[1px] -my-[1.75px]" />
        <Arrow className="rotate-180" />
      </div>
    </div>
  );
};

const Content = (props: PropsWithChildren) => {
  return (
    <div className="w-full -mr-12 text-body flex flex-col gap-2">
      {props.children}
    </div>
  );
};

export const Block = {
  Root,
  Side,
  Content,
};
