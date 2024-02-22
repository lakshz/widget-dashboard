import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="pl-[100px] ">
        <Topbar />
      </main>
    </>
  );
}

export default App;
