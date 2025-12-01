import { Grid } from "@mui/material";
import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MainGrid: React.FC<GridProps> = ({ children, className = "", style }) => {
  return (
    <Grid
      container
      className={className} style={style}>
      {children}
    </Grid>
  );
};

export default MainGrid;
