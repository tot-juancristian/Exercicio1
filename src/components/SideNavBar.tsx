import React from "react";
import { BaseNavBarProps } from "../types/NavigationTypes";
import {
  Grid,
  Typography,
  Button,
} from "@mui/material";
import ThemeSettings from "../theme/themeSettings";

const SideNavBar: React.FC<BaseNavBarProps> = ({
  logoText,
  navItems,
  userProfile,
}) => {
  return (
    <>
      <Grid
        component="nav"
        sx={{
          position: { xs: "fixed", md: "static" },
          top: 0,
          left: 0,
          height: { xs: "100vh", md: "auto" },
          width: { xs: 260, md: "100%" },
          bgcolor: "white",
          borderRight: { xs: "1px solid rgba(0,0,0,0.08)", md: "none" },
          boxShadow: { xs: 3, md: "none" },
          p: 2,
          zIndex: 1200,
          transition: "transform 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 1 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.3rem",
              textAlign: "center",
              color: ThemeSettings.THEME_COLORS?.primary || "#000",
            }}
          >
            {logoText}
          </Typography>
        </Grid>

        <Grid component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {navItems.map((item) => (
            <Grid
              key={item.label}
              component="li"
              sx={{ mb: 1 }}
            >
              <Button
                fullWidth
                component="a"
                href={item.href}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  color: "rgba(0,0,0,0.8)",
                  borderRadius: 1.5,
                  px: 1.5,
                  py: 0.75,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="stretch"
          sx={{ gap: 1 }}
        >
          <Typography
            variant="inherit"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Perfil de <strong>{userProfile.name}</strong>
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Pesquisar
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Configurações
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              bgcolor: ThemeSettings.THEME_COLORS?.primary || "#df0000",
              "&:hover": {
                bgcolor:
                  ThemeSettings.THEME_COLORS?.black || "#b80000",
              },
            }}
          >
            Sair
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SideNavBar;
