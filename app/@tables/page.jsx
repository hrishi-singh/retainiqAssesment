"use client";
import { FaEllipsisVertical, FaPlus, FaGripVertical } from "react-icons/fa6";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import data from "./data.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import { PiPlaceholder } from "react-icons/pi";

const table = () => {
  const [details, setDetails] = useState(data);
  const [columns, setColumns] = useState([]);

  const fixedVariants = ["Primary Variant", "Variant 2"];
  const addColumn = (event) => {
    event.preventDefault;
    const newColumn = "Variant";
    const newColumns = [...columns, newColumn];
    setColumns(newColumns);
    toast.success("Variant Added");
  };
  const addRow = (event) => {
    event.preventDefault();
    const newDetail = {
      ProductFilters: [],
      Variants: ["", ""],
    };
    const newDetails = [...details, newDetail];
    setDetails(newDetails);
    toast.success("State Added");
  };

  const deleteRow = (event, index) => {
    event.preventDefault();
    const newDetail = [...details];
    newDetail.splice(index, 1);
    setDetails(newDetail);
    toast.success("State Removed");
  };

  const deleteColumn = (event, index) => {
    event.preventDefault();
    console.log(index);
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
    toast.success("Variant Removed");
  };
  return (
    <div className="overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <th className="sticky -left-1 z-0 bottom-0">
                <div className="block size-24 bg-slate-100 -mr-1">&nbsp;</div>
              </th>
              <th className="text-prim-dark-100 font-medium min-w-96 h-20 bg-slate-100 sticky left-20 z-0 bottom-0">
                Product Filters
              </th>
              {fixedVariants.map((variant, index) => (
                <th className=" w-60 -z-50">
                  <div className="flex w-100 items-center">
                    <span
                      className="text-prim-dark-100 font-medium w-4/5"
                      key={index}
                    >
                      {variant}
                    </span>
                    <div>
                      <FaEllipsisVertical className="w-1/5" />
                    </div>
                  </div>
                </th>
              ))}
              {columns.map((column, index) => (
                <th className=" w-60 -z-50">
                  <div className="flex w-100 items-center">
                    <span
                      className="text-prim-dark-100 font-medium w-3/5"
                      key={index}
                    >{`${column} ${index + 3}`}</span>
                    <div className="flex gap-3">
                      <FaRegTrashAlt
                        className="fill-red-600  cursor-pointer"
                        onClick={(event) => deleteColumn(event, index)}
                      />
                      <FaEllipsisVertical className="w-2/5" />
                    </div>
                  </div>
                </th>
              ))}
              <th>&nbsp;</th>
            </tr>
          </thead>

              <tbody >
                {details.map((detail, index) => (
                 
                      <tr className="group">
                        {/*1st Column data indexing*/}
                        <td className="font-reloceta text-4xl bg-slate-100 font-bold sticky left-0 z-10 -ml-5">
                          <div className="bg-slate-100 ml-5" key={index}>
                            <FaRegTrashAlt
                              className="fill-red-600 size-8 m-2 opacity-0 group-hover:opacity-100 cursor-pointer"
                              onClick={(event) => deleteRow(event, index)}
                            />
                            <div className="inline-flex">
                              {index + 1}&nbsp;
                              <FaGripVertical  />
                            </div>
                          </div>
                        </td>

                        {/*2nd Column Filters*/}
                        <td className="bg-slate-100 sticky left-20 z-20">
                          <div
                            className="flex bg-white m-4 p-5 h-48 rounded-lg shadow-sm items-center justify-center"
                            key={index}
                          >
                            {detail.ProductFilters.length !== 0 ? (
                              detail.ProductFilters.map((tag, index1) => (
                                <span
                                  className="rounded-xl bg-slate-100 text-slate-400 border border-slate-400 inline m-2 p-2"
                                  key={index1}
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <button className="flex w-100 m-4 p-2 bg-white rounded-lg shadow-md items-center">
                                <FaPlus className="inline" /> &nbsp;Add Product
                                Filters
                              </button>
                            )}
                          </div>
                        </td>
                        {detail.Variants.map((variant, index) => (
                          <td>
                            <div
                              className="flex flex-col w-100 bg-white m-4 p-3 min-h-48 w-48 rounded-md shadow-sm items-center justify-center"
                              key={index}
                            >
                              {variant ? (
                                <div className="flex flex-col  items-center gap-4">
                                  <div className="relative">
                                    <img
                                      src={`images/${variant}.jpg`}
                                      className="size-28 rounded-lg"
                                      alt="design 1"
                                    />

                                    <button className="absolute bottom-7 left-7 flex size-8 m-4 p-2 bg-white rounded-lg shadow-md items-center opacity-0 group-hover:opacity-100">
                                      <FaEdit />
                                    </button>
                                  </div>

                                  <p className="text-sm">{`${variant.slice(
                                    0,
                                    20
                                  )}...`}</p>
                                </div>
                              ) : (
                                <button className="flex m-4 p-2 bg-white rounded-lg shadow-md items-center">
                                  <FaPlus className="inline" /> &nbsp;Add Design
                                </button>
                              )}
                            </div>
                          </td>
                        ))}
                        {columns.map((index) => (
                          <td>
                            <div className="flex bg-white m-4 p-3 min-h-48 w-48 rounded-md shadow-sm items-center">
                              <button
                                className="flex w-100 m-4 p-2 bg-white rounded-lg shadow-md items-center"
                                key={index}
                              >
                                <FaPlus className="inline" /> &nbsp;Add Design
                              </button>
                            </div>
                          </td>
                        ))}

                        {/*Add column btn*/}
                        <td>
                          <button
                            className="m-4 p-3 bg-white rounded-lg shadow-sm"
                            onClick={addColumn}
                          >
                            {/* add colm function added */}
                            <FaPlus />
                          </button>
                        </td>
                      </tr>
                  
                 
                ))}
            
              </tbody>
          
        </table>
      <button
        className="m-4 p-3 bg-white rounded-lg shadow-sm"
        onClick={addRow}
      >
        <FaPlus />
      </button>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default table;
