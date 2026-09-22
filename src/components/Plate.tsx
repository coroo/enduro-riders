import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { color } from "@/theme/tokens";

const corners = [
  { top: 10, left: 10 },
  { top: 10, right: 10 },
  { bottom: 10, left: 10 },
  { bottom: 10, right: 10 },
] as const;

export default function Plate({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={[
        {
          position: "relative",
          background: `linear-gradient(180deg, rgba(255,244,220,0.04), rgba(0,0,0,0.18)), ${color.plate}`,
          border: `1px solid ${color.line}`,
          boxShadow: "0 24px 50px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,236,200,0.05)",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {corners.map((corner, index) => (
        <Box
          key={index}
          aria-hidden
          sx={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            border: `1px solid ${color.gold}`,
            bgcolor: "#2a241c",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
            ...corner,
          }}
        />
      ))}
      {children}
    </Box>
  );
}
