import { ExercisesEnum } from "./Exercises";

import BICEPS_21 from "@/assets/exercises/BICEPS_21.gif";
import BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA from "@/assets/exercises/BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA.gif";
import BOLGARSKII_SPLIT_PRISED from "@/assets/exercises/BOLGARSKII_SPLIT_PRISED.gif";
import DEAD_LIFT from "@/assets/exercises/DEAD_LIFT.gif";
import FRONTALNII_PRISED from "@/assets/exercises/FRONTALNII_PRISED.webp";
import HAMMER from "@/assets/exercises/HAMMER.webp";
import mahi_gantelei_stoya from "@/assets/exercises/mahi_gantelei_stoya.gif";
import MOLOTKI_NA_BICEPS from "@/assets/exercises/MOLOTKI_NA_BICEPS.gif";
import podnyatie_shtangi_na_biceps from "@/assets/exercises/podnyatie_shtangi_na_biceps.gif";
import PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM from "@/assets/exercises/PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM.gif";
import PODTYAGIVANIA_V_TRENAZHERE from "@/assets/exercises/PODTYAGIVANIA_V_TRENAZHERE.gif";
import PULL_UP from "@/assets/exercises/PULL_UP.gif";
import RAZVODKA_GANTELEI from "@/assets/exercises/RAZVODKA_GANTELEI.gif";
import RAZVODKA_GANTELEI_35_DEG from "@/assets/exercises/RAZVODKA_GANTELEI_35_DEG.gif";
import RAZVODKA_GANTELEI_V_NAKLONE from "@/assets/exercises/RAZVODKA_GANTELEI_V_NAKLONE.gif";
import RAZVODKA_NOG_SIDYA from "@/assets/exercises/RAZVODKA_NOG_SIDYA.gif";
import RUMINSKAYA_TYAGA from "@/assets/exercises/RUMINSKAYA_TYAGA.gif";
import SQUATS from "@/assets/exercises/SQUATS.gif";
import SVEDENIYA_SIDYA from "@/assets/exercises/SVEDENIYA_SIDYA.gif";
import TYAGA_GANTELEI_K_POYASU_V_NAKLONE from "@/assets/exercises/TYAGA_GANTELEI_K_POYASU_V_NAKLONE.gif";
import TYAGA_NIZHNEGO_BLOCK from "@/assets/exercises/TYAGA_NIZHNEGO_BLOCK.gif";
import TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM from "@/assets/exercises/TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM.webp";
import TYAGA_SHTANGI_V_NAKLONE from "@/assets/exercises/TYAGA_SHTANGI_V_NAKLONE.gif";
import TYGA_VERHNEGO_BLOCKA from "@/assets/exercises/TYGA_VERHNEGO_BLOCKA.gif";
import ZGIBANIE_NOG_LEZHA from "@/assets/exercises/ZGIBANIE_NOG_LEZHA.gif";
import ZGIBANIE_RUK_S_GANTELYAMI from "@/assets/exercises/ZGIBANIE_RUK_S_GANTELYAMI.gif";
import ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM from "@/assets/exercises/ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM.gif";
import zhim_gantelei_sidya from "@/assets/exercises/zhim_gantelei_sidya.gif";
import zhim_lezha from "@/assets/exercises/zhim_lezha.gif";
import zhim_nad_golovoi from "@/assets/exercises/zhim_nad_golovoi.gif";
import ZHIM_NOGAMI from "@/assets/exercises/ZHIM_NOGAMI.webp";
import zhim_shtangi_sidya from "@/assets/exercises/zhim_shtangi_sidya.gif";

export const techniqueImages = new Map([
  [ExercisesEnum.OVERHEAD_PRESS, zhim_nad_golovoi],
  [ExercisesEnum.ZHIM_SHTANGI_SIDYA, zhim_shtangi_sidya],
  [ExercisesEnum.ZHIM_GANTELEI_SIDYA, zhim_gantelei_sidya],
  [ExercisesEnum.MAHI_GANTELEI_STOYA, mahi_gantelei_stoya],
  [ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS, podnyatie_shtangi_na_biceps],
  [
    ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM,
    PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM,
  ],
  [ExercisesEnum.MOLOTKI_NA_BICEPS, MOLOTKI_NA_BICEPS],
  [ExercisesEnum.BICEPS_21, BICEPS_21],
  [ExercisesEnum.ZGIBANIE_RUK_S_GANTELYAMI, ZGIBANIE_RUK_S_GANTELYAMI],
  [
    ExercisesEnum.ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM,
    ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM,
  ],
  [
    ExercisesEnum.BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA,
    BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA,
  ],
  [ExercisesEnum.SQUATS, SQUATS],
  [ExercisesEnum.FRONTALNII_PRISED, FRONTALNII_PRISED],
  [ExercisesEnum.RUMINSKAYA_TYAGA, RUMINSKAYA_TYAGA],
  [ExercisesEnum.BOLGARSKII_SPLIT_PRISED, BOLGARSKII_SPLIT_PRISED],
  [ExercisesEnum.ZHIM_NOGAMI, ZHIM_NOGAMI],
  [ExercisesEnum.ZGIBANIE_NOG_LEZHA, ZGIBANIE_NOG_LEZHA],
  [ExercisesEnum.RAZVODKA_NOG_SIDYA, RAZVODKA_NOG_SIDYA],
  [ExercisesEnum.BENCH_PRESS, zhim_lezha],
  [ExercisesEnum.SVEDENIYA_SIDYA, SVEDENIYA_SIDYA],
  [ExercisesEnum.HAMMER, HAMMER],
  [ExercisesEnum.RAZVODKA_GANTELEI_35_DEG, RAZVODKA_GANTELEI_35_DEG],
  [ExercisesEnum.RAZVODKA_GANTELEI, RAZVODKA_GANTELEI],
  [ExercisesEnum.RAZVODKA_GANTELEI_V_NAKLONE, RAZVODKA_GANTELEI_V_NAKLONE],
  [ExercisesEnum.DEAD_LIFT, DEAD_LIFT],
  [ExercisesEnum.PULL_UP, PULL_UP],
  [ExercisesEnum.TYGA_VERHNEGO_BLOCKA, TYGA_VERHNEGO_BLOCKA],
  [ExercisesEnum.TYAGA_NIZHNEGO_BLOCK, TYAGA_NIZHNEGO_BLOCK],
  [ExercisesEnum.TYAGA_SHTANGI_V_NAKLONE, TYAGA_SHTANGI_V_NAKLONE],
  [ExercisesEnum.PODTYAGIVANIA_V_TRENAZHERE, PODTYAGIVANIA_V_TRENAZHERE],
  [
    ExercisesEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM,
    TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM,
  ],
  [
    ExercisesEnum.TYAGA_GANTELEI_K_POYASU_V_NAKLONE,
    TYAGA_GANTELEI_K_POYASU_V_NAKLONE,
  ],
]);
