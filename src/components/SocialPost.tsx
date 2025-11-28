import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ThemeSettings from "../theme/themeSettings";

interface SocialPostProps {
    description: string;
    commentsCount: number;
    likesCount: number;
}

const SocialPost: React.FC<SocialPostProps> = ({
    description,
    commentsCount,
    likesCount,
}) => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [currentLikes, setCurrentLikes] = React.useState(likesCount);

    const handleLike = () => {
        setCurrentLikes((prev) => (isLiked ? prev - 1 : prev + 1));
        setIsLiked((prev) => !prev);
    };

    return (
        <Grid
            container
            sx={{
                maxWidth: "100%",
                width: "100%",
                mx: "auto",
                mb: 5,
                p: 8,
                borderRadius: 5,
                bgcolor: ThemeSettings.THEME_COLORS?.primary || "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
        >
            <Grid
                container
                item xs={12}>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 999,
                        color: "#222",
                        mb: 3,
                        wordBreak: "break-word",
                    }}
                >
                    {description}
                </Typography>
            </Grid>

            <Grid
                container
                item
                xs={12}
                sx={{
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: ThemeSettings.THEME_COLORS?.secondary || "rgba(0,0,0,0.02)",
                    borderRadius: 1.5,
                    px: 1.5,
                    py: 0.75,
                }}
            >
                <Typography variant="caption" sx={{ color: "rgba(0,0,0,0.7)" }}>
                    💬 {commentsCount} comentário{commentsCount !== 1 && "s"}
                </Typography>

                <Button
                    onClick={handleLike}
                    size="large"
                    sx={{
                        textTransform: "none",
                        fontSize: "1rem",
                        px: 3,
                        borderRadius: 999,
                        bgcolor: isLiked
                            ? ThemeSettings.THEME_COLORS?.black || "#1976d2"
                            : "transparent",
                        color: isLiked ? "#fff" : "rgba(0,0,0a,0.8)",
                        "&:hover": {
                            bgcolor: isLiked
                                ? ThemeSettings.THEME_COLORS.black || "#1565c0"
                                : "rgba(0,0,0,0.04)",
                        },
                    }}
                >
                    ❤️ {currentLikes} {isLiked ? "Curtidas" : "Curtir"}
                </Button>
            </Grid>
        </Grid>
    );
};

export default SocialPost;
