import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import Widgets from "./components/widgets/Widgets";
import widgetData from "./widgets-data.json";
import { useState } from "react";
import { WidgetData } from "./types";

function App() {
  const [widgets, setWidgets] = useState<WidgetData>(widgetData.widgets);
  return (
    <>
      <Sidebar />
      <main className="pl-[100px] flex flex-col min-h-[100vh]">
        <Topbar widgets={widgets} setWidgets={setWidgets} />
        <Widgets widgets={widgets} />
      </main>
    </>
  );
}

export default App;
