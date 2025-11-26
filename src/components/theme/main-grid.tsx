import { Grid, GridProps } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";

interface MainGridInterface extends GridProps {
    children: React.ReactNode
}

export function MainGrid({ ...props }: MainGridInterface) {

    const {
        gap = {
            xs: ThemeSettings.THEME_SPACING.extraSmall,
            sm: ThemeSettings.THEME_SPACING.verySmall,
            xl: ThemeSettings.THEME_SPACING.small
        }
    } = props

    return (
        <Grid container justifyContent={`center`} zIndex={1}>
            <Grid
                {...props}
                container
                xs={11}
                sm={10}
                justifyContent={`center`}
                gap={gap}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}