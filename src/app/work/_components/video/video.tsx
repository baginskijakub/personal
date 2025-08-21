"use client";

import React, { useRef, useState, useEffect } from "react";

interface VideoProps {
  url: string;
  title: string;
  aspectRatio?: string;
  placeholderColor?: string;
}

export const Video = (props: VideoProps) => {
  const { url, title, aspectRatio, placeholderColor } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 100px 0px",
      },
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

  return (
    <div ref={containerRef} className="flex flex-col gap-1 overflow-hidden">
      <p className="px-3 text-sm text-gray-600">{title}</p>

      <div
        style={{
          maxWidth: "100%",
          height: "auto",
          backgroundColor: placeholderColor || "#F3F4F6",
          ...aspectRatioStyle,
        }}
        className="w-full border border-gray-200 rounded-lg overflow-hidden"
      >
        <video
          ref={videoRef}
          src={url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            isolation: "isolate",
          }}
          className=""
          playsInline
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};
