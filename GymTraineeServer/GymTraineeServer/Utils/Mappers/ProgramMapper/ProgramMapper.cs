using GymTraineeServer.Models.Database;
using GymTraineeServer.Models.DTO;
using Riok.Mapperly.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;

namespace GymTraineeServer.Utils.Mappers.ProgramMapper
{
    [Mapper]
    public partial class ProgramMapper
    {
        [MapProperty(nameof(Models.Database.Program.TrainigDays), nameof(ProgramDTO.TrainingDays))]
        public static partial ProgramDTO MapProgramToProgramDTO(Models.Database.Program program);
        [MapperIgnoreSource(nameof(TrainingDay.Id))]
        [MapperIgnoreSource(nameof(TrainingDay.Id))]
        private static partial TrainingDayDTO MapTrainingDayToTrainingDayDTO(Models.Database.TrainingDay trainingDay);

        [MapEnum(EnumMappingStrategy.ByName)]
        private static partial string MapTypeToTypeString(ExerciseTypeEnum type);
        private static ExerciseDTO MapTrainingDaytoExerciseToExerciseDTO(Models.Database.TrainingDayToExercise trainingDayToExercise)
        {
            return new ExerciseDTO()
            {
                Name = trainingDayToExercise.Exercise.Name,
                MaxWeightCoef = trainingDayToExercise.MaxWeightCoef,
                Count = trainingDayToExercise.Count,
                Reps = trainingDayToExercise.Reps,
                Passed = trainingDayToExercise.Passed,
                Type = MapTypeToTypeString(trainingDayToExercise.Exercise.Type)
            };
        }
    }
}
