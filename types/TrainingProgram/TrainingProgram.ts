export type TrainingProgram = {
  id: string;
  name: string;
  trainingDays: TrainingDay[];
  results?: {
    passedTrainings: number;
  };
  information?: {
    description: string;
  };
};

export type TrainingDay = {
  trainingNumber: number;
  exercises: Exercise[];
};

export type Exercise = {
  name: string;
  weight?: (maxWeight: number) => void | number;
  //Подходы
  count: number;
  //Повторения
  reps: number | number[] | "max";
  //Завершенность упраженения
  passed?: boolean;
};
