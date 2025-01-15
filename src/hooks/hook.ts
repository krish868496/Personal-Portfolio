"use client";

import { useActiveSectionContext } from "@/context/activeContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/types/type";

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({threshold: 0.5});
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);
  return {
    ref,
  };
}
