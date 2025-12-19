import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledPicker, StyledPickerData } from "@/shared/components/StyledPicker";
import { StyledText } from "@/shared/components/StyledText";
import { StyledTextInput } from "@/shared/components/StyledTextInput";
import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { FC, useEffect, useState } from "react";
import { Keyboard, Modal, StyleSheet, Vibration, View } from "react-native";

type RecordsModalProps = {
  exercises: StyledPickerData[],
  record?: RecordType;
  isModalVisible: boolean;
  onFinish: (newRecord: RecordType) => void;
};

export const RecordsEditModal: FC<RecordsModalProps> = ({
  record,
  isModalVisible,
  onFinish,
  exercises,
}) => {
  const [exercisesData, setExercisesData] = useState<RecordType | undefined>(
    record
  );
  const selectedValue: string = exercises.find(
    e => e.label.trim().toLowerCase() === (exercisesData?.name ?? "").trim().toLowerCase()
  )?.value
  const isSelectDisabled = ["DeadLift", "BenchPress", "prisedanya_so_shtangoi"].includes(selectedValue)

  useEffect(() => {
    if (record) {
      setExercisesData(record);
    }
  }, [record]);

  const [error, setError] = useState<string>();

  const handleCloseRecordsModal = () => {
    if (
      !exercisesData?.name ||
      !exercisesData?.reps ||
      !exercisesData?.weight
    ) {
      setError("Заполните все поля!");
      return;
    }

    Keyboard.dismiss();
    onFinish(exercisesData);
    Vibration.vibrate(3);
  };

  const changeText = (value: string, field: keyof RecordType) => {
    setExercisesData((prev) => {
      if (!prev) return prev;
      return { ...prev, [field]: value };
    });
    setError(undefined);
  };

  const changeExerciseName = (val: ExercisesEnum) => {
    const value = russianExercisesDictionary.get(val);
    if(value) {
      changeText(value, "name")
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isModalVisible}
      onRequestClose={handleCloseRecordsModal}
    >
      <View style={styles.modal}>
        <View style={styles["modal-container"]}>
          <StyledText label="Упражнение:" />
          <StyledPicker
            data={exercises}
            selectedValue={selectedValue} 
            onValueChange={v => changeExerciseName(v as ExercisesEnum)}
            disabled={isSelectDisabled}
          />
          <StyledText label="Вес:" />
          <StyledTextInput
            keyboardType="numeric"
            placeholder="Вес (кг)"
            style={styles["text-input"]}
            value={exercisesData?.weight}
            onChangeText={(weight) => changeText(weight, "weight")}
          />
          <StyledText label="Кол-во раз:" />
          <StyledTextInput
            keyboardType="numeric"
            placeholder="Кол-во раз"
            style={styles["text-input"]}
            value={exercisesData?.reps}
            onChangeText={(reps) => changeText(reps, "reps")}
            disabled={["zhim_lezha", "stanovaya_tyaga", "prisedanya_so_shtangoi"].includes(record?.id ?? "")}
          />
          {error && (
            <StyledText label={error} type="error" variant="subtitle" />
          )}
          <StyledButton
            style={styles["submit-button"]}
            icon={{
              direction: "before",
              type: "edit",
            }}
            onPress={handleCloseRecordsModal}
            disabled={!!error}
          >
            <StyledText label="Изменить" />
          </StyledButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY_COLOR,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  "modal-container": {
    width: "90%",
    gap: 20,
  },
  "text-input": {
    color: COLORS.TEXT_COLOR,
  },
  "submit-button": {
    marginTop: 20,
  },
});
