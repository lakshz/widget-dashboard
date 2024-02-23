import { WidgetBgColors } from "@/types";
import clsx from "clsx";

type SummaryWidgetProps = {
  bgColor: WidgetBgColors;
  start: [number, number];
  end: [number, number];
};

const SummaryWidget = ({ bgColor, start, end }: SummaryWidgetProps) => {
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
    ></div>
  );
};

export default SummaryWidget;
