"use client";
import { FaEllipsisVertical, FaPlus, FaGripVertical } from "react-icons/fa6";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import data from "./data.json";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BTN from '../../Components/UI/button';
import Design from '../popup/page';
import "react-toastify/dist/ReactToastify.css";

const table = () => {
  const [showDesign,setShowDesign] =useState(false);
  const [rows, setRows] = useState(data);
  const dragRow =useRef(0);
  const draggedOverRow=useRef(0);
  const [fixedVariants,setFixedVariants] = useState(["Primary Variant", "Variant 2"]);
  const [rowIndex,setRowIndex]=useState(-1);
  const [colmIndex,setColmIndex]=useState(-1);
  const columns=[]



  const addColumn = (event) =>{
    event.preventDefault;
    // const newColumn = ["Variant"];
    // const newColumns = [newColumn];
    // setColumns(newColumn);
    const newRows=[...rows]
    for(let i=0;i<newRows.length;i++)
    {
      newRows[i].Variants.push("");
    }
    setFixedVariants([...fixedVariants,"Variant"])
    setRows(newRows)
    console.log(columns)
    toast.success("Variant Added");
  };


  const addRow = (event) => {
    event.preventDefault();
    const newRow = {
      ProductFilters: [],
      Variants: [...Array((rows[0].Variants.length))].fill(""),
    };
    const newRows = [...rows, newRow];
    setRows(newRows);
    toast.success("State Added");
  };



  const deleteRow = (event, index) => {
    event.preventDefault();
    const newRow = [...rows];
    newRow.splice(index, 1);
    setRows(newRow);
    toast.success("State Removed");
  };

  const deleteColumn = (event, index) => {
    event.preventDefault();
    // const newColumns = [...columns];
    // newColumns.splice(index, 1);
    // setColumns(newColumns);
    const newRow = [...rows];
    const newColmHeader=[...fixedVariants];
    newColmHeader.splice(index,1);
    for(let i=0;i<newRow.length;i++){
      newRow[i].Variants.splice(index,1);
    }
    setFixedVariants(newColmHeader)
    // newRow.splice(index, 1);
    setRows(newRow);

    toast.success("Variant Removed");
  };

  const handleDrag =()=>{
    const newRow=[...rows]
    const element=newRow.splice(dragRow.current,1)[0];
    newRow.splice(draggedOverRow.current,0,element)
    setRows(newRow)
  }

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
             {/*fixed variants i.e. Primary Variant and variant 2 mapping in Tables*/}
            {fixedVariants.map((variant, index) => (
              <th className=" w-60 -z-50">
                <div className="flex w-100 justify-center items-center">
                  <span
                    className="text-prim-dark-100 font-medium w-3/5"
                    key={index+1000}
                  >
                    {index<2?variant:`Variant ${index+1}`}
                  </span>
                  <div className="flex gap-2 w-1/5">
                   {(index>1) && <FaRegTrashAlt
                      className="fill-red-600  cursor-pointer"
                      onClick={(event) => deleteColumn(event, index)}
                    />}
                    <FaEllipsisVertical />
                  </div>
                </div>
              </th>
            ))}
            {/*Columns mapping in Tables*/}
            {columns.map((column, index) => (
              <th className=" w-60 -z-50">
                <div className="flex w-100 items-center">
                  <span
                    className="text-prim-dark-100 font-medium w-3/5"
                    key={index+2000}
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

        <tbody>
          {rows.map((detail, index) => (
            <tr className="group" 
            draggable
            onDragStart={()=>(dragRow.current=index)}
            onDragEnter={()=>(draggedOverRow.current=index)}
            onDragEnd={handleDrag}
            onDragOver={(e)=>e.preventDefault()}
            >
              {/*1st Column data indexing*/}
              <td className="font-reloceta text-4xl bg-slate-100 font-bold sticky left-0 z-10 -ml-5">
                <div className="bg-slate-100 ml-5">
                  <FaRegTrashAlt
                    className="fill-red-600 size-8 m-2 opacity-0 group-hover:opacity-100 cursor-pointer" key={index+3000}
                    onClick={(event) => deleteRow(event, index)}
                  />
                  <div className="inline-flex">
                    {index + 1}&nbsp;
                    <FaGripVertical />
                  </div>
                </div>
              </td>

              {/*2nd Column Filters*/}
              <td className="bg-slate-100 sticky left-20 z-20">
                <div
                  className="flex bg-white m-4 p-5 h-48 rounded-lg shadow-sm items-center justify-center"
                >
                  {detail.ProductFilters.length !== 0 ? (
                    detail.ProductFilters.map((tag, index1) => (
                      <span
                        className="rounded-xl bg-slate-100 text-slate-400 border border-slate-400 inline m-2 p-2"
                        key={index1+4000}
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <div>
                      <BTN label="Add Product Filters" design={false} />
                    </div>
                    
                  )}
                </div>
              </td>
              {(detail.Variants).map((variant, index2) => (
                <td>
                  <div
                    className="flex flex-col w-100 bg-white m-4 p-3 min-h-48 w-48 rounded-md shadow-sm items-center justify-center"
                  >
                    <span  key={index2+5000}></span>
                    {
                      (variant.length===0)? (
                        <div>
                          {console.log(`BEFORE row index: ${rowIndex} and colm index: ${colmIndex}`)}
                          <BTN label={"Add Design"} toggle={setShowDesign} design={true} r={index} c={index2} rowIndexfn={setRowIndex} colmIndexfn={setColmIndex} />

                        </div>
                      ):(
                        <div className="flex flex-col items-center gap-4">
                        {console.log(`AFTER row index: ${rowIndex} and colm index: ${colmIndex}`)}
                          <div className="relative">
                            <img
                              src={`images/${variant}.jpg`}
                              className="size-28 rounded-lg"
                              alt="design 1"
                            />
  
                            <button className="absolute bottom-7 left-7 flex size-8 m-4 p-2 bg-white 
                                              rounded-lg shadow-md items-center opacity-0 group-hover:opacity-100"
                                              onClick={()=>(setShowDesign(true))}>
                              <FaEdit />
                            </button>
                          </div>
  
                          <p className="text-sm">{`${variant.slice(
                            0,
                            20
                          )}...`}</p>
                        </div>
                      )       
                    }
                  </div>
                </td>
              ))}
              {columns.map((index3) => (
                <td>
                  <div className="flex bg-white m-4 p-3 min-h-48 w-48 rounded-md shadow-sm items-center" key={index3+6000}>
                  {/* <BTN label="Add Design" toggle={setShowDesign} /> */}
                  <BTN label={"Add Design"} toggle={setShowDesign} design={true} r={index} c={index3} rowIndexfn={setRowIndex} colmIndexfn={setColmIndex} />
                  </div>
                </td>
              ))}
              {/*Add column btn*/}
              <td>
                <button
                  className="m-4 p-3 bg-white rounded-lg shadow-sm"
                  onClick={addColumn}
                >
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
      {showDesign && <Design toggle={setShowDesign} data={rows} r={rowIndex} c={colmIndex}  update={setRows}/>}
          {/* {(showDesign) && updateImage(rowIndex,colmIndex)} */}
          {console.log(rows)}


      {/*notification alert styling*/}
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
