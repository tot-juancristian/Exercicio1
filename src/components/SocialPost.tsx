import { Grid } from '@mui/material';
import React from 'react';
import ThemeSettings from '../theme/themeSettings';

interface SocialPostProps {
    description: string;
    commentsCount: number;
    likesCount: number;
}

const SocialPost:
    React.FC<SocialPostProps> = ({
        description, commentsCount, likesCount,
    }) => {
        const [isLiked, setisLiked] = React.useState(false);
        const [currentLikes, setCurrentLikes] = React.useState(likesCount);
        const [] = React.useState(commentsCount);

        const handleLike = () => {
            if (isLiked) {
                setCurrentLikes(currentLikes - 1);
            } else {
                setCurrentLikes(currentLikes + 1);
            }
            setisLiked(!isLiked);
        };
        return (
            <Grid style={{
                justifyContent:"center",
                background:ThemeSettings.THEME_COLORS.primary,
                border: '1px solid #ccc',
                padding: '15px',
                maxWidth: '400px',
                margin: '10p',
                borderRadius: '8px'
            }}>
                //
                <p>
                    <strong> Descrição:</strong>
                    {description}
                </p>

                <Grid 
                style={{ 
                    background: ThemeSettings.THEME_COLORS.secondary,
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginTop: '10px' }}>
                    <span>
                        <button
                            onClick={handleLike}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {currentLikes} {isLiked ? 'Curtido' : 'Curtir'}
                        </button>

                    </span>
                </Grid>
            </Grid>
        )
    }

export default SocialPost;