import DataWidget, { WidgetBgColors } from "./cards/DataWidget";

import widgetsData from "./widgets-data.json";

const Widgets = () => {
  const widgets = widgetsData.widgets;
  return (
    <div className="h-[90vh] bg-[#f4f4ff] px-10 py-6">
      <DataWidget
        type={widgets[0].dataType!}
        bgColor={widgets[0].bgColor as WidgetBgColors}
        size={widgets[0].size as [number, number]}
        data={widgets[0].data}
      />
    </div>
  );
};

export default Widgets;
