import React, { ReactNode, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Grid } from "@mui/material";
import { NextButton, PrevButton, usePrevNextButtons } from "./buttons.tsx";
import ThemeSettings from "../../theme/themeSettings.ts";

type PropType = {
  slides: ReactNode[];
  bgcolor?: string;
  secondary?: boolean;
  handleInteractionsClick?: (index: number) => void;
};

const Slider: React.FC<PropType> = (props) => {
  const { slides, secondary = false, handleInteractionsClick } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    onPrevButtonClick,
    onNextButtonClick,
    nextBtnDisabled,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    onNextButtonClick();
    setCurrentIndex((state) => state + 1);
    if (handleInteractionsClick) {
      handleInteractionsClick(currentIndex);
    }
  };

  return (
    <Grid width={"100%"} overflow={`hidden`} position="relative">
      <Grid ref={emblaRef}>
        <Grid
          display={`flex`}
          gap={{
            xs: ThemeSettings.THEME_SPACING.mini,
            sm: ThemeSettings.THEME_SPACING.extraSmall,
            xl: ThemeSettings.THEME_SPACING.verySmall,
          }}
        >
          {slides.map((infos, index) => (
            <Grid
              key={index}
              container
              justifyContent={"center"}
              position={"relative"}
              flex={`0 0 100%`}
              gap={
                !secondary
                  ? 0
                  : {
                      xs: ThemeSettings.THEME_SPACING.extraSmall,
                      sm: ThemeSettings.THEME_SPACING.verySmall,
                      xl: ThemeSettings.THEME_SPACING.small,
                    }
              }
              px={{
                xs: ThemeSettings.THEME_SPACING.extraSmall,
                sm: ThemeSettings.THEME_SPACING.verySmall,
                xl: ThemeSettings.THEME_SPACING.small,
              }}
            >
              <Grid
                container
                xs={11}
                sm={9}
                paddingY={"3.5%"}
                borderRadius={`15px`}
                justifyContent={`center`}
                sx={{
                  background: `radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(243, 243, 243, 0.015) 100%)`,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Grid container xs={11}>
                  {infos}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <Grid
          xs={secondary ? 0.75 : 1}
          sx={{
            position: "absolute",
            top: "50%",
            left: "2%",
            transform: "translateY(-50%)",
            pointerEvents: "auto",
            opacity: prevBtnDisabled ? 0 : 1,
          }}
        >
          <PrevButton onClick={onPrevButtonClick} secondary={secondary} />
        </Grid>

        <Grid
          xs={secondary ? 0.75 : 1}
          sx={{
            position: "absolute",
            top: "50%",
            right: "2%",
            transform: "translateY(-50%)",
            pointerEvents: "auto",
            opacity: nextBtnDisabled ? 0 : 1,
          }}
        >
          <NextButton onClick={handleNextSlide} secondary={secondary} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Slider;
