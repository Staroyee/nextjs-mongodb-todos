"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        className={clsx(
          actionButton && "bg-orange-700 rounded-full p-2 text-white",
          "bg-orange-700 px-2 text-white"
        )}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
