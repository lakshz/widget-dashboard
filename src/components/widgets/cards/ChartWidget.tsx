import React from "react";
import { GanttChartSquare, MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import { WidgetBgColors } from "@/types";
import CardNavigation from "./CardNavigation";
import { ColorsMapping } from "./DataWidget";
import useChartConfig from "@/hooks/useChart";
import { AxisOptions, Chart } from "react-charts";

type ChartWidgetProps = {
  bgColor: WidgetBgColors;
  start: [number, number];
  end: [number, number];
  chartType: "ordinal" | "time";
  chartSeries: number;
};

const ChartWidget = ({
  bgColor,
  start,
  end,
  chartType,
  chartSeries,
}: ChartWidgetProps) => {
  const { data } = useChartConfig({
    series: chartSeries,
    dataType: chartType,
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );
  return (
    <div
      className={clsx(
        `shadow-lg rounded-[20px] p-4 w-[300px] h-[300px] mr-8 mb-8`,
        // `shadow-lg rounded-[20px] p-4 row-start-1 row-end-2 col-start-1 col-end-2`,
        {
          "bg-white": bgColor === WidgetBgColors.WHITE,
          "bg-primary": bgColor === WidgetBgColors.PRIMARY,
          "bg-neutral-800": bgColor === WidgetBgColors.DARK,
        }
      )}
    >
      <div className="border-b pb-1 flex w-full justify-between">
        <CardNavigation bgColor={bgColor} />
        <div
          className={clsx("cursor-pointer", {
            [ColorsMapping[bgColor].topNav2]: true,
          })}
        >
          <MoreHorizontal />
        </div>
      </div>
      <div className="py-5 px-2 flex flex-col justify-center text-[0.95rem]">
        <div className=" h-[200px]">
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartWidget;
