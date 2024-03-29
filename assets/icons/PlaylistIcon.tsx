import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlaylistIcon() {
  return (
    <Svg width={18} height={15} viewBox="0 0 18 15" fill="none">
      <Path
        d="M6.198 2.682c-2.018 0-3.275 1.25-3.275 3.262v5.174h-.146C1.374 11.086.619 10.305.619 8.896V2.783c0-1.44.793-2.228 2.24-2.228h8.614c1.397 0 2.177.73 2.234 2.076v.05H6.198zm0 11.597c-1.453 0-2.24-.787-2.24-2.228V5.944c0-1.44.787-2.228 2.24-2.228h8.652c1.447 0 2.24.787 2.24 2.228v6.107c0 1.44-.793 2.228-2.24 2.228H6.198zm2.457-3.04c0 .304.336.45.61.291l3.776-2.196a.377.377 0 00-.006-.66l-3.77-2.21c-.274-.164-.61-.012-.61.306v4.468z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PlaylistIcon;
