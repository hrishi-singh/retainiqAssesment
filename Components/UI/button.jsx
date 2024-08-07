import React from "react";
import { FaPlus } from "react-icons/fa6";
const button = ({label,toggle,design=true}) => {
  if(toggle===true) toggle=false
  return (
    <div>
      <button className="flex m-4 p-2 bg-white rounded-lg shadow-md items-center" onClick={()=>(toggle(true))}>
        <FaPlus className="inline" />
         &nbsp;{label}
      </button>
    </div>
  );
};

export default button;

