import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledPicker, StyledPickerData } from "@/shared/components/StyledPicker";
import { StyledText } from "@/shared/components/StyledText";
import { StyledTextInput } from "@/shared/components/StyledTextInput";
import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { FC, useState } from "react";
import { Keyboard, Modal, StyleSheet, Vibration, View } from "react-native";

type RecordsModalProps = {
  isModalVisible: boolean;
  exercises: StyledPickerData[],
  onFinish: (newRecord: RecordType) => void;
  onClose: () => void;
};

export const RecordsAddModal: FC<RecordsModalProps> = ({
  isModalVisible,
  exercises,
  onFinish,
  onClose,
}) => {
  const [exercisesData, setExercisesData] = useState<RecordType>({
    name: "",
    reps: "",
    weight: "",
  });
  const [error, setError] = useState<string>();

  const handleCloseModal = () => {
    onClose();
    setExercisesData({
      name: "",
      reps: "",
      weight: "",
    });
  };

  const handleCloseRecordsModal = () => {
    if (!exercisesData.name || !exercisesData.reps || !exercisesData.weight) {
      setError("Заполните все поля!");
      return;
    }

    Keyboard.dismiss();
    onFinish(exercisesData);
    handleCloseModal();
    Vibration.vibrate(3);
  };

  const changeText = (value: string, field: keyof RecordType) => {
    setExercisesData((prev) => ({ ...prev, [field]: value }));
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
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modal}>
        <View style={styles["modal-container"]}>
          <StyledText label="Упражнение:" />
          <StyledPicker data={exercises} onValueChange={v => changeExerciseName(v as ExercisesEnum)}/>
          <StyledText label="Вес:" />
          <StyledTextInput
            keyboardType="numeric"
            placeholder="Вес (кг)"
            style={styles["text-input"]}
            value={exercisesData.weight}
            onChangeText={(weight) => changeText(weight, "weight")}
          />
          <StyledText label="Кол-во раз:" />
          <StyledTextInput
            keyboardType="numeric"
            placeholder="Кол-во раз"
            style={styles["text-input"]}
            value={exercisesData.reps}
            onChangeText={(reps) => changeText(reps, "reps")}
          />
          {error && (
            <StyledText label={error} type="error" variant="subtitle" />
          )}
          <StyledButton
            style={styles["submit-button"]}
            icon={{
              direction: "before",
              type: "plus",
            }}
            onPress={handleCloseRecordsModal}
            disabled={!!error}
          >
            <StyledText label="Добавить" />
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
