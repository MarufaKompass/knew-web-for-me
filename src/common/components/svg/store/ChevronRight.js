import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#0C1E21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
const ChevronRight = forwardRef(Root);
export default ChevronRight;
