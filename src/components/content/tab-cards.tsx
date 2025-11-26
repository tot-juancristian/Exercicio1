import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useState } from "react";

interface ClickTabCardsProps {
  elements: {
    tabTitle?: string;
    tabCard: React.ReactNode;
  }[];
  bgColorTab?: string;
  bgColorTabNotClicked?: string;
  tabLateral?: boolean;
  borderColor?: string;
}

export function TabCards({ ...props }: ClickTabCardsProps) {
  const tabCardsArray = props.elements.map((_, index) =>
    index === 0 ? true : false
  );

  const [isClickTab, setIsClickTab] = useState(tabCardsArray);

  const handleCheck = (index: number) => {
    setIsClickTab((element) =>
      element.map((_, i) => (i === index ? true : false))
    );
  };

  return (
    <Grid container>
      <Grid
        container
        gap={{
          xs: ThemeSettings.THEME_SPACING.mini,
          sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
          xl: ThemeSettings.THEME_SPACING.verySmall - 1.5,
        }}
      >
        {props.elements.map((item, index) => (
          <Grid
            container
            key={index}
            paddingY={{
              xs: ThemeSettings.THEME_SPACING.mini,
              sm: ThemeSettings.THEME_SPACING.extraSmall,
            }}
            justifyContent={`center`}
            xs
            onClick={() => handleCheck(index)}
            sx={{
              transition: `.3s`,
              cursor: `pointer`,
              background: !isClickTab[index]
                ? props.bgColorTabNotClicked
                : props.bgColorTab,
            }}
            borderRadius={{
              xs: `7px 7px 0 0`,
              sm: `15px 15px 0 0`,
            }}
            borderTop={{
              xs: `1px solid ${props.borderColor}`,
              sm: `3px solid ${props.borderColor}`,
            }}
            borderRight={{
              xs: `1px solid ${props.borderColor}`,
              sm: `3px solid ${props.borderColor}`,
            }}
            borderLeft={{
              xs: `1px solid ${props.borderColor}`,
              sm: `3px solid ${props.borderColor}`,
            }}
          >
            <Typography component={`strong`}>{item.tabTitle}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        paddingY={{
          xs: ThemeSettings.THEME_SPACING.mini + 1,
          sm: ThemeSettings.THEME_SPACING.extraSmall + 1.5,
          xl: ThemeSettings.THEME_SPACING.verySmall + 3,
        }}
        justifyContent={`center`}
        overflow={`hidden`}
        borderRadius={{
          xs: `0 0 7px 7px`,
          sm: `0 0 15px 15px`,
        }}
        borderBottom={{
          xs: `1px solid ${props.borderColor}`,
          sm: `3px solid ${props.borderColor}`,
        }}
        borderRight={{
          xs: `1px solid ${props.borderColor}`,
          sm: `3px solid ${props.borderColor}`,
        }}
        borderLeft={{
          xs: `1px solid ${props.borderColor}`,
          sm: `3px solid ${props.borderColor}`,
        }}
        sx={{
          background: ThemeSettings.THEME_COLORS.primary,
        }}
      >
        <Grid
          container
          position={`relative`}
          justifyContent={`center`}
          alignItems={`start`}
        >
          {props.elements.map((item, index) => (
            <Grid
              container
              key={index}
              xs={11}
              justifyContent={`center`}
              display={isClickTab[index] ? `flex` : `none`}
            >
              {item.tabCard}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
