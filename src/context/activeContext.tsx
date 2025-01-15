"use client";
import { SectionName } from "@/types/type";
import React, { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const myActiveContext = createContext<ActiveSectionType | null>(null);
export default function ActiveContextProvider({ children }: ProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // const {ref, inView} useInView();

  // if(inView){
  //   setActive()
  // }

  return (
    <myActiveContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </myActiveContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(myActiveContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveContext"
    );
  }
  return context;
}
