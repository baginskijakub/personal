"use client";

import NextImage from "next/image";

interface ImageProps {
  url: string;
  title: string;
  width: number;
  height: number;
  aspectRatio?: string;
}

export const Image = (props: ImageProps) => {
  const { url, title, aspectRatio, width, height } = props;

  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      <p className="px-3 text-sm text-gray-600">{title}</p>

      <div
        style={{
          maxWidth: "100%",
          height: "auto",
          ...aspectRatioStyle,
        }}
        className="w-full border border-gray-200 rounded-lg overflow-hidden"
      >
        <NextImage
          src={url}
          width={width}
          height={height}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            isolation: "isolate",
          }}
          alt={title}
        />
      </div>
    </div>
  );
};
