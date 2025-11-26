import { Box, Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useState } from "react";

export interface CardsClickToViewProps {
  icon: React.ReactNode;
  texts: string[];
  textColor?: string;
  bgcolor: string;
  bgcolorBackFace?: string;
  title?: string;
  datatype?: `primary` | `secondary`;
  aspectRatio?: string;
  alingContent?: string;
  xsSizeIcon?: number;
  smSizeIcon?: number;
  horizontal?: boolean;
  rotate?: `Y` | `X`;
  fontSize?: {
    xs: string;
    sm: string;
    md: string;
  };
}

export function Card3D({ ...props }: CardsClickToViewProps) {
  const [isClicked, setisClicked] = useState(false);
  const {
    datatype = `secondary`,
    aspectRatio = `1 / 1.3`,
    alingContent = `center`,
    xsSizeIcon = 4.5,
    smSizeIcon = 5.5,
    rotate = `Y`,
    textColor = "black",
    fontSize = {
      xs: "2.2vw",
      sm: "1.6vw",
      md: "1.2vw",
    },
  } = props;

  const handleFlipCard = () => {
    setisClicked(!isClicked);
  };

  return (
    <Box
      onClick={handleFlipCard}
      sx={{
        perspective: "1000px",
        width: "100%",
        aspectRatio: aspectRatio,
        cursor: "pointer",
        borderRadius: `15px`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isClicked
            ? `rotate${rotate}(180deg)`
            : `rotate${rotate}(0deg)`,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignContent={alingContent}
          alignItems={alingContent}
          pb={{
            xs: alingContent !== `end` ? 0 : `40%`,
          }}
          bgcolor={props.bgcolor}
          sx={{
            position: "absolute",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: `15px`,
          }}
          gap={{
            xs: ThemeSettings.THEME_SPACING.mini,
            sm: ThemeSettings.THEME_SPACING.extraSmall - 0.5,
            xl: ThemeSettings.THEME_SPACING.verySmall - 1,
          }}
        >
          <Grid
            container
            xs={xsSizeIcon}
            sm={smSizeIcon}
            justifyContent="center"
          >
            {props.icon}
          </Grid>
          <Grid
            container
            justifyContent="center"
            xs={props.horizontal ? 6 : 11}
            display={props.title ? `flex` : `none`}
          >
            <Typography
              datatype={datatype}
              textAlign="center"
              component={`strong`}
              color={"white"}
              fontSize={{
                xs: "2.2vw",
                sm: "2vw",
                md: "1.6vw",
              }}
            >
              {props.title}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignContent={`center`}
          gap={{
            xs: ThemeSettings.THEME_SPACING.mini,
            sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
            xl: ThemeSettings.THEME_SPACING.verySmall - 2,
          }}
          bgcolor={
            props.bgcolorBackFace ? props.bgcolorBackFace : props.bgcolor
          }
          sx={{
            position: "absolute",
            height: "100%",
            transform: `rotate${rotate}(180deg)`,
            backfaceVisibility: "hidden",
            borderRadius: `15px`,
          }}
        >
          {props.texts.map((item, index) => (
            <Grid container justifyContent={alingContent} xs={9}>
              <Typography
                datatype={datatype}
                textAlign="justify"
                fontSize={fontSize}
                color={textColor}
              >
                <span
                  key={index}
                  style={{
                    fontWeight:
                      index % 2
                        ? ThemeSettings.THEME_FONT_WEIGHTS.bold
                        : ThemeSettings.THEME_FONT_WEIGHTS.regular,
                  }}
                >
                  {item}
                </span>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
