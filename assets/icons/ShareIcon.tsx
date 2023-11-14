import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShareIcon() {
  return (
    <Svg width={31} height={30} viewBox="0 0 31 30" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.12 2.295c-.63-.63-1.708-.184-1.708.707v5.586c-5.816.905-12.085 3.499-12.909 14.468-.068.904.917 1.257 1.567.625 1.644-1.596 4.68-3.436 11.342-3.436v5.929c0 .89 1.077 1.337 1.707.707l10.879-10.879a2 2 0 000-2.828L17.119 2.294z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ShareIcon;
