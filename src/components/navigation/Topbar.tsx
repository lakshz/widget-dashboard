import { Home, Plus, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddWidget from "../add-widget/AddWidget";
import { WidgetData } from "@/types";
import { useState } from "react";

type TopbarProps = {
  widgets: WidgetData;
  setWidgets: React.Dispatch<React.SetStateAction<WidgetData>>;
};

const Topbar = ({ widgets, setWidgets }: TopbarProps) => {
  const [addWidgetOpen, setAddWidgetOpen] = useState(false);
  return (
    <div className="shadow px-6 h-[10vh] flex items-center text-neutral-500">
      <div className="cursor-pointer mx-2">
        <Home size={26} />
      </div>
      <div className="flex ml-4 justify-between w-full">
        <Button
          variant="navigation"
          className="flex justify-center items-center"
        >
          <div className="mr-2">Customers</div>
          <div className="flex items-center justify-center ">
            <X />
          </div>
        </Button>
        <div className="h-full flex items-center gap-6">
          <Dialog open={addWidgetOpen} onOpenChange={setAddWidgetOpen}>
            <DialogTrigger>
              <Button
                variant="navigation"
                className="flex justify-center items-center"
              >
                <div className="flex items-center justify-center ">
                  <Plus />
                </div>
                <div className="ml-2">Add Widget</div>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[75vw] h-[70vh] p-5 rounded-lg">
              <AddWidget
                onSave={() => setAddWidgetOpen(false)}
                widgets={widgets}
                setWidgets={setWidgets}
              />
            </DialogContent>
          </Dialog>
          <div>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
