// @ts-ignore
import * as React from "react";

// @ts-ignore
function Logo(props) {
    return (
        <svg
            width={249}
            height={58}
            viewBox="0 0 249 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="48"
                fontWeight="bold"
                fill="#0F3A24"
            >
                HealthHub
            </text>
            <path
                d="M 20,10 L 20,30 M 10,20 L 30,20"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default Logo;
