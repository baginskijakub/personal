"use client";

import { motion, Variants } from "framer-motion";
import { CheckIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

export interface Meal {
  title: string;
  calories: number;
  protein: number;
}
export interface Entry {
  date: string;
  calories: number;
  protein: number;
  meals: Meal[];
}

interface Props {
  entry: Entry;
}

export const Entry = (props: Props) => {
  const { date, calories, protein, meals } = props.entry;

  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div onClick={onToggle} className="flex flex-col overflow-hidden">
      <div className="flex gap-2 items-center">
        <p className="flex-1 font-medium">{date}</p>

        <p className="text-gray-400 text-sm font-mono flex items-center gap-2">
          {calories}kcal
          <span className="h-4 w-[0.5px] bg-gray-200" />
          {protein}g
        </p>

        <button className="w-8 flex justify-end text-gray-500">
          <ChevronDown size={20} />
        </button>
      </div>

      <motion.div
        variants={states}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <div className="p-2 pl-0 text-gray-600">
          {meals.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="flex-1 text-ellipsis text-sm">{m.title}</span>

              <p className="mr-8 text-gray-400 text-sm font-mono flex items-center gap-4 ">
                {m.calories}kcal
                <span className="h-4 w-[0.5px] bg-gray-200" />
                {m.protein}g
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const states: Variants = {
  open: {
    height: "auto",
    opacity: 1,
  },
  closed: {
    height: "0px",
    opacity: 0,
  },
};
