"use client";

import Button from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AppButton({
  href,
  children,
  variant = "text",
  endIcon,
  sx,
}: {
  href: string;
  children: ReactNode;
  variant?: "text" | "outlined" | "contained";
  endIcon?: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Button component={Link} href={href} variant={variant} endIcon={endIcon} sx={sx}>
      {children}
    </Button>
  );
}
