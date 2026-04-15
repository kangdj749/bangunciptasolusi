"use client";

import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  withDivider?: boolean;
}

export default function SectionWrapper({
  children,
  withDivider = true,
}: SectionWrapperProps) {
  return (
    <>
      <div>{children}</div>

      {withDivider && (
        <div className="py-2">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--color-secondary))] to-transparent opacity-50" />
        </div>
      )}
    </>
  );
}