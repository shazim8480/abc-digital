import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href: string;
  outlined?: boolean;
  hovered?: boolean;
  customStyle?: string;
}

const buttonPresets = {
  outlined: "ring-primary text-primary ring-1",
  hovered:
    "hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-dark",
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  outlined,
  hovered,
  customStyle,
}) => {
  return (
    <Link legacyBehavior href={href}>
      <a
        id="link"
        className={`px-7 py-3 font-medium rounded-btn text-body ${
          outlined && buttonPresets.outlined
        } ${hovered && buttonPresets.hovered}
         ${customStyle}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
