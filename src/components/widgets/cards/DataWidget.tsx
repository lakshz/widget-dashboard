import { MoreHorizontal } from "lucide-react";
import clsx from "clsx";

export enum DataWidgetTypes {
  HISTORIC,
  RECENT,
}

export enum WidgetBgColors {
  WHITE = "WHITE",
  PRIMARY = "PRIMARY",
  DARK = "DARK",
}

type DataWidgetProps = {
  type: DataWidgetTypes;
  bgColor: WidgetBgColors;
  size: [number, number];
  data: {
    headingRow: string[];
    values: string[][];
    totalRow: string[];
  };
};

// based on the bg color, we map all the colors for widget text
const ColorsMapping = {
  [WidgetBgColors.WHITE]: {
    topNav: "text-primary",
    headingRow1: "text-primary",
    headingRow2: "text-[#9f9cfa]",
    values: "text-neutral-500",
    totalRow: "text-neutral-800",
  },
  [WidgetBgColors.PRIMARY]: {
    topNav: "text-white",
    headingRow1: "text-white font-medium",
    headingRow2: "text-neutral-200",
    values: "text-neutral-300",
    totalRow: "text-neutral-100",
  },
  [WidgetBgColors.DARK]: {
    topNav: "text-white",
    headingRow1: "text-white font-medium",
    headingRow2: "text-neutral-200",
    values: "text-neutral-200",
    totalRow: "text-white",
  },
};

const DataWidget = ({ bgColor, size, type, data }: DataWidgetProps) => {
  return (
    <div
      className={clsx("shadow-lg rounded-[20px] p-4 w-[300px]", {
        "bg-white": bgColor === WidgetBgColors.WHITE,
        "bg-primary": bgColor === WidgetBgColors.PRIMARY,
        "bg-neutral-800": bgColor === WidgetBgColors.DARK,
      })}
    >
      <div className="border-b border-b-neutral-200 pb-1 flex w-full justify-between">
        {type === DataWidgetTypes.HISTORIC ? (
          <div className="flex w-[60%] text-center">
            <div
              className={clsx(
                "basis-1/3 -mb-1 border-b-2 font-medium border-b-primary",
                {
                  [ColorsMapping[bgColor].topNav]: true,
                }
              )}
            >
              7d
            </div>
            <div className="cursor-pointer basis-1/3 text-neutral-500">14d</div>
            <div className="cursor-pointer basis-1/3 text-neutral-500">30d</div>
          </div>
        ) : (
          <div className="text-neutral-500">Today</div>
        )}
        <div className="text-neutral-400 cursor-pointer">
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

export default DataWidget;
