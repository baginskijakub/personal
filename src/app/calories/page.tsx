import { ArrowUpLeft, PlusIcon } from "lucide-react";
import Link from "next/link";
import { mockEntries } from "./utils";
import { Entry, Overview } from "./_components";
import React from "react";

export default function Page() {
  return (
    <div className="mx-auto my-6 max-w-[640px] flex flex-col gap-8">
      <div className="px-3 flex flex-col gap-3">
        <Link
          className="group inline-flex items-center gap-[2px] text-gray-500 cursor-pointer"
          href="/"
        >
          <ArrowUpLeft
            size={16}
            className="transform transition-transform duration-200 translate-x-[1px] translate-y-[0px] group-hover:translate-x-[-1px] group-hover:translate-y-[-2px]"
          />
          Home
        </Link>

        <div className="flex w-full justify-between items-center ">
          <h1 className="font-semibold text-4xl">Calories</h1>

          <button className="font-medium text-md cursor-pointer flex items-center gap-1">
            Add meal
            <PlusIcon className="text-gray-600" size={18} />
          </button>
        </div>

        <Overview entry={mockEntries[0]} />

        <div className="flex flex-col my-6 gap-3">
          {mockEntries.map((e, idx) => (
            <React.Fragment key={idx}>
              <Entry entry={e} />
              {idx !== mockEntries.length - 1 && (
                <span className="h-[0.5px] w-full bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
