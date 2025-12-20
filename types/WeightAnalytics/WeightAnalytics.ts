import { Dayjs } from "dayjs";

export enum WeightAnalyticsEnum {
  ZHIM_LEZHA = "Zhim_Lezha",
  STANOVAYA_TYAGA = "Stanovaya_Tyaga",
  PRISEDANYA_SO_SHTANGOI = "Prisedanya_So_Shtangoi",
}

export type WeightAnalytics<T extends WeightAnalyticsEnum> = {
  date: Dayjs;
  weight: number;
  type: T;
};
