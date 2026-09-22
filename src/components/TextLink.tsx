"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";
import type { ReactNode } from "react";

export default function TextLink({
  href,
  children,
  sx,
}: {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box component={Link} href={href} sx={sx}>
      {children}
    </Box>
  );
}
