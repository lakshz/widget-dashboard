import DataWidget from "./cards/DataWidget";
import widgetData from "../../widgets-data.json";
import {
  ChartTypes,
  DataWidgetData,
  SummaryWidgetData,
  WidgetBgColors,
  WidgetTypes,
} from "@/types";
import SummaryWidget from "./cards/SummaryWidget";
import ChartWidget from "./cards/ChartWidget";

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
          data={widget.data as DataWidgetData}
        />
      );
    } else if (widget.widgetType === WidgetTypes.SUMMARY) {
      return (
        <SummaryWidget
          key={widget.id}
          bgColor={widget.bgColor as WidgetBgColors}
          data={widget.data as SummaryWidgetData}
        />
      );
    } else if (widget.widgetType === WidgetTypes.GRAPH) {
      return (
        <ChartWidget
          key={widget.id}
          chartType={widget.chartType as ChartTypes}
          chartSeries={3}
          bgColor={widget.bgColor as WidgetBgColors}
        />
      );
    }
  }
  return (
    <div className="flex-1 flex w-full flex-wrap justify-start content-start bg-[rgb(244,244,255)] px-10 py-6">
      {widgets.map((widget) => {
        return content(widget);
      })}
    </div>
  );
};

export default Widgets;
