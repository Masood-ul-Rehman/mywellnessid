import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
    </div>
  );
}

export default Spinner;
