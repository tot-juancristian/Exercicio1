import ThemeSettings from "../../../theme/themeSettings";

function PrevSliderIcon({ color = ThemeSettings.THEME_COLORS.primary }: { color?: string }) {
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
                d="M9.22 15.917L.743 8.5 9.22 1.083"
            ></path>
        </svg>
    );
}

export default PrevSliderIcon;