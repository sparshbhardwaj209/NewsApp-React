import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center fs-4">
      <img
        className="my-3"
        src={loading}
        alt="loading"
        style={{ height: "50px", width: "35px" }}
      />
    </div>
  );
};

export default Spinner;
