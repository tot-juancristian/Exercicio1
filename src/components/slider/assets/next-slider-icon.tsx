import ThemeSettings from "../../../theme/themeSettings";

function NextSliderIcon({ color = ThemeSettings.THEME_COLORS.primary }: { color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            fill="none"
            viewBox="0 0 10 17"
        >
            <path
                style={{ stroke: color, transition: '.2s' }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
                d="M.78 15.917L9.257 8.5.78 1.083"
            ></path>
        </svg>
    );
}

export default NextSliderIcon;