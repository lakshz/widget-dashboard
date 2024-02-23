import DataWidget, { WidgetBgColors } from "./cards/DataWidget";

import widgetsData from "./widgets-data.json";

const Widgets = () => {
  const widgets = widgetsData.widgets;
  return (
    <div className="min-h-[90vh] grid grid-cols-6 grid-rows-4 gap-8 bg-[rgb(244,244,255)] px-10 py-6">
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
