"use client";

import React, { useState } from "react";
import { LuImage, LuFilter,LuSearch } from "react-icons/lu";
import { TbPlaystationCircle } from "react-icons/tb";
import Catalouge from "./catalouge.json";
import FilterTags from "./filterTags.json";
const ImageSelection = ({ showImages, showCatalouge, data, r, c, update }) => {
  const [isSelected, setIsSelected] = useState(
    [...Array(FilterTags.length)].fill(false)
  );
  const [tagLimit,setTagLimit]=useState(1);
  
  
  
  const updateRows = (event, ImageFileName) => {
    event.preventDefault();
    const newRow = [...data];
    newRow[r].Variants.splice(c, 1, ImageFileName);
    update(newRow);
    showCatalouge(false);
  };

  const addFilters = (event, tags, index) => {
    event.preventDefault();
    const newSelected = [...isSelected];
    setTagLimit(tagLimit+1);
    if(tagLimit===5)
      showCatalouge(false)
    newSelected[index] = true;
    setIsSelected(newSelected);

    const newRow = [...data];
    const newTag = {
      tagName: `${tags}`,
      tagStatus: true,
    };
    newRow[r].ProductFilters.splice(0, 0, newTag);
    update(newRow);
  };
  return (
    <div className="popup fixed top-0 left-0 w-full h-lvh z-20 bg-opacity-30 bg-prim-dark-50 flex justify-center items-center">
      <div className="popup-inner relative p-8 w-full max-w-screen-lg h-3/4 bg-white rounded-lg overflow-y-scroll">
        <div>
          <TbPlaystationCircle
            strokeWidth={0.1}
            color="#e2e8f0"
            className="absolute size-64 -top-16 -left-16 z-0 "
          />
          <div className="relative size-10">
            {showImages ? (
              <LuImage color="#04ae56" className="relative size-10 m-4 z-10" />
            ) : (
              <LuFilter color="#04ae56" className="relative size-10 m-4 z-10" />
            )}
            <div className="absolute top-0 left-4 size-10 bg-prim-green-50 blur z-0"></div>
          </div>
          <button
            className="close-btn absolute top-4 right-4"
            onClick={() => showCatalouge(false)}
          >
            X
          </button>
        </div>
        <div className="relative flex z-20 m-4">
          <div className="w-4/5">
            <h2 className="font-semibold text-2xl ">
              Select a {showImages ? "design" : "tag"} to link
            </h2>
            {!showImages && <span>select 5 most appropriate tags</span>}
          </div>
          <div className="inline-flex rounded-lg border-2 border-blue-200 items-center p-2 gap-1">
            <LuSearch strokeWidth={1}/>
            <input type="text" placeholder="Search" className="outline-slate-50 outline-4 text-prim-dark-200 cursor-not-allowed" disabled />
          </div>
        </div>
        <div className="mt-8 bg-slate-200 h-0.5 w-full"></div>
        {showImages ? (
          <div className="flex flex-wrap gap-4">
            {Catalouge.map((ImageDetails, index) => {
              return (
                <div className="m-3">
                  <div className="relative group">
                    <img
                      src={`Images/${ImageDetails.ImageFileName}.jpg`}
                      key={index}
                      className="flex bg-slate-700 size-48 rounded-md shadow-sm items-center justify-center"
                      alt=""
                    />
                    <button
                      className="absolute bottom-14 left-12 flex  m-4 p-2 bg-white rounded-lg 
                                shadow-md items-center opacity-0 group-hover:opacity-100"
                      onClick={(event) =>
                        updateRows(event, `${ImageDetails.ImageFileName}`)
                      }
                    >
                      Insert
                    </button>
                  </div>
                  <p className="flex w-48 text-wrap">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {FilterTags.map((tags, index) => {
              return (
                <button
                  className={`rounded-xl  border inline m-2 p-2 
                    ${
                      isSelected[index]
                        ? "border-prim-green-100 bg-prim-green-50 text-prim-green-100"
                        : "border-slate-400 bg-slate-100 text-slate-400"
                    } `}
                  key={index}
                  onClick={((event) => addFilters(event, tags, index))}
                >
                  {tags}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSelection;
