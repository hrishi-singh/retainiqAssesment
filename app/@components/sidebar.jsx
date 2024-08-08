import { FaMeta, FaShopify } from "react-icons/fa6";
import { LuShirt, LuCreditCard, LuSettings, LuImage } from "react-icons/lu";
import { HiOutlineLightningBolt } from "react-icons/hi";
const sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 bg-prim-dark-400 shadow-lg z-10">
      <div className="h-4/5 flex flex-col p-4 gap-8 items-center ">
        <img src="/logo.png" alt="logo" />
        <HiOutlineLightningBolt color="#A6A6A6" className="size-7" />
        <LuImage color="#A6A6A6" className="size-7" />
        <FaMeta className="size-7 fill-prim-dark-50"/>
        <FaShopify className="size-7 fill-prim-dark-50" />
        <LuShirt color="#A6A6A6" className="size-7" />
      </div>

      <div className="h-1/5 flex flex-col justify-end p-4 gap-8 items-center">
        <LuCreditCard color="#A6A6A6" className="size-7" />
        <LuSettings color="#A6A6A6" className="size-7" />
      </div>
    </div>
  );
};

export default sidebar;
