"use client";

export const YearIndicator = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className="text-gray-400 text-xs">
      © {currentYear} Jacob Baginski
    </span>
  );
};
