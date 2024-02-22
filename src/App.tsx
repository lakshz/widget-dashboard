import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <>
      <Sidebar />
      <main className="pl-[100px] flex flex-col">
        <Topbar />
        <Widgets />
      </main>
    </>
  );
}

export default App;
