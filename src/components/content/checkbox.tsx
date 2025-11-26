import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useEffect, useRef, useState } from "react";

interface CheckboxInterface {
  text: string[];
  subtitle?: string[][];
  xsSizeCheckbox?: number;
  smSizeCheckbox?: number;
  handleClick: () => void;
}

export function Checkbox({ ...props }: CheckboxInterface) {
  const { xsSizeCheckbox = 1, smSizeCheckbox = 0.8 } = props;

  const [isClick, setIsClick] = useState(false);

  const checkboxSizeRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!checkboxSizeRef.current) return;
    setHeight(checkboxSizeRef.current?.clientHeight);
  }, [height]);

  const handleClickCheckbox = () => {
    if (props.handleClick) {
      props.handleClick();
    }
    setIsClick(!isClick);
  };

  return (
    <Grid
      container
      alignItems={props.subtitle ? `start` : `center`}
      gap={{
        xs: ThemeSettings.THEME_SPACING.mini,
        sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
        xl: ThemeSettings.THEME_SPACING.verySmall - 1.5,
      }}
      paddingTop={
        props.subtitle
          ? {
              xs: ThemeSettings.THEME_SPACING.mini,
              sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
              xl: ThemeSettings.THEME_SPACING.verySmall - 1.5,
            }
          : 0
      }
    >
      <Grid
        container
        ref={checkboxSizeRef}
        sx={{
          aspectRatio: 1,
          cursor: `pointer`,
          transition: `.2s`,
        }}
        border={{
          xs: `1px solid ${
            isClick
              ? ThemeSettings.THEME_COLORS.primary
              : ThemeSettings.THEME_COLORS.white
          }`,
          sm: `2px solid ${
            isClick
              ? ThemeSettings.THEME_COLORS.primary
              : ThemeSettings.THEME_COLORS.white
          }`,
        }}
        bgcolor={isClick ? ThemeSettings.THEME_COLORS.primary : `transparent`}
        xs={xsSizeCheckbox}
        sm={smSizeCheckbox}
        alignContent={`center`}
        justifyContent={`center`}
        borderRadius={{
          xs: `3px`,
          sm: `5px`,
        }}
        onClick={handleClickCheckbox}
      >
        <Grid
          container
          xs={10}
          sx={{
            opacity: isClick ? 1 : 0,
            transition: `.2s`,
          }}
        >
          <Check />
        </Grid>
      </Grid>
      <Grid container xs position={`relative`}>
        <Grid
          container
          mb={{
            xs: ThemeSettings.THEME_SPACING.mini - 0.5,
            sm: ThemeSettings.THEME_SPACING.extraSmall - 2,
            xl: ThemeSettings.THEME_SPACING.verySmall - 3,
          }}
          sx={{
            opacity: isClick || props.subtitle ? 1 : 0,
            transition: `.2s`,
          }}
        >
          <Typography>
            {props.text?.map((item, index) => (
              <span
                style={{
                  fontWeight:
                    index % 2
                      ? ThemeSettings.THEME_FONT_WEIGHTS.bold
                      : ThemeSettings.THEME_FONT_WEIGHTS.light,
                }}
              >
                {item}
              </span>
            ))}
          </Typography>
        </Grid>
        {props.subtitle?.map((item) => (
          <Grid
            container
            sx={{
              opacity: isClick ? 1 : 0,
              transition: `.2s`,
            }}
          >
            <Typography variant="body2" component={`i`}>
              {item.map((t, i) => (
                <span
                  style={{
                    fontWeight:
                      i % 2
                        ? ThemeSettings.THEME_FONT_WEIGHTS.light
                        : ThemeSettings.THEME_FONT_WEIGHTS.semiBold,
                  }}
                >
                  {t}
                </span>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

function Check() {
  return (
    <svg
      width="100%"
      viewBox="0 0 36 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2721 27C14.2755 27.0012 15.2379 26.5951 15.9464 25.8715L34.8581 6.61039C36.3537 5.12518 36.3841 2.68627 34.9258 1.16299C33.4676 -0.360282 31.0729 -0.391218 29.5772 1.094C29.5543 1.11674 29.5317 1.13979 29.5095 1.16299L13.2721 17.6996L6.4905 10.7935C5.03223 9.27025 2.63755 9.23931 1.1419 10.7245C-0.353748 12.2097 -0.384122 14.6486 1.07415 16.1719C1.09649 16.1953 1.11912 16.2183 1.1419 16.2409L10.5978 25.8715C11.3062 26.5951 12.2687 27.0012 13.2721 27Z"
        fill="#F6F6F6"
      />
    </svg>
  );
}
