import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M36.4673 13.6648C37.8434 14.0275 38.932 15.0952 39.3017 16.4451C39.9795 18.9029 40 24 40 24C40 24 40 29.1172 39.3222 31.5549C38.9525 32.9048 37.8639 33.9725 36.4878 34.3352C34.0026 35 24 35 24 35C24 35 13.9974 35 11.5122 34.3352C10.1361 33.9725 9.0475 32.9048 8.67779 31.5549C8 29.0971 8 24 8 24C8 24 8 18.9029 8.65725 16.4652C9.02696 15.1154 10.1155 14.0476 11.4917 13.685C13.9769 13.0201 23.9795 13 23.9795 13C23.9795 13 33.982 13 36.4673 13.6648ZM29.0937 24L20.7959 28.7143V19.2857L29.0937 24Z"
        fill="#FF0000"
      />
    </svg>
  );
}
const Youtube = forwardRef(Root);
export default Youtube;
