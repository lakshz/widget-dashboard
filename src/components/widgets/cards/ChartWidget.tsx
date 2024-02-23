import { MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import { WidgetBgColors } from "@/types";
import CardNavigation from "./CardNavigation";
import { ColorsMapping } from "./DataWidget";

export enum DataWidgetTypes {
  HISTORIC,
  RECENT,
}

type DataWidgetProps = {
  type: DataWidgetTypes;
  bgColor: WidgetBgColors;
  start: [number, number];
  end: [number, number];
  data: {
    headingRow: string[];
    values: string[][];
    totalRow: string[];
  };
};

const ChartWidget = ({ bgColor, start, end, type, data }: DataWidgetProps) => {
  return (
    <div
      className={clsx(
        `shadow-lg rounded-[20px] p-4 row-start-${start[0]} row-end-${end[0]} col-start-${start[1]} col-end-${end[1]}`,
        // `shadow-lg rounded-[20px] p-4 row-start-1 row-end-2 col-start-1 col-end-2`,
        {
          "bg-white": bgColor === WidgetBgColors.WHITE,
          "bg-primary": bgColor === WidgetBgColors.PRIMARY,
          "bg-neutral-800": bgColor === WidgetBgColors.DARK,
        }
      )}
    >
      <div className="border-b pb-1 flex w-full justify-between">
        {type === DataWidgetTypes.HISTORIC ? (
          <CardNavigation bgColor={bgColor} />
        ) : (
          <div className={clsx({ [ColorsMapping[bgColor].topNav2]: true })}>
            Today
          </div>
        )}
        <div
          className={clsx("cursor-pointer", {
            [ColorsMapping[bgColor].topNav2]: true,
          })}
        >
          <MoreHorizontal />
        </div>
      </div>
      <div className="py-5 px-2 flex flex-col justify-center text-[0.95rem]">
        <table>
          <thead>
            <tr className="grid grid-cols-3 gap-1 text-center">
              {data.headingRow.map((s, i) => {
                return (
                  <th
                    key={i}
                    className={clsx("uppercase text-[0.98rem] mb-1", {
                      "text-left": i === 0,
                      [ColorsMapping[bgColor].headingRow1]: i === 0,
                      [ColorsMapping[bgColor].headingRow2]: i !== 0,
                    })}
                  >
                    {s}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.values.map((row, i) => (
              <tr
                key={i}
                className={clsx("grid grid-cols-3 gap-1 text-center", {
                  [ColorsMapping[bgColor].values]: true,
                })}
              >
                <td className="text-left">{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
            <tr
              className={clsx(
                "grid grid-cols-3 gap-1 text-center text-[0.98rem] mt-1",
                {
                  [ColorsMapping[bgColor].totalRow]: true,
                }
              )}
            >
              <td className="text-left">{data.totalRow[0]}</td>
              <td>{data.totalRow[1]}</td>
              <td>{data.totalRow[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartWidget;
