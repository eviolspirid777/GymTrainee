using GymTraineeServer.Models.Database;
using GymTraineeServer.Models.Programs;

namespace GymTraineeServer.Programs.UncleMisha
{
    public class UncleMisha : IProgram
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = "Тренировочная программа дяди Миши";
        public string Description { get; set; } = "Программа, для хорошего старта";
        public ITrainingDay[] TrainigDays { get; set; }

        public UncleMisha()
        {
            TrainigDays = new ITrainingDay[]
            {
                new TrainingDayModel
                {
                    TrainingNumber = 1,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (65 %)", MaxWeightCoef = 0.65, Passed = false, Reps = 10, Count = 3, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Сведения сидя", Passed = false, Reps = 10, Count = 3, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA },
                        new ExerciseModel { Name = "Тяга верхнего блока", Passed = false, Reps = 10, Count = 4, Type = ExerciseTypeEnum.TYGA_VERHNEGO_BLOCKA },
                        // reps array -> сохраняем первое значение (9)
                        new ExerciseModel { Name = "Хаммер", Passed = false, Reps = 9, Count = 4, Type = ExerciseTypeEnum.HAMMER },
                        // "max" репы -> Reps = null
                        new ExerciseModel { Name = "Тачка (подтягивания в тренажере)", Passed = false, Reps = null, Count = 4, Type = ExerciseTypeEnum.PODTYAGIVANIA_V_TRENAZHERE },
                        // reps array -> первое значение 12
                        new ExerciseModel { Name = "Поднятие штанги на бицепс", Passed = false, Reps = 12, Count = 4, Type = ExerciseTypeEnum.PODNYATIE_SHTANGI_NA_BICEPS }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 2,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (75 %)", MaxWeightCoef = 0.75, Passed = false, Reps = 5, Count = 6, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Разводка 35", Passed = false, Reps = 12, Count = 2, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI_35_DEG },
                        new ExerciseModel { Name = "Жим ногами", Passed = false, Reps = 12, Count = 4, Type = ExerciseTypeEnum.ZHIM_NOGAMI },
                        new ExerciseModel { Name = "Сгибания ног лежа", Passed = false, Reps = 10, Count = 3, Type = ExerciseTypeEnum.ZGIBANIE_NOG_LEZHA },
                        // reps array -> первое значение 12
                        new ExerciseModel { Name = "Бицепс со штангой", Passed = false, Reps = 12, Count = 4, Type = ExerciseTypeEnum.PODNYATIE_SHTANGI_NA_BICEPS },
                        new ExerciseModel { Name = "Тачка (подтягивания в тренажере)", Passed = false, Reps = 12, Count = 4, Type = ExerciseTypeEnum.PODTYAGIVANIA_V_TRENAZHERE }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 3,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (85 %)", MaxWeightCoef = 0.85, Passed = false, Reps = 3, Count = 10, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Сведения сидя", Count = 2, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 12 },
 
                        new ExerciseModel { Name = "Жим гантелей сидя", Count = 4, Type = ExerciseTypeEnum.ZHIM_GANTELEI_SIDYA, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Хаммер", Count = 5, Type = ExerciseTypeEnum.HAMMER, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга нижнего блока обратным хватом", Count = 4, Type = ExerciseTypeEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Бицепс со штангой", Count = 5, Type = ExerciseTypeEnum.PODNYATIE_SHTANGI_NA_BICEPS, Passed = false, Reps = 10 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 4,
                    Exercises = new IExercise[]
                    {
                        // Выражение 0.65 + 5 вычисляется в double (5.65)
                        new ExerciseModel { Name = "Жим Лежа (65% + 5кг)", MaxWeightCoef = 0.65 + 5, Passed = false, Reps = 3, Count = 10, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Разводка (ровно)", Count = 3, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Приседания со штангой", Count = 4, Type = ExerciseTypeEnum.SQUATS, Passed = false, Reps = 15 },
                        new ExerciseModel { Name = "Разводка ног сидя", Count = 4, Type = ExerciseTypeEnum.RAZVODKA_NOG_SIDYA, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Разводка гантелей", Count = 4, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Разводка гантелей в наклоне", Count = 4, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI_V_NAKLONE, Passed = false, Reps = 10 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 5,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (75% + 5кг)", MaxWeightCoef = 0.75 + 5, Passed = false, Reps = 6, Count = 5, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Сведения сидя", Count = 3, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга штанги в наклоне", Count = 4, Type = ExerciseTypeEnum.TYAGA_SHTANGI_V_NAKLONE, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга нижнего блока обратным хватом", Count = 4, Type = ExerciseTypeEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Тачка (подтягивания в тренажере)", Count = 4, Type = ExerciseTypeEnum.PODTYAGIVANIA_V_TRENAZHERE, Passed = false, Reps = null },
 
                        new ExerciseModel { Name = "Бицепс", Count = 5, Type = ExerciseTypeEnum.BICEPS_21, Passed = false, Reps = 10 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 6,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (85% + 5кг)", MaxWeightCoef = 0.85 + 5, Count = 10, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 3 },
 
                        new ExerciseModel { Name = "Разводка 35", Count = 2, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI_35_DEG, Passed = false, Reps = 10 },
 
                        new ExerciseModel { Name = "Приседания со штангой", Count = 4, Type = ExerciseTypeEnum.SQUATS, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Жим ногами", Count = 3, Type = ExerciseTypeEnum.ZHIM_NOGAMI, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Сгибание ног лежа", Count = 4, Type = ExerciseTypeEnum.ZGIBANIE_NOG_LEZHA, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Жим штанги сидя", Count = 4, Type = ExerciseTypeEnum.ZHIM_SHTANGI_SIDYA, Passed = false, Reps = 12 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 7,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (65% + 10кг)", MaxWeightCoef = 0.65 + 10, Count = 3, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Сведения сидя", Count = 3, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Тяга верхнего блока", Count = 4, Type = ExerciseTypeEnum.TYGA_VERHNEGO_BLOCKA, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Хаммер", Count = 3, Type = ExerciseTypeEnum.HAMMER, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга нижнего блока обратным хватом", Count = 3, Type = ExerciseTypeEnum.TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM, Passed = false, Reps = 10 },
 
                        new ExerciseModel { Name = "Сгибание рук с гантелями", Count = 5, Type = ExerciseTypeEnum.ZGIBANIE_RUK_S_GANTELYAMI, Passed = false, Reps = 10 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 8,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (75% + 10кг)", MaxWeightCoef = 0.75 + 5, Count = 6, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 5 },
                        new ExerciseModel { Name = "Разводка (ровно)", Count = 3, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Приседания со штангой", Count = 5, Type = ExerciseTypeEnum.SQUATS, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "c/c Жим + Сгибания лежа", Count = 3, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Разводка гантелей стоя", Count = 3, Type = ExerciseTypeEnum.MAHI_GANTELEI_STOYA, Passed = false, Reps = 10 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 9,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (85% + 10кг)", MaxWeightCoef = 0.85 + 5, Count = 10, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 3 },
                        new ExerciseModel { Name = "Сведения сидя", Count = 2, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Тяга штанги в наклоне", Count = 4, Type = ExerciseTypeEnum.TYAGA_SHTANGI_V_NAKLONE, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Тачка (подтягивания в тренажере)", Count = 4, Type = ExerciseTypeEnum.PODTYAGIVANIA_V_TRENAZHERE, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга гантели к поясу в наклоне", Count = 3, Type = ExerciseTypeEnum.TYAGA_GANTELEI_K_POYASU_V_NAKLONE, Passed = false, Reps = 6 },
 
                        new ExerciseModel { Name = "Поднятие штанги на бицепс обратным хватом", Count = 4, Type = ExerciseTypeEnum.PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM, Passed = false, Reps = 10 },
                        // "max" -> Reps = null
                        new ExerciseModel { Name = "Молотоки на бицепс", Count = 3, Type = ExerciseTypeEnum.MOLOTKI_NA_BICEPS, Passed = false, Reps = null }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 10,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (легкий)", Count = 3, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Разводка (ровно)", Count = 3, Type = ExerciseTypeEnum.RAZVODKA_GANTELEI, Passed = false, Reps = 12 },
                        new ExerciseModel { Name = "Фронтальный присед", Count = 4, Type = ExerciseTypeEnum.FRONTALNII_PRISED, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Румынская тяга", Count = 3, Type = ExerciseTypeEnum.RUMINSKAYA_TYAGA, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Болгарские сплит-приседы", Count = 3, Type = ExerciseTypeEnum.BOLGARSKII_SPLIT_PRISED, Passed = false, Reps = null },
                        new ExerciseModel { Name = "21 на бицепс", Count = 3, Type = ExerciseTypeEnum.BICEPS_21, Passed = false, Reps = 21 },
                        new ExerciseModel { Name = "Сгибание рук с гантелями", Count = 4, Type = ExerciseTypeEnum.ZGIBANIE_RUK_S_GANTELYAMI, Passed = false, Reps = null }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 11,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (70%)", MaxWeightCoef = 0.7, Count = 4, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 4 },
                        new ExerciseModel { Name = "Сведение сидя", Count = 2, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 15 },
                        new ExerciseModel { Name = "Становая тяга", Count = 4, Type = ExerciseTypeEnum.DEAD_LIFT, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга верхнего блока", Count = 5, Type = ExerciseTypeEnum.TYGA_VERHNEGO_BLOCKA, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Тяга нижнего блока", Count = 5, Type = ExerciseTypeEnum.TYAGA_NIZHNEGO_BLOCK, Passed = false, Reps = 10 },
                        new ExerciseModel { Name = "Подтягивания", Count = 3, Type = ExerciseTypeEnum.PODTYAGIVANIA_V_TRENAZHERE, Passed = false, Reps = null },
                        new ExerciseModel { Name = "Бицепс со штангой средним хватом стоя", Count = 4, Type = ExerciseTypeEnum.ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM, Passed = false, Reps = 10 },
                        // reps array -> первое значение 12
                        new ExerciseModel { Name = "Бицепс на скамье Скотта со штангой", Count = 4, Type = ExerciseTypeEnum.BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA, Passed = false, Reps = 12 }
                    }
                },
                new TrainingDayModel
                {
                    TrainingNumber = 12,
                    Exercises = new IExercise[]
                    {
                        new ExerciseModel { Name = "Жим Лежа (50%)", MaxWeightCoef = 0.5, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 8 },
                        new ExerciseModel { Name = "Жим Лежа (60%)", MaxWeightCoef = 0.6, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 5 },
                        new ExerciseModel { Name = "Жим Лежа (70%)", MaxWeightCoef = 0.7, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 4 },
                        new ExerciseModel { Name = "Жим Лежа (80%)", MaxWeightCoef = 0.8, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 3 },
                        new ExerciseModel { Name = "Жим Лежа (90%)", MaxWeightCoef = 0.9, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 2 },
                        new ExerciseModel { Name = "Жим Лежа (100%)", MaxWeightCoef = 1.0, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 1 },
                        new ExerciseModel { Name = "Жим Лежа (105%)", MaxWeightCoef = 1.05, Count = 1, Type = ExerciseTypeEnum.BENCH_PRESS, Passed = false, Reps = 1 },
                        new ExerciseModel { Name = "Сведения сидя", Count = 3, Type = ExerciseTypeEnum.SVEDENIYA_SIDYA, Passed = false, Reps = 10 }
                    }
                }
            };
        }
    }
}