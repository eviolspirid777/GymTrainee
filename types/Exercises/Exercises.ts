export enum ExercisesEnum {
  //PLECHI
  OVERHEAD_PRESS = "OverheadPress", //Жим над головой
  ZHIM_SHTANGI_SIDYA = "ZHIM_SHTANGI_SIDYA", //Жим штанги сидя
  ZHIM_GANTELEI_SIDYA = "ZHIM_GANTELEI_SIDYA", //Жим гантелей сидя
  MAHI_GANTELEI_STOYA = "MAHI_GANTELEI_STOYA", //Махи гантелей стоя

  //BICEPS
  PODNYATIE_SHTANGI_NA_BICEPS = "PODNYATIE_SHTANGI_NA_BICEPS", //Поднятие штанги на бицепс
  PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM = "PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM", //Поднятие штанги на бицепс обратным хватом
  MOLOTKI_NA_BICEPS = "MOLOTKI_NA_BICEPS", //Молотки на бицепс
  BICEPS_21 = "BICEPS_21", //21 на бицепс
  ZGIBANIE_RUK_S_GANTELYAMI = "ZGIBANIE_RUK_S_GANTELYAMI", //Сгибание рук с гантелями
  ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM = "ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM", //Сгибание рук со штангой средним хватом
  BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA = "BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA", //Бицепс на скамье Скотта со штангой

  //TRICEPS

  //NOGI
  SQUATS = "Squats", // Приседания
  FRONTALNII_PRISED = "FRONTALNII_PRISED", //Фронтальный присед
  RUMINSKAYA_TYAGA = "RUMINSKAYA_TYAGA", //Румынская тяга
  BOLGARSKII_SPLIT_PRISED = "BOLGARSKII_SPLIT_PRISED", //Болгарские сплит-приседы
  ZHIM_NOGAMI = "ZHIM_NOGAMI", //Жим ногами
  ZGIBANIE_NOG_LEZHA = "ZGIBANIE_NOG_LEZHA", //Сгибание ног лежа
  RAZVODKA_NOG_SIDYA = "RAZVODKA_NOG_SIDYA", //Разводка ног сидя

  //CORE
  BENCH_PRESS = "BenchPress", //Жим Лежа
  SVEDENIYA_SIDYA = "SVEDENIA_SIDYA", //Сведения сидя
  HAMMER = "Hammer", //Хаммер
  RAZVODKA_GANTELEI_35_DEG = "RAZVODKA_GANTELEI_35_DEG", //Разводка гантелей 35 градусов
  RAZVODKA_GANTELEI = "RAZVODKA_GANTELEI", //Разводка гантелей
  RAZVODKA_GANTELEI_V_NAKLONE = "RAZVODKA_GANTELEI_V_NAKLONE", //Разводка гантелей в наклоне

  //SPINA
  DEAD_LIFT = "DeadLift", //Становая тяга
  PULL_UP = "PullUp", //Подтягивания
  TYGA_VERHNEGO_BLOCKA = "TYGA_VERHNEGO_BLOCKA", //Тяга верхнего блока
  TYAGA_NIZHNEGO_BLOCK = "TYAGA_NIZHNEGO_BLOCK", //Тяга нижнего блока
  TYAGA_SHTANGI_V_NAKLONE = "TYAGA_SHTANGI_V_NAKLONE", //Тяга штанги в наклоне
  PODTYAGIVANIA_V_TRENAZHERE = "PODTYAGIVANYA_V_TRENAZHERE", //Подтягивания в тренажере
  TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM = "TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM", //Тяга нижнего блока обратным хватом
  TYAGA_GANTELEI_K_POYASU_V_NAKLONE = "TYAGA_GANTELEI_K_POYASU_V_NAKLONE", //Тяга гантелей к поясу в наклоне
}

export const russianExercisesDictionary = new Map<ExercisesEnum, string>([
  [ExercisesEnum.OVERHEAD_PRESS, "Жим над головой"],
  [ExercisesEnum.ZHIM_SHTANGI_SIDYA, "Жим штанги сидя"],
  [ExercisesEnum.ZHIM_GANTELEI_SIDYA, "Жим гантелей сидя"],
  [ExercisesEnum.MAHI_GANTELEI_STOYA, "Махи гантелей стоя"],
  [ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS, "Поднятие штанги на бицепс"],
  [
    ExercisesEnum.PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM,
    "Поднятие штанги на бицепс обратным хватом",
  ],
  [ExercisesEnum.MOLOTKI_NA_BICEPS, "Молотки на бицепс"],
  [ExercisesEnum.BICEPS_21, "21 на бицепс"],
  [ExercisesEnum.ZGIBANIE_RUK_S_GANTELYAMI, "Сгибание рук с гантелями"],
  [
    ExercisesEnum.ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM,
    "Сгибание рук со штангой средним хватом",
  ],
  [
    ExercisesEnum.BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA,
    "Бицепс на скамье Скотта со штангой",
  ],
  [ExercisesEnum.SQUATS, "Приседания"],
  [ExercisesEnum.FRONTALNII_PRISED, "Фронтальный присед"],
  [ExercisesEnum.RUMINSKAYA_TYAGA, "Румынская тяга"],
  [ExercisesEnum.BOLGARSKII_SPLIT_PRISED, "Болгарские сплит-приседы"],
  [ExercisesEnum.ZHIM_NOGAMI, "Жим ногами"],
  [ExercisesEnum.ZGIBANIE_NOG_LEZHA, "Сгибание ног лежа"],
  [ExercisesEnum.RAZVODKA_NOG_SIDYA, "Разводка ног сидя"],
  [ExercisesEnum.BENCH_PRESS, "Жим Лежа"],
  [ExercisesEnum.SVEDENIYA_SIDYA, "Сведения сидя"],
  [ExercisesEnum.HAMMER, "Хаммер"],
  [ExercisesEnum.RAZVODKA_GANTELEI_35_DEG, "Разводка гантелей 35 градусов"],
  [ExercisesEnum.RAZVODKA_GANTELEI, "Разводка гантелей"],
  [ExercisesEnum.RAZVODKA_GANTELEI_V_NAKLONE, "Разводка гантелей в наклоне"],
  [ExercisesEnum.DEAD_LIFT, "Становая тяга"],
  [ExercisesEnum.PULL_UP, "Подтягивания"],
  [ExercisesEnum.TYGA_VERHNEGO_BLOCKA, "Тяга верхнего блока"],
  [ExercisesEnum.TYAGA_NIZHNEGO_BLOCK, "Тяга нижнего блока"],
  [ExercisesEnum.TYAGA_SHTANGI_V_NAKLONE, "Тяга штанги в наклоне"],
  [ExercisesEnum.PODTYAGIVANIA_V_TRENAZHERE, "Подтягивания в тренажере"],
  [
    ExercisesEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM,
    "Тяга нижнего блока обратным хватом",
  ],
  [
    ExercisesEnum.TYAGA_GANTELEI_K_POYASU_V_NAKLONE,
    "Тяга гантелей к поясу в наклоне",
  ],
]);
