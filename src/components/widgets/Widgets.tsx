import DataWidget from "./cards/DataWidget";
import widgetData from "../../widgets-data.json";
import { WidgetBgColors } from "@/types";

type WidgetsProps = {
  widgets: typeof widgetData.widgets;
};

const Widgets = ({ widgets }: WidgetsProps) => {
  return (
    <div className="min-h-[90vh] grid grid-cols-5 grid-rows-4 gap-8 bg-[rgb(244,244,255)] px-10 py-6">
      {widgets.map((widget) => (
        <DataWidget
          key={widget.id}
          type={widget.dataType!}
          bgColor={widget.bgColor as WidgetBgColors}
          start={widget.start as [number, number]}
          end={widget.end as [number, number]}
          data={widget.data}
        />
      ))}
    </div>
  );
};

export default Widgets;
