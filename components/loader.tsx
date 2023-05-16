"use client";

import { useEffect, useRef } from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface LoaderProps {
  callback: () => void;
}

export function Loader({ callback }: LoaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    isVisible && callback();
  }, [isVisible, callback]);

  return (
    <div ref={ref} className="p-4">
      <span>Loading...</span>
    </div>
  );
}
