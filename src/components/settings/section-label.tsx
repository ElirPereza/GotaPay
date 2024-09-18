import React from "react";

type SectionProps = {
  label: string;
  message: string;
};

export const Section = ({ label, message }: SectionProps) => {
  return (
    <div>
      <p className="dark:text-white text-lg text-iridium font-bold">{label}</p>
      <p className="text-sm font-light">{message}</p>
    </div>
  );
};
