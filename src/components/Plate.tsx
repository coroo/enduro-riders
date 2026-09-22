import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { color } from "@/theme/tokens";

export default function Plate({ children, sx }: { children: ReactNode; sx?: SxProps<Theme> }) {
  return (
    <Box
      sx={[
        {
          background: color.paper,
          border: `1px solid ${color.line}`,
          borderRadius: 3,
          boxShadow: "0 16px 40px rgba(28, 25, 23, 0.05)",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
