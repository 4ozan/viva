"use client";
import React from "react";

interface HeaderBaseProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

export function HeaderBase({ leftContent, rightContent, className }: HeaderBaseProps) {
  return (
    <header className={`flex items-center justify-between w-full h-16 ${className || ""}`}>
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </header>
  );
} 