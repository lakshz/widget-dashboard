import { WidgetBgColors } from "@/types";
import { ColorsMapping } from "./DataWidget";
import clsx from "clsx";

type CardNavigationProps = {
  bgColor: WidgetBgColors;
};

const CardNavigation = ({ bgColor }: CardNavigationProps) => {
  return (
    <div className="flex w-[60%] text-center">
      <div
        className={clsx(
          "basis-1/3 -mb-1 border-b-2 font-medium border-b-primary",
          {
            [ColorsMapping[bgColor].topNav1]: true,
          }
        )}
      >
        7d
      </div>
      <div
        className={clsx("cursor-pointer basis-1/3", {
          [ColorsMapping[bgColor].topNav2]: true,
        })}
      >
        14d
      </div>
      <div
        className={clsx("cursor-pointer basis-1/3", {
          [ColorsMapping[bgColor].topNav2]: true,
        })}
      >
        30d
      </div>
    </div>
  );
};

export default CardNavigation;
