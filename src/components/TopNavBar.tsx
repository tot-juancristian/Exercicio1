import React from "react";
import { AppBar, Toolbar, Grid, Typography, Select, MenuItem } from "@mui/material";
import { BaseNavBarProps } from "../types/NavigationTypes";
import ThemeSettings from "../theme/themeSettings";

const TopNavBar: React.FC<BaseNavBarProps> = ({
  logoText,
  navItems,
  userProfile,
}) => {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor:
          ThemeSettings.THEME_COLORS?.primary || "#df0000",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          px: { xs: 5, sm: 8, md: 10 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          {logoText}
        </Typography>

        <Grid
          container
          item
          xs="auto"
          justifyContent="center"
          columnGap={3}
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                fontSize: "0.95rem",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: 0,
                  height: 2,
                  bgcolor: "rgba(255,255,255,0.9)",
                  transition: "width 0.2s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Grid>

        <Grid
          container
          item
          xs="auto"
          alignItems="center"
          justifyContent="flex-end"
          columnGap={1.5}
        >
          <Typography
            variant="body2"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            Olá, <strong>{userProfile.name}</strong>
          </Typography>

          <Select
            size="small"
            defaultValue=""
            displayEmpty
            sx={{
              minWidth: 120,
              bgcolor: "rgba(255,255,255,0.15)",
              borderRadius: 999,
              fontSize: "0.85rem",
              color: "white",
              "& .MuiSelect-icon": { color: "white" },
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="" disabled>
              Opções
            </MenuItem>
            <MenuItem value="edit">Editar</MenuItem>
            <MenuItem value="search">Pesquisar</MenuItem>
            <MenuItem value="settings">Configurações</MenuItem>
            <MenuItem value="logout">Sair</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopNavBar;
