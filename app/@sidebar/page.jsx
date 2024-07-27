import { PiImageSquareLight } from "react-icons/pi";
import { FaMeta, FaShopify, FaGear } from "react-icons/fa6";
const sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 bg-prim-dark-400 shadow-lg z-10">
      <div className="h-4/5 flex flex-col p-4 gap-8 items-center">
        <img src="/logo.png" alt="logo" />
        <PiImageSquareLight className="flex size-8 fill-prim-dark-50" />
        <FaMeta className="flex size-8 fill-prim-dark-50" />
        <FaShopify className="flex size-8 fill-prim-dark-50" />
       
      </div>
      <div className="h-1/5 flex flex-col justify-end p-4 gap-8 items-center">
          <FaGear className="flex size-8 fill-prim-dark-50" />
        </div>
    </div>
  );
};

export default sidebar;
