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
    return (
        <MainGrid>
            <TopNavBar
                logoText="Meu App"
                navItems={navItems}
                userProfile={userProfile}
            />

            <Grid
                container
                display={"flex"}
                sx={{
                    px: {
                        xs: ThemeSettings.THEME_SPACING.small = 4,
                        sm: ThemeSettings.THEME_SPACING.medium = 5,
                        md: ThemeSettings.THEME_SPACING.large = 6,
                    },
                }}
                columnSpacing={{ xs: 2, md: 3 }}
                alignItems="center"
            >
                <Grid
                    container
                    item
                    xs={12}
                    md={3}
                    sx={{
                        display: "flex",
                    }}
                >
                    <Grid container
                >
                        <SideNavBar
                            logoText="Menu"
                            navItems={navItems}
                            userProfile={userProfile}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        gap: ThemeSettings.THEME_SPACING.small + 2,
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
                    container
                    item
                    xs={12}
                    md={3}
                    sx={{
                        display: { xs: "none", md: "flex" },
                    }}
                >
                </Grid>
            </Grid>
        </MainGrid>
    );
}

export default Page;