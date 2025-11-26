import { CircularProgress, Grid, GridProps } from "@mui/material";
import ReactPlayer from "react-player";
import ThemeSettings from "../../theme/themeSettings";
// import useScale from "../../hooks/animations/scroll-trigger-scale";
import { useState } from "react";
import { videosVimeoLinks } from '../../shared/consts/const'

interface MainVideoInterface extends GridProps {
    handleVideoEnded: () => void,
    index: number
}

export function MainVideo({ ...props }: MainVideoInterface) {

    const [isLoading, setIsLoading] = useState(true)

    const handleIsLoad = () => {
        setIsLoading(false)
    }

    return (
        <Grid
            container
            position={`relative`}
            alignItems={`center`}
            justifyContent={`center`}
            gap={{
                xs: ThemeSettings.THEME_SPACING.extraSmall,
                sm: ThemeSettings.THEME_SPACING.verySmall
            }}
        >
            <Grid
                {...props}
                container
                className={`video-animation-${props.index}`}
                datatype={`videoContainer`}
                borderRadius={`20px`}
                border={`5px solid ${ThemeSettings.THEME_COLORS.primary}`}
                sx={{
                    filter: `blur(5px)`
                }}
            >
                <ReactPlayer
                    controls
                    url={videosVimeoLinks[props.index]}
                    height={`100%`}
                    width={`100%`}
                    onEnded={props.handleVideoEnded}
                    onReady={handleIsLoad}
                />
            </Grid>
            <Grid
                container
                datatype={`videoContainer`}
                position={`absolute`}
                borderRadius={`20px`}
                border={`5px solid transparent`}
            >
                <ReactPlayer
                    controls
                    url={videosVimeoLinks[props.index]}
                    height={`100%`}
                    width={`100%`}
                    onEnded={props.handleVideoEnded}
                    onReady={handleIsLoad}
                    style={{
                        opacity: isLoading ? 0 : 1
                    }}
                />
                <Grid
                    container
                    position={`absolute`}
                    width={`auto`}
                    display={isLoading ? `flex` : `none`}
                >
                    <CircularProgress
                        sx={{
                            color: ThemeSettings.THEME_COLORS.primary
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}