import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";

export interface TableComponentInterface {
    headInfos: string[]
    bodyInfos: string[][][]
    headColor: string
    variant?: `body1` | `body2` | `h6`
}
export function TableComponent({ ...props }: TableComponentInterface) {

    const { variant = `body2` } = props

    return (
        <Grid
            container
            sx={{
                overflowX: `auto`,
            }}
        >
            <Table
                sx={{
                    borderCollapse: `collapse`,
                }}
            >
                <TableHead>
                    <TableRow>
                        {props.headInfos.map((headElement) => (
                            <TableCell
                                align="center"
                                sx={{
                                    bgcolor: props.headColor,
                                    border: {
                                        xs: `1px solid ${ThemeSettings.THEME_COLORS.white}`,
                                        sm: `2px solid ${ThemeSettings.THEME_COLORS.white}`
                                    },
                                    paddingX: {
                                        xs: ThemeSettings.THEME_SPACING.mini,
                                        sm: ThemeSettings.THEME_SPACING.extraSmall,
                                        xl: ThemeSettings.THEME_SPACING.verySmall,
                                    },
                                }}
                            >
                                <Grid container justifyContent={`center`}>
                                    <Typography
                                        fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.semiBold}
                                        textAlign={`center`}
                                    >
                                        {headElement}
                                    </Typography>
                                </Grid>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.bodyInfos.map((column, index) => (
                        <TableRow
                            key={index}
                        >
                            {column.map((row) => (
                                <TableCell
                                    align="center"
                                    component="th"
                                    scope="row"
                                    sx={{
                                        border: {
                                            xs: `1px solid ${ThemeSettings.THEME_COLORS.white}`,
                                            sm: `2px solid ${ThemeSettings.THEME_COLORS.white}`
                                        },
                                        paddingX: {
                                            xs: ThemeSettings.THEME_SPACING.mini,
                                            sm: ThemeSettings.THEME_SPACING.extraSmall,
                                            xl: ThemeSettings.THEME_SPACING.verySmall,
                                        },
                                    }}
                                >
                                    {row.map((text) => (
                                        <Grid container justifyContent={`center`}>
                                            <Typography
                                                textAlign={`center`}
                                                variant={variant}
                                            >
                                                {text}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    )
}