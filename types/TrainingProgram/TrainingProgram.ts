export type TrainingProgram = {
  id: string;
  name: string;
  trainingSets: TrainingSet[];
};

export type TrainingSet = {
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
};
