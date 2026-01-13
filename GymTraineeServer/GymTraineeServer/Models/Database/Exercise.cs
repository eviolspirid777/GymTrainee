using GymTraineeServer.Models.Programs;
using System.ComponentModel.DataAnnotations;

namespace GymTraineeServer.Models.Database
{
    public class Exercise
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        //TODO: VKCloudStorage??
        public string? ImageUrl { get; set; }
        public ExerciseTypeEnum Type { get; set; }
        public ExerciseTagEnum Tag { get; set; }
        public List<TrainingDayToExercise>? TrainingDayToExercise { get; set; } = new();
    }
    public enum ExerciseTypeEnum
    {
        // PLECHI
        OVERHEAD_PRESS,
        ZHIM_SHTANGI_SIDYA,
        ZHIM_GANTELEI_SIDYA,
        MAHI_GANTELEI_STOYA,
        OTZHIMANYA,

        // BICEPS
        PODNYATIE_SHTANGI_NA_BICEPS,
        PODNYATIE_SHTANGI_NA_BICEPS_OBRATNIM_HVATOM,
        MOLOTKI_NA_BICEPS,
        BICEPS_21,
        ZGIBANIE_RUK_S_GANTELYAMI,
        ZGIBANIE_RUK_SO_SHTANGOI_SREDNIM_HVATOM,
        BICEPS_SO_SHTANGOI_SKAMYA_SKOTTA,

        // TRICEPS
        VERHNII_BLOCK_S_VEREVKOI,
        FRANCUSKII_ZHIM,
        TYAGA_VERHNEGO_BLOCKA_IZ_ZA_GOLOVI,
        VIPRYAMLENIE_RUKI_POD_UGLOM_90_DEG,
        ZHIM_LEZHA_UZSKIM_HVATOM,
        ZHIM_GANTELI_IZ_ZA_GOLOVI,
        OBRATNIE_OTZHIMANIA,
        OTZHIMANYA_NA_BRUSYAH,

        // NOGI
        SQUATS,
        FRONTALNII_PRISED,
        RUMINSKAYA_TYAGA,
        BOLGARSKII_SPLIT_PRISED,
        ZHIM_NOGAMI,
        ZGIBANIE_NOG_LEZHA,
        RAZVODKA_NOG_SIDYA,

        // CORE
        BENCH_PRESS,
        SVEDENIYA_SIDYA,
        HAMMER,
        RAZVODKA_GANTELEI_35_DEG,
        RAZVODKA_GANTELEI,
        RAZVODKA_GANTELEI_V_NAKLONE,

        // SPINA
        DEAD_LIFT,
        PULL_UP,
        TYGA_VERHNEGO_BLOCKA,
        TYAGA_NIZHNEGO_BLOCK,
        TYAGA_SHTANGI_V_NAKLONE,
        PODTYAGIVANIA_V_TRENAZHERE,
        TYAGA_NIZHNEGO_BLOCKA_OBRATNIM_HVATOM,
        TYAGA_GANTELEI_K_POYASU_V_NAKLONE
    }
    public enum ExerciseTagEnum
    {
        CORE,
        BACK,
        SHOULDERS,
        LEGS,
        BICEPS,
        TRICEPS,
    }
}
