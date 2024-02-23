import DataWidget from "./cards/DataWidget";
import widgetData from "../../widgets-data.json";
import {
  DataWidgetData,
  SummaryWidgetData,
  WidgetBgColors,
  WidgetTypes,
} from "@/types";
import SummaryWidget from "./cards/SummaryWidget";

type WidgetsProps = {
  widgets: typeof widgetData.widgets;
};

const Widgets = ({ widgets }: WidgetsProps) => {
  function content(widget: (typeof widgets)[number]) {
    if (widget.widgetType === WidgetTypes.DATA) {
      return (
        <DataWidget
          key={widget.id}
          type={widget.dataType!}
          bgColor={widget.bgColor as WidgetBgColors}
          start={widget.start as [number, number]}
          end={widget.end as [number, number]}
          data={widget.data as DataWidgetData}
        />
      );
    } else if (widget.widgetType === WidgetTypes.SUMMARY) {
      return (
        <SummaryWidget
          key={widget.id}
          start={widget.start as [number, number]}
          end={widget.end as [number, number]}
          bgColor={widget.bgColor as WidgetBgColors}
          data={widget.data as SummaryWidgetData}
        />
      );
    }
  }
  return (
    <div className="min-h-[90vh] grid grid-cols-5 grid-rows-4 gap-8 bg-[rgb(244,244,255)] px-10 py-6">
      {widgets.map((widget) => {
        return content(widget);
      })}
    </div>
  );
};

export default Widgets;
