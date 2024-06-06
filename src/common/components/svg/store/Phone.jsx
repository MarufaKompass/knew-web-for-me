import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4077 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6697 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793ZM14.4181 5.48994C13.942 5.402 13.5048 5.70579 13.4142 6.17047C13.3236 6.63515 13.6283 7.08884 14.0914 7.17978C15.4857 7.45159 16.5623 8.53085 16.8351 9.92989V9.93089C16.9128 10.3336 17.2674 10.6264 17.6757 10.6264C17.7305 10.6264 17.7852 10.6214 17.841 10.6114C18.3041 10.5185 18.6088 10.0658 18.5182 9.60012C18.1109 7.51055 16.5025 5.89666 14.4181 5.48994ZM16.0001 15.0905C16.4515 14.8302 16.9615 14.5362 17.6047 14.673C18.1873 14.7959 20.1731 16.4078 20.7169 16.9665C21.0734 17.3322 21.2716 17.7099 21.3025 18.0877C21.3562 19.5697 19.3425 21.2615 18.976 21.4724C18.489 21.8231 17.9224 22 17.286 22C16.6357 22 15.9106 21.8151 15.1199 21.4464C10.8296 19.6556 4.27553 13.231 2.54266 8.97395C1.82362 7.38903 1.81864 6.08193 2.53071 5.09961C2.81454 4.63892 4.43288 2.71325 5.88192 2.7742C6.26733 2.80718 6.64179 3.00505 7.00928 3.3648C7.56499 3.90942 9.13653 5.90106 9.25803 6.48565C9.39247 7.13521 9.09769 7.65185 8.83576 8.10554C8.7799 8.20307 8.70463 8.31881 8.62217 8.4456C8.3092 8.92683 7.89264 9.56735 8.04004 9.97626C9.09669 12.5705 11.5376 14.8339 14.133 15.8972C14.5343 16.0431 15.1745 15.6235 15.6542 15.3092C15.7791 15.2273 15.8932 15.1525 15.9893 15.0967L16.0001 15.0905Z"
        fill="#200E32"
      />
    </svg>
  );
}
const Phone = forwardRef(Root);
export default Phone;