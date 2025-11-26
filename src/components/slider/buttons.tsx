import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Button, ButtonProps, Grid } from "@mui/material";
import PrevSliderIcon from "./assets/prev-slider-icon";
import NextSliderIcon from "./assets/next-slider-icon";
import ThemeSettings from "../../theme/themeSettings";

interface ButtonsInterface extends ButtonProps {
  secondary?: boolean;
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export function PrevButton({ ...props }: ButtonsInterface) {
  const { ...restProps } = props;

  return (
    <Button
      {...restProps}
      variant="contained"
      sx={{
        minWidth: `auto`,
        border: "1px solid white",
        borderRadius: props.secondary ? 999 : `20px 0 0 20px`,
        padding: props.secondary ? 0 : `.5vw 1.5vw .5vw 0vw`,
        aspectRatio: props.secondary ? 1 : `none`,
        "&:hover": {
          boxShadow: `none`,
          bgcolor: ThemeSettings.THEME_COLORS.primary,
        },
        boxShadow: `none`,
      }}
    >
      <Grid container xs={4}>
        <PrevSliderIcon />
      </Grid>
    </Button>
  );
}

export function NextButton({ ...props }: ButtonsInterface) {
  const { ...restProps } = props;

  return (
    <Button
      {...restProps}
      variant="contained"
      sx={{
        borderRadius: props.secondary ? 999 : `0 20px 20px 0`,
        minWidth: `auto`,
        border: "1px solid white",
        padding: props.secondary ? 0 : `.5vw 1.5vw .5vw 0vw`,
        aspectRatio: props.secondary ? 1 : `none`,
        "&:hover": {
          boxShadow: `none`,
          bgcolor: ThemeSettings.THEME_COLORS.primary,
        },
        boxShadow: `none`,
      }}
    >
      <Grid container xs={4}>
        <NextSliderIcon />
      </Grid>
    </Button>
  );
}
