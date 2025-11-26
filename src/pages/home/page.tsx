import { Grid, Typography } from "@mui/material";
import { t } from "i18next";

export default function Page() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Typography>{t("teste")}</Typography>
    </Grid>
  );
}
