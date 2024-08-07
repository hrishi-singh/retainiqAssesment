import React from "react";
import { LuImage } from "react-icons/lu";
import Catalouge from "./catalouge.json";

const ImageSelection = ({toggle,getImage}) => {
  const handleGetImage=(url)=>{
    getImage(url)
    toggle(false)
  }
  return (
    <div className="popup fixed top-0 left-0 w-full h-lvh z-20 bg-opacity-30 bg-prim-dark-50 flex justify-center items-center">
      <div className="popup-inner relative p-8 w-full max-w-screen-lg h-3/4 bg-white rounded-lg overflow-y-scroll">
        <div>
          <LuImage color="#04ae56"  className="size-10 m-4"/>
          <button
            className="close-btn absolute top-4 right-4"
            onClick={() => toggle(false)}
          >
            X
          </button>
        </div>
        <div className="flex">
          <h2 className="font-semibold w-3/4">Select a design to link</h2>
          <p>Serarch box</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {
            Catalouge.map((ImageDetails,index)=>{
              return(
                <div className="m-3">
                  <div className="relative group">

              <img src={`Images/${ImageDetails.ImageFileName}.jpg`} key={index}  className="flex bg-slate-700 size-48 rounded-md shadow-sm items-center justify-center" alt="" />
              <button className="absolute bottom-14 left-12 flex  m-4 p-2 bg-white rounded-lg 
                                shadow-md items-center opacity-0 group-hover:opacity-100"
                                onClick={()=>handleGetImage(`${ImageDetails.ImageFileName}`)}
                                >
                    Insert</button>
                  </div>
              <p>Lorem ipsum, </p>
            </div>
              )
            })
          }
            
            
        </div>
      </div>
    </div>
  );
};
// ImageSelection.defaultProps={
//   toggle: false
// }

export default ImageSelection;
