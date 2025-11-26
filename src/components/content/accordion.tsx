import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { Arrow } from "../../assets/svg/arrow";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  handleClick: () => void;
  bgcolor: string;
  bgcolorHover: string;
  hasBorder?: boolean;
  justifyContent?: `center` | `start` | `end`;
  datatype?: `primary` | `secondary`;
}

export function Accordion({ ...props }: AccordionProps) {
  const { justifyContent = `center`, datatype = `primary` } = props;

  const [isExpandCard, setExpandCard] = useState(false);
  const [exibirText, setExibirText] = useState(false);
  const containerTitle = useRef<HTMLDivElement | null>(null);
  const containerOculto = useRef<HTMLDivElement | null>(null);
  const expandCardRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  const handleExpandCard = () => {
    props.handleClick();
    setExpandCard(!isExpandCard);
  };

  useEffect(() => {
    if (!containerTitle.current || !containerOculto.current) return;

    if (isExpandCard) {
      setHeight(
        (containerTitle.current?.clientHeight ?? 0) +
          (containerOculto.current?.clientHeight ?? 0)
      );
    } else {
      setHeight(containerTitle.current?.clientHeight ?? 0);
    }
  }, [isExpandCard]);

  useEffect(() => {
    console.log(containerTitle.current?.clientHeight);
  }, []);

  useGSAP(() => {
    if (
      !containerTitle.current ||
      !containerOculto.current ||
      !expandCardRef.current
    )
      return;

    if (isExpandCard) {
      gsap.to(expandCardRef.current, {
        height: `${height}px`,
        duration: 0.5,
        onComplete: () => setExibirText(true),
      });
    } else {
      setExibirText(false);
      gsap.to(expandCardRef.current, {
        height: `${height}px`,
        duration: 0.5,
      });
    }
  }, [isExpandCard, height]);

  return (
    <Grid container>
      <Grid
        container
        justifyContent={`center`}
        position={`relative`}
        ref={expandCardRef}
        borderRadius={`15px`}
        overflow={`hidden`}
        onClick={handleExpandCard}
        sx={{
          transition: `background-color .4s`,
          cursor: `pointer`,
        }}
      >
        <Grid container xs={11} justifyContent={`center`}>
          <Grid
            container
            ref={containerTitle}
            alignItems={`center`}
            position={`relative`}
            justifyContent={`center`}
          >
            <Grid
              container
              justifyContent={justifyContent}
              sm={4}
              borderBottom={`${
                isExpandCard && props.hasBorder ? 1 : 0
              }px solid ${ThemeSettings.THEME_COLORS.secondary}`}
              paddingY={{
                xs: ThemeSettings.THEME_SPACING.mini,
                sm: ThemeSettings.THEME_SPACING.extraSmall,
                xl: ThemeSettings.THEME_SPACING.verySmall,
              }}
              sx={{
                transition: `.3s`,
              }}
            >
              <Typography
                fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.semiBold}
                textAlign={`center`}
                datatype={datatype}
              >
                {props.title}
              </Typography>
            </Grid>
            {/* caso queira usar a arrow */}
            {/* <Grid
                            container
                            sm={.4}
                            xs={1}
                            display={{
                                xs: `none`,
                                sm: `flex`
                            }}
                            right={0}
                            position={`absolute`}
                            sx={{
                                transform: isExpandCard ? `scaleY(-1)` : `scaleY(1)`,
                                transition: `.6s`
                            }}
                        >
                            <Arrow />
                        </Grid> */}
          </Grid>
          <Grid
            container
            ref={containerOculto}
            justifyContent={`center`}
            sm={10}
            paddingBottom={{
              xs: ThemeSettings.THEME_SPACING.mini,
              sm: ThemeSettings.THEME_SPACING.extraSmall,
              xl: ThemeSettings.THEME_SPACING.verySmall,
            }}
            paddingTop={
              props.hasBorder
                ? {
                    xs: ThemeSettings.THEME_SPACING.mini,
                    sm: ThemeSettings.THEME_SPACING.extraSmall,
                    xl: ThemeSettings.THEME_SPACING.verySmall,
                  }
                : 0
            }
            sx={{
              opacity: exibirText ? 1 : 0,
              transition: `.3s`,
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
