import { RecordType } from "@/types/RecordsType/RecordsType";
import { atom } from "jotai";

export const recordsAtom = atom<RecordType[]>();
