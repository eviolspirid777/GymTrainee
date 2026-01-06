export type RecordType = {
  id?: string;
  date?: string;
  weight: string;
  reps: string;
  name: string | "Жим лежа" | "Становая тяга" | "Приседания со штангой";
};
