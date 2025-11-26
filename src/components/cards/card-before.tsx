import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useEffect, useRef, useState } from "react";

interface CardBeforeInterface {
  children: React.ReactNode;
  icon: React.ReactNode;
  bgcolorBackface: string;
  hasTitle?: string;
  aspectRatio?: string;
  handleInteractionsClick?: () => void;
  sizeIcon?: number;
}

export default function CardBefore({ ...props }: CardBeforeInterface) {
  const { aspectRatio = `1 / 1.3`, sizeIcon = 4 } = props;

  const [isClick, setIsClick] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const svgHeightRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  const handleClickCard = () => {
    if (props.handleInteractionsClick) {
      props.handleInteractionsClick();
    }
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (!svgHeightRef.current) return;

    setHeight(svgHeightRef.current.clientHeight);
  }, [svgHeightRef]);

  return (
    <Grid
      container
      sx={{
        aspectRatio: aspectRatio,
        cursor: `pointer`,
        transition: `.8s`,
        background: ThemeSettings.THEME_COLORS.primary,
      }}
      position={`relative`}
      overflow={`hidden`}
      justifyContent={`center`}
      borderRadius={`15px`}
      paddingY={{
        xs: ThemeSettings.THEME_SPACING.mini,
        sm: ThemeSettings.THEME_SPACING.extraSmall,
        xl: ThemeSettings.THEME_SPACING.verySmall,
      }}
      onClick={handleClickCard}
    >
      <Grid
        container
        xs={11}
        justifyContent={`center`}
        alignContent={`center`}
        gap={{
          xs: ThemeSettings.THEME_SPACING.mini,
          sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
          xl: ThemeSettings.THEME_SPACING.verySmall - 1.5,
        }}
      >
        <Grid container xs={sizeIcon}>
          {props.icon}
        </Grid>
        <Grid
          container
          justifyContent={`center`}
          display={props.hasTitle ? `flex` : `none`}
        >
          <Typography
            textAlign={`center`}
            color={ThemeSettings.THEME_COLORS.white}
            fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.semiBold}
          >
            {props.hasTitle}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        height={`100%`}
        top={isClick ? `calc(0% - ${height}px)` : `100%`}
        sx={{ transition: `1.2s` }}
        width={`100%`}
        position={`absolute`}
        zIndex={1}
      >
        <Grid container position={`relative`} ref={svgHeightRef}>
          <Top color={`#F06501`} />
          <Grid container position={`absolute`} bottom={`-2px`}>
            <Top color={`#F06501`} />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={`center`}
          alignContent={`center`}
          ref={contentRef}
          height={`100%`}
          sx={{
            background: `linear-gradient(to bottom, #FF6B00 -11.21%, #663008 113.58%)`,
          }}
        >
          <Grid
            container
            xs={11}
            justifyContent={`center`}
            gap={{
              xs: ThemeSettings.THEME_SPACING.mini,
              sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
              xl: ThemeSettings.THEME_SPACING.verySmall - 1.5,
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Top({ color }: { color: string }) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 318 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4065_23)">
        <path
          d="M1.48578e-05 17.0235C1.48578e-05 17.0235 21.923 -11.5827 78.5535 7.76622C135.184 27.1152 128.484 64.9788 175.982 37.2148C320.903 -47.4994 300.378 97.6913 389.72 24.048C433.915 -12.3819 450.589 -1.49102 464 17.8659L464 102L0 102L1.48578e-05 17.0235Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4065_23">
          <rect width="318" height="102" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
