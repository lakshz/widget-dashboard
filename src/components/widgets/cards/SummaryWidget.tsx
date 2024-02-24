import { SummaryWidgetData, WidgetBgColors } from "@/types";
import clsx from "clsx";
import { ColorsMapping } from "./DataWidget";
import { MoreHorizontal } from "lucide-react";

type SummaryWidgetProps = {
  bgColor: WidgetBgColors;
  data: SummaryWidgetData;
};

const SummaryWidget = ({ bgColor, data }: SummaryWidgetProps) => {
  return (
    <div
      className={clsx(
        `shadow-lg rounded-[20px] p-4 w-[325px] h-[300px] mr-8 mb-8`,
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
