import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={94}
      viewBox="0 0 106 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105.319 47.01c0-6.976-8.737-13.587-22.133-17.687C86.278 15.67 84.904 4.809 78.85 1.33 77.454.515 75.823.13 74.04.13v4.787c.988 0 1.782.193 2.447.558 2.92 1.674 4.187 8.05 3.2 16.25-.237 2.018-.624 4.143-1.096 6.31-4.207-1.03-8.801-1.824-13.632-2.339-2.898-3.971-5.903-7.578-8.93-10.733C63.028 8.458 69.597 4.895 74.063 4.895V.108c-5.904 0-13.632 4.207-21.446 11.505C44.803 4.358 37.074.193 31.17.193V4.98c4.443 0 11.034 3.542 18.032 10.003a101.385 101.385 0 00-8.866 10.712c-4.851.515-9.445 1.31-13.653 2.361a64.74 64.74 0 01-1.116-6.225c-1.01-8.2.236-14.575 3.134-16.271.644-.386 1.481-.558 2.469-.558V.215c-1.804 0-3.435.386-4.852 1.202-6.032 3.478-7.385 14.318-4.272 27.927C8.694 33.466 0 40.056 0 47.011c0 6.976 8.737 13.588 22.133 17.688-3.091 13.652-1.717 24.514 4.336 27.991 1.396.816 3.027 1.202 4.83 1.202 5.904 0 13.632-4.207 21.446-11.505 7.815 7.255 15.543 11.42 21.446 11.42 1.804 0 3.435-.387 4.852-1.203 6.032-3.477 7.385-14.317 4.272-27.927 13.31-4.1 22.004-10.711 22.004-17.666zm-27.95-14.317c-.795 2.769-1.782 5.624-2.898 8.479a101.547 101.547 0 00-2.813-5.152 116.128 116.128 0 00-3.091-5.023c3.048.45 5.99 1.009 8.802 1.696zm-9.832 22.861c-1.675 2.898-3.392 5.646-5.174 8.2-3.199.28-6.44.43-9.703.43-3.242 0-6.484-.15-9.66-.408a118.339 118.339 0 01-5.196-8.157 111.803 111.803 0 01-4.465-8.544 111.927 111.927 0 014.444-8.565c1.674-2.898 3.392-5.645 5.173-8.2 3.199-.279 6.44-.43 9.704-.43 3.241 0 6.483.151 9.66.409 1.782 2.554 3.52 5.28 5.195 8.157a111.767 111.767 0 014.465 8.543 120.21 120.21 0 01-4.444 8.565zm6.933-2.79a92.008 92.008 0 012.963 8.543 96.336 96.336 0 01-8.845 1.717 118.565 118.565 0 003.092-5.087c.987-1.717 1.91-3.456 2.79-5.173zM52.704 75.668a88.488 88.488 0 01-5.968-6.87c1.932.087 3.907.15 5.903.15 2.018 0 4.015-.042 5.968-.15a83.773 83.773 0 01-5.904 6.87zM36.73 63.024a96.85 96.85 0 01-8.802-1.696c.794-2.769 1.782-5.624 2.898-8.479a101.71 101.71 0 002.812 5.152 142.185 142.185 0 003.092 5.023zm15.864-44.67a88.51 88.51 0 015.968 6.869c-1.932-.086-3.907-.15-5.903-.15-2.018 0-4.015.042-5.968.15a83.793 83.793 0 015.903-6.87zM36.71 30.997a118.569 118.569 0 00-5.882 10.24 92.018 92.018 0 01-2.962-8.544 104.28 104.28 0 018.844-1.696zM17.281 57.873C9.681 54.63 4.766 50.38 4.766 47.01s4.916-7.642 12.515-10.862c1.847-.794 3.864-1.503 5.947-2.168 1.223 4.207 2.833 8.586 4.83 13.073-1.975 4.465-3.564 8.822-4.766 13.008a65.206 65.206 0 01-6.01-2.19zm11.55 30.674c-2.92-1.674-4.186-8.05-3.199-16.25.236-2.017.623-4.142 1.095-6.31 4.208 1.03 8.802 1.824 13.632 2.34 2.898 3.97 5.903 7.577 8.93 10.732-6.998 6.505-13.567 10.068-18.032 10.068-.966-.021-1.782-.215-2.426-.58zM79.75 72.19c1.01 8.2-.236 14.576-3.134 16.272-.644.386-1.481.558-2.469.558-4.443 0-11.034-3.542-18.032-10.004 3.005-3.155 6.01-6.74 8.866-10.711 4.852-.515 9.445-1.31 13.653-2.361.494 2.168.88 4.25 1.116 6.246zm8.265-14.317c-1.846.794-3.864 1.502-5.946 2.168-1.224-4.208-2.834-8.587-4.83-13.073 1.975-4.465 3.563-8.823 4.766-13.009a68.095 68.095 0 016.032 2.19c7.6 3.241 12.515 7.492 12.515 10.862-.021 3.37-4.937 7.642-12.537 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M52.638 56.82c5.418 0 9.81-4.391 9.81-9.81 0-5.417-4.392-9.81-9.81-9.81s-9.81 4.393-9.81 9.81c0 5.419 4.392 9.81 9.81 9.81z"
        fill="#81D8F7"
      />
    </svg>
  )
}
