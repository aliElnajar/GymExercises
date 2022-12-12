import React, { useContext, useReducer, useEffect } from "react";
import { fetchData, exercises_URL, exercises_OPTIONS } from "../utils/helpers";
import { reducerfn } from "./reducer";
const Context = React.createContext();

const initialState = {
  id: "",
  exerciseSearch: "",
  exercises: [],
  bodyParts: [],
  bodyPart: "all",
  singleExercise: {},
  similarities: [],
  isLoading: false,
  error: "",
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerfn, initialState);

  //  BODYPARTS ASSIGN
  useEffect(() => {
    const fetchBodyParts = async () => {
      const partsData = await fetchData(
        `${exercises_URL}/bodyPartList`,
        exercises_OPTIONS
      );
      if (partsData.error) {
        dispatch({ type: "HANDLE_ERRORS", payload: partsData.error });
        return;
      }

      dispatch({ type: "INITIAL_RENDER", payload: partsData });
    };
    fetchBodyParts();
  }, []);

  //ALL EXERCISES ASSIGN
  const searchHandler = (value) => {
    dispatch({ type: "SEARCHING", payload: value });
  };

  useEffect(() => {
    const fetchExercises = async () => {
      dispatch({ type: "SET_LOADING" });
      let exerciseData = [];
      if (state.exerciseSearch) {
        exerciseData = await fetchData(exercises_URL, exercises_OPTIONS);
        if (exerciseData.error) {
          dispatch({ type: "HANDLE_ERRORS", payload: exerciseData.error });
          return;
        }
        const filteredExercises = await exerciseData.filter((exercise) => {
          return (
            exercise.name.toLowerCase().includes(state.exerciseSearch) ||
            exercise.target.toLowerCase().includes(state.exerciseSearch) ||
            exercise.equipment.toLowerCase().includes(state.exerciseSearch) ||
            exercise.bodyPart.toLowerCase().includes(state.exerciseSearch)
          );
        });

        dispatch({
          type: "ASSIGN_EXERCISES",
          payload: filteredExercises,
        });
      } else if (state.bodyPart === "all" && !state.exerciseSearch) {
        exerciseData = await fetchData(exercises_URL, exercises_OPTIONS);
        dispatch({
          type: "ASSIGN_EXERCISES",
          payload: exerciseData,
        });
      } else {
        exerciseData = await fetchData(
          `${exercises_URL}/bodyPart/${state.bodyPart}`,
          exercises_OPTIONS
        );
        dispatch({
          type: "ASSIGN_EXERCISES",
          payload: exerciseData,
        });
      }
      dispatch({ type: "END_LOADING" });
    };
    fetchExercises();
  }, [state.bodyPart, state.exerciseSearch]);

  // CHANGING PART
  const bodyPartChangeHandler = (value) => {
    dispatch({ type: "CHANGE_PART", payload: value });
  };

  // SINGLE EXERCISE AND ITS SIMILARITIES ASSIGN
  const changeIdHandler = (id) => {
    dispatch({ type: "SET_ID", payload: id });
  };

  useEffect(() => {
    const fetchingsingleExercise = async () => {
      const exerciseDetail = await fetchData(
        `${exercises_URL}/exercise/${state.id}`,
        exercises_OPTIONS
      );
      if (exerciseDetail.error) {
        dispatch({ type: "HANDLE_ERRORS", payload: exerciseDetail.error });
        return;
      }
      const targetExerciseData = await fetchData(
        `${exercises_URL}/target/${exerciseDetail.target}`,
        exercises_OPTIONS
      );

      const equipmentExerciseData = await fetchData(
        `${exercises_URL}/equipment/${exerciseDetail.equipment}`,
        exercises_OPTIONS
      );

      dispatch({
        type: "SINGLE_EXERCISE_DATA",
        payload: {
          exercise: exerciseDetail,
          target: targetExerciseData,
          equipment: equipmentExerciseData,
        },
      });
    };
    fetchingsingleExercise();
  }, [state.id]);

  return (
    <Context.Provider
      value={{
        ...state,
        searchHandler,
        bodyPartChangeHandler,
        changeIdHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};

export default useProvider;
