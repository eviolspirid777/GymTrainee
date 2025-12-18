import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { ExerciseTag } from "@/types/ExerciseTag/ExerciseTag";

export const exercisesTagParser = new Map<ExercisesEnum, ExerciseTag>([
  [ExercisesEnum.OVERHEAD_PRESS, ExerciseTag.SHOULDERS],
  [ExercisesEnum.ZHIM_SHTANGI_SIDYA, ExerciseTag.SHOULDERS],
  [ExercisesEnum.ZHIM_GANTELEI_SIDYA, ExerciseTag.SHOULDERS],
  [ExercisesEnum.MAHI_GANTELEI_STOYA, ExerciseTag.SHOULDERS],
  [ExercisesEnum.OTZHIMANYA, ExerciseTag.SHOULDERS],

  [ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS, ExerciseTag.BICEPS],
  [
    ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM,
    ExerciseTag.BICEPS,
  ],
  [ExercisesEnum.MOLOTKI_NA_BICEPS, ExerciseTag.BICEPS],
  [ExercisesEnum.BICEPS_21, ExerciseTag.BICEPS],
  [ExercisesEnum.ZGIBANIE_RUK_S_GANTELYAMI, ExerciseTag.BICEPS],
  [ExercisesEnum.ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM, ExerciseTag.BICEPS],
  [ExercisesEnum.BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA, ExerciseTag.BICEPS],

  [ExercisesEnum.VERHNII_BLOCK_S_VEREVKOI, ExerciseTag.TRICEPS],
  [ExercisesEnum.FRANCUSKII_ZHIM, ExerciseTag.TRICEPS],
  [ExercisesEnum.TYAGA_VERHNEGO_BLOCKA_IZ_ZA_GOLOVI, ExerciseTag.TRICEPS],
  [ExercisesEnum.VIPRYAMLENIE_RUKI_POD_UGLOM_90_DEG, ExerciseTag.TRICEPS],
  [ExercisesEnum.ZHIM_LEZHA_UZSKIM_HVATOM, ExerciseTag.TRICEPS],
  [ExercisesEnum.ZHIM_GANTELI_IZ_ZA_GOLOVI, ExerciseTag.TRICEPS],
  [ExercisesEnum.OBRATNIE_OTZHIMANIA, ExerciseTag.TRICEPS],
  [ExercisesEnum.OTZHIMANYA_NA_BRUSYAH, ExerciseTag.TRICEPS],

  [ExercisesEnum.SQUATS, ExerciseTag.LEGS],
  [ExercisesEnum.FRONTALNII_PRISED, ExerciseTag.LEGS],
  [ExercisesEnum.RUMINSKAYA_TYAGA, ExerciseTag.LEGS],
  [ExercisesEnum.BOLGARSKII_SPLIT_PRISED, ExerciseTag.LEGS],
  [ExercisesEnum.ZHIM_NOGAMI, ExerciseTag.LEGS],
  [ExercisesEnum.ZGIBANIE_NOG_LEZHA, ExerciseTag.LEGS],
  [ExercisesEnum.RAZVODKA_NOG_SIDYA, ExerciseTag.LEGS],

  [ExercisesEnum.BENCH_PRESS, ExerciseTag.CORE],
  [ExercisesEnum.SVEDENIYA_SIDYA, ExerciseTag.CORE],
  [ExercisesEnum.HAMMER, ExerciseTag.CORE],
  [ExercisesEnum.RAZVODKA_GANTELEI_35_DEG, ExerciseTag.CORE],
  [ExercisesEnum.RAZVODKA_GANTELEI, ExerciseTag.CORE],
  [ExercisesEnum.RAZVODKA_GANTELEI_V_NAKLONE, ExerciseTag.CORE],

  [ExercisesEnum.DEAD_LIFT, ExerciseTag.BACK],
  [ExercisesEnum.PULL_UP, ExerciseTag.BACK],
  [ExercisesEnum.TYGA_VERHNEGO_BLOCKA, ExerciseTag.BACK],
  [ExercisesEnum.TYAGA_NIZHNEGO_BLOCK, ExerciseTag.BACK],
  [ExercisesEnum.TYAGA_SHTANGI_V_NAKLONE, ExerciseTag.BACK],
  [ExercisesEnum.PODTYAGIVANIA_V_TRENAZHERE, ExerciseTag.BACK],
  [ExercisesEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM, ExerciseTag.BACK],
  [ExercisesEnum.TYAGA_GANTELEI_K_POYASU_V_NAKLONE, ExerciseTag.BACK],
]);
