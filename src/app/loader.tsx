import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center p-4 min-h-50vh">
      <RotatingLines
        strokeColor="#083125"
        strokeWidth="5"
        animationDuration="2"
        width="140"
        visible={true}
      />
    </div>
  );
}
