// Context to allow heading title and subtitle to be set on each page
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HeadingData {
  heading: string;
  subHeading: string;
}

interface HeadingContextType {
  headingData: HeadingData;
  setHeadingData: (data: HeadingData) => void;
}

const HeadingContext = createContext<HeadingContextType | undefined>(undefined);

export const HeadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headingData, setHeadingData] = useState<HeadingData>({
    heading: "Default Heading",
    subHeading: "Default Subheading",
  });

  return (
    <HeadingContext.Provider value={{ headingData, setHeadingData }}>
      {children}
    </HeadingContext.Provider>
  );
};

// Custom hook to use heading data
export const useHeadingData = (): HeadingContextType => {
  const context = useContext(HeadingContext);
  if (!context) {
    throw new Error("useHeadingData must be used within a HeadingProvider");
  }
  return context;
};
