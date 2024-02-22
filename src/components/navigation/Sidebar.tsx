import logo from "@/assets/logo.svg";
import { Activity, MessagesSquare, Layers3, BarChartBig } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-white w-[100px] py-10 flex flex-col items-center shadow">
      <div className="h-[40px] w-[40px] mb-10">
        <img className="w-full" src={logo} alt="logo" />
      </div>
      <div className="mb-10">
        <Activity size={32} className="text-neutral-400" />
      </div>
      <div className="mb-10">
        <MessagesSquare size={32} className="text-neutral-400" />
      </div>
      <div className="mb-10">
        <Layers3 size={32} className="text-neutral-400" />
      </div>
      <div className="mb-10 bg-neutral-200 p-2 rounded-lg">
        <BarChartBig size={32} className="text-neutral-600" />
      </div>
    </div>
  );
};

export default Sidebar;
