import widgetData from "./widgets-data.json";

export enum WidgetBgColors {
  WHITE = "WHITE",
  PRIMARY = "PRIMARY",
  DARK = "DARK",
}

export enum WidgetTypes {
  DATA = "DATA",
  GRAPH = "GRAPH",
  SUMMARY = "SUMMARY",
}

export type DataWidgetData = {
  headingRow: string[];
  values: string[][];
  totalRow: string[];
};

export type SummaryWidgetData = {
  text: string;
};

export type ChartTypes = "ordinal" | "time";

export type WidgetData = typeof widgetData.widgets;
