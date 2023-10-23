import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Loader = () => {
  let loading = true;
  let color = "green";
  return (
    <div className="flex ms-[250px] mt-[20vh]">
      <ScaleLoader
        color={color}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
