import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HeartIcon() {
  return (
    <Svg width={31} height={30} viewBox="0 0 31 30" fill="none">
      <Path
        d="M29.5 9.992c0 8.453-8.45 14.977-12.22 17.468a3.195 3.195 0 01-3.559-.002C9.952 24.963 1.5 18.428 1.5 9.992c0-1.678.514-3.312 1.468-4.673a7.796 7.796 0 013.85-2.909 7.58 7.58 0 014.779-.046A7.785 7.785 0 0115.5 5.197a7.785 7.785 0 013.903-2.833 7.58 7.58 0 014.779.046 7.796 7.796 0 013.85 2.909A8.142 8.142 0 0129.5 9.992z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HeartIcon;
