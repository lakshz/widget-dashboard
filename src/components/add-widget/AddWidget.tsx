import { History, LayoutDashboard, X } from "lucide-react";
import widgetData from "../../widgets-data.json";
import DataWidget from "../widgets/cards/DataWidget";
import { WidgetBgColors, WidgetTypes, WidgetData } from "@/types";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

type AddWidgetProps = {
  onSave: () => void;
  widgets: WidgetData;
  setWidgets: React.Dispatch<React.SetStateAction<WidgetData>>;
};

const AddWidget = ({ widgets, setWidgets, onSave }: AddWidgetProps) => {
  const [widgetType, setWidgetType] = useState<WidgetTypes>(WidgetTypes.DATA);
  const [colorType, setColorType] = useState(WidgetBgColors.WHITE);

  const handleTypeClick = (type: WidgetTypes) => {
    setWidgetType(type);
  };

  const handleColorClick = (color: WidgetBgColors) => {
    setColorType(color);
  };

  const handleAddWidget = () => {
    // add an existing widget based on type
    const index = widgets.findIndex(
      (item) => (item.widgetType as unknown as WidgetTypes) === widgetType
    );
    const newWidget = { ...widgets[index] };

    if (newWidget) {
      newWidget.id = (widgets.length + 1).toString();
      newWidget.bgColor = colorType;

      setWidgets((prev) => [...prev, newWidget]);
      onSave();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mt-5 pb-5 border-b border-b-neutral-200">
        <div className="flex items-center">
          <div className="border border-neutral-200 p-3 rounded-lg mr-3">
            <LayoutDashboard />
          </div>
          <div>
            <div className="text-primary text-2xl">Create Widget</div>
            <div className="text-neutral-500 text-lg">
              Manage the glossary of terms of your Database.
            </div>
          </div>
        </div>
        <div className="mr-4 text-neutral-400 w-1/3">
          <div className="border border-neutral-300 flex items-center justify-between py-2 px-5 rounded-lg w-full">
            <div className="text-lg">Reusablity Score</div>
            <div>
              <X className="text-neutral-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justift-between w-full py-3">
        <div className="w-2/3 relative bg-[rgb(244,244,255)] rounded-lg flex justify-center items-center">
          <DataWidget
            key={widgetData.widgets[0].id}
            type={widgetData.widgets[0].dataType!}
            bgColor={colorType}
            start={widgetData.widgets[0].start as [number, number]}
            end={widgetData.widgets[0].end as [number, number]}
            data={widgetData.widgets[0].data}
          />
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-center">
            <div
              className={clsx(
                `rounded-full h-[2rem] w-[2rem] bg-white mr-2 cursor-pointer`,
                {
                  "outline outline-4 outline-gray-300":
                    WidgetBgColors.WHITE === colorType,
                }
              )}
              onClick={() => handleColorClick(WidgetBgColors.WHITE)}
            ></div>
            <div
              className={clsx(
                `rounded-full bg-primary h-[2rem] w-[2rem] mr-2 cursor-pointer`,
                {
                  "outline outline-4 outline-gray-300":
                    WidgetBgColors.PRIMARY === colorType,
                }
              )}
              onClick={() => handleColorClick(WidgetBgColors.PRIMARY)}
            ></div>
            <div
              className={clsx(
                `rounded-full bg-neutral-700 h-[2rem] w-[2rem] cursor-pointer`,
                {
                  "outline outline-4 outline-gray-300":
                    WidgetBgColors.DARK === colorType,
                }
              )}
              onClick={() => handleColorClick(WidgetBgColors.DARK)}
            ></div>
          </div>
        </div>
        <div className="w-1/3 px-4 flex flex-col">
          <p className="text-neutral-300 uppercase mb-2">Components</p>
          <div>
            <div
              className={clsx(
                "py-4 px-3 border border-neutral-300 rounded-xl mb-5 cursor-pointer",
                {
                  "border-2 border-primary shadow-md":
                    widgetType === WidgetTypes.DATA,
                }
              )}
              onClick={() => handleTypeClick(WidgetTypes.DATA)}
            >
              <p className="text-neutral-700 text-lg mb-1">Data</p>
              <p className="text-neutral-400 text-sm">Random Description</p>
            </div>
            <div
              className={clsx(
                "py-4 px-3 border border-neutral-300 rounded-xl mb-5 cursor-pointer",
                {
                  "border-2 border-primary shadow":
                    widgetType === WidgetTypes.GRAPH,
                }
              )}
              onClick={() => handleTypeClick(WidgetTypes.GRAPH)}
            >
              <p className="text-neutral-700 text-lg mb-1">Graph</p>
              <p className="text-neutral-400 text-sm">Random Description</p>
            </div>
            <div
              className={clsx(
                "py-4 px-3 border border-neutral-300 rounded-xl mb-5 cursor-pointer",
                {
                  "border-2 border-primary shadow":
                    widgetType === WidgetTypes.SUMMARY,
                }
              )}
              onClick={() => handleTypeClick(WidgetTypes.SUMMARY)}
            >
              <p className="text-neutral-700 text-lg mb-1">Summary</p>
              <p className="text-neutral-400 text-sm">Random Description</p>
            </div>
          </div>
          <div className="flex-1 flex items-end">
            <div className="flex w-full justify-between">
              <div className="w-[18%] flex justify-center items-center border border-neutral-200 rounded-lg text-neutral-500 bg-[rgb(244,244,255)]">
                <History />
              </div>
              <div className="w-[38%]">
                <DialogClose className="w-full">
                  <Button variant="secondary" className="w-full py-3">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
              <div className="w-[38%]">
                <Button
                  variant="primary"
                  onClick={handleAddWidget}
                  className="w-full py-23"
                >
                  Save
                </Button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
