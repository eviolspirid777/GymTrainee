import { Dayjs } from "dayjs";

export type RecordType = {
  id?: string;
  date?: Dayjs;
  weight: string;
  reps: string;
  name: string | "Жим лежа" | "Становая тяга" | "Приседания со штангой";
};
