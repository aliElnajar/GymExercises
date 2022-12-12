export const reducerfn = (state, action) => {
  if (action.type === "INITIAL_RENDER") {
    return { ...state, bodyParts: ["all", ...action.payload],error:'', };
  }
  if (action.type === "SEARCHING") {
    return { ...state, exerciseSearch: action.payload };
  }
  if (action.type === "ASSIGN_EXERCISES") {
    return { ...state, exercises: [...action.payload],error:'', };
  }
  if (action.type === "CHANGE_PART") {
    return { ...state, bodyPart: action.payload, exerciseSearch: "" };
  }
  if (action.type === "SET_ID") {
    return { ...state, id: action.payload };
  }
  if (action.type === "SINGLE_EXERCISE_DATA") {
    return {
      ...state,
      singleExercise: { ...action.payload.exercise },
      similarities: [
        {
          name: "target",
          arr: [...action.payload.target],
        },
        { name: "equipment", arr: [...action.payload.equipment] },
      ],error:'',
    };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "END_LOADING") {
    return { ...state, isLoading: false };
  }
  if (action.type === "HANDLE_ERRORS") {
    return { ...state, error: action.payload };
  }
  return { ...state };
};
