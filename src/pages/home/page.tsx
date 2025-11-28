import { Grid, Typography } from "@mui/material";
import SideNavBar from "../../components/SideNavBar";
import SocialPost from "../../components/SocialPost";
import TopNavBar from "../../components/TopNavBar";
import MainGrid from "../../components/Main-Grid";
import { NavItem, UserProfile } from "../../types/NavigationTypes";
import ThemeSettings from "../../theme/themeSettings";

const navItems: NavItem[] = [
    { label: "Contato", href: "#contact" },
    { label: "Saiba mais", href: "#about" },
    { label: "Blog", href: "#blog" },
];

const userProfile: UserProfile = {
    name: "Juan de Borba",
};

function Page() {
    const APPBAR_HEIGHT = 200;

    return (
        <MainGrid>
            <TopNavBar
                logoText="Meu App"
                navItems={navItems}
                userProfile={userProfile}
            />
            <Grid
                component="main"
                sx={{
                    minHeight: "100vh",
                    bgcolor:
                        ThemeSettings.THEME_COLORS?.background ||
                        "linear-gradient(180deg, #f3f5f7 0%, #ffffff 100%)",
                    pt: `${APPBAR_HEIGHT}px`,
                }}
            >
                <Grid
                    container
                    sx={{
                        height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
                        px: {
                            xs: ThemeSettings.THEME_SPACING?.small || 2,
                            sm: ThemeSettings.THEME_SPACING?.medium || 3,
                            md: ThemeSettings.THEME_SPACING?.large || 4,
                        },
                        pb: { xs: 3, md: 4 },
                    }}
                    columnSpacing={{ xs: 2, md: 3 }}
                    rowSpacing={{ xs: 3, md: 0 }}
                    alignItems="stretch"
                >
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Grid sx={{ width: "100%" }}>
                            <SideNavBar
                                logoText="Menu"
                                navItems={navItems}
                                userProfile={userProfile}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: ThemeSettings.THEME_SPACING?.small || 2,
                            overflowY: "auto",
                            pr: { md: 1 },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, mb: 1 }}
                        >
                            Feed
                        </Typography>
                        <SocialPost
                            description="Estou aprendendo React e TypeScript."
                            commentsCount={10}
                            likesCount={20}
                        />
                        <SocialPost
                            description="Estou praticando componentização e etc..."
                            commentsCount={3}
                            likesCount={10}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                    </Grid>
                </Grid>
            </Grid>
        </MainGrid>
    );
}

export default Page;
