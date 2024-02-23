import { SummaryWidgetData, WidgetBgColors } from "@/types";
import clsx from "clsx";
import { ColorsMapping } from "./DataWidget";
import { MoreHorizontal } from "lucide-react";

type SummaryWidgetProps = {
  bgColor: WidgetBgColors;
  start: [number, number];
  end: [number, number];
  data: SummaryWidgetData;
};

const SummaryWidget = ({ bgColor, start, end, data }: SummaryWidgetProps) => {
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
        <div className={clsx({ [ColorsMapping[bgColor].topNav1]: true })}>
          Today
        </div>
        <div
          className={clsx("cursor-pointer", {
            [ColorsMapping[bgColor].topNav2]: true,
          })}
        >
          <MoreHorizontal />
        </div>
      </div>
      <div
        className={clsx(
          "py-5 px-2 flex flex-col justify-center text-[0.95rem]",
          {
            [ColorsMapping[bgColor].values]: true,
          }
        )}
      >
        {data.text}
      </div>
    </div>
  );
};

export default SummaryWidget;
