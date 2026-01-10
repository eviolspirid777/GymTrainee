using GymTraineeServer.Models.Database;
using GymTraineeServer.Models.Programs;

namespace GymTraineeServer.Programs.Muravev
{
    public class MuravevProgram : IProgram
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = "Тренировочная программа Муравьева";
        public string Description { get; set; } = "Программа, чтобы пробить мертвую точку в жиме лежа";
        public ITrainingDay[] TrainigDays { get; set; }

        public MuravevProgram()
        {
            TrainigDays =
            [
                new TrainingDayModel
                {
                    TrainingNumber = 1,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 3, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (67,5%)", MaxWeightCoef = 0.675, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 2,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (70%). Последнее повторение с паузой", MaxWeightCoef = 0.7, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 5, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 3,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (70%). Последнее повторение с паузой", MaxWeightCoef = 0.7, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (77.5%)", MaxWeightCoef = 0.775, Count = 3, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 4,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%). Последнее повторение с паузой", MaxWeightCoef = 0.725, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (77.5%)", MaxWeightCoef = 0.775, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (82.5%)", MaxWeightCoef = 0.825, Count = 4, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 5,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (67.5%)", MaxWeightCoef = 0.675, Count = 4, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 6,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (77.5%)", MaxWeightCoef = 0.775, Count = 4, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 7,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (80%)", MaxWeightCoef = 0.8, Count = 4, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 8,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (77.5%)", MaxWeightCoef = 0.775, Count = 1, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (82.5%)", MaxWeightCoef = 0.825, Count = 1, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 3, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 9,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 3, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (70%)", MaxWeightCoef = 0.7, Count = 4, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (77.5%)", MaxWeightCoef = 0.775, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 10,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (77.5%)", MaxWeightCoef = 0.775, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (80%)", MaxWeightCoef = 0.8, Count = 4, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 11,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (80%). Последний раз в каждом подходе с паузой", MaxWeightCoef = 0.8, Count = 4, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 12,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (80%). Последний раз с паузой", MaxWeightCoef = 0.8, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 3, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 13,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 4, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(82.5%)", MaxWeightCoef = 0.825, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 14,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (80%)", MaxWeightCoef = 0.8, Count = 4, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(82.5%)", MaxWeightCoef = 0.825, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 15,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (82.5%)", MaxWeightCoef = 0.825, Count = 3, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(85%)", MaxWeightCoef = 0.85, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 16,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62,5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (85%)", MaxWeightCoef = 0.85, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(87.5%)", MaxWeightCoef = 0.875, Count = 3, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 17,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (65%)", MaxWeightCoef = 0.65, Count = 1, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 4, Reps = 8, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (87.5%)", MaxWeightCoef = 0.875, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 18,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62.5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (82.5%)", MaxWeightCoef = 0.825, Count = 3, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (87.5%)", MaxWeightCoef = 0.875, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 19,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (62.5%)", MaxWeightCoef = 0.625, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (72.5%)", MaxWeightCoef = 0.725, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 3, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой (90%)", MaxWeightCoef = 0.9, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 20,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (65%)", MaxWeightCoef = 0.65, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (87.5%)", MaxWeightCoef = 0.875, Count = 2, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(90%)", MaxWeightCoef = 0.9, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 21,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (65%)", MaxWeightCoef = 0.65, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 3, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(90%)", MaxWeightCoef = 0.9, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 22,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (65%)", MaxWeightCoef = 0.65, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 1, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (90%)", MaxWeightCoef = 0.9, Count = 3, Reps = 2, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(92.5%)", MaxWeightCoef = 0.925, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                },
                new TrainingDayModel
                {
                    TrainingNumber = 23,
                    Exercises =
                    [
                        new ExerciseModel { Name = "Жим лежа (65%)", MaxWeightCoef = 0.65, Count = 1, Reps = 5, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (75%)", MaxWeightCoef = 0.75, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (85%)", MaxWeightCoef = 0.85, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа c паузой (87.5%)", MaxWeightCoef = 0.875, Count = 1, Reps = 3, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (90%)", MaxWeightCoef = 0.9, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа с паузой(92.5%)", MaxWeightCoef = 0.925, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS },
                        new ExerciseModel { Name = "Жим лежа (95%)", MaxWeightCoef = 0.95, Count = 1, Reps = 1, Passed = false, Type = ExerciseTypeEnum.BENCH_PRESS }
                    ]
                }
            ];
        }
    }
}