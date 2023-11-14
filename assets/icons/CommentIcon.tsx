import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CommentIcon() {
  return (
    <Svg width={31} height={30} viewBox="0 0 31 30" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5 13.5c0 .427-.027.848-.08 1.262-.405 4.328-4.21 10.093-12.263 13.01a.491.491 0 01-.657-.466v-2.314A15.96 15.96 0 0116 25C8.544 25 2.5 19.851 2.5 13.5S8.544 2 16 2s13.5 5.149 13.5 11.5zm-19 2.5a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm8-2a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CommentIcon;
