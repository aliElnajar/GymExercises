import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Pagination,
  CircularProgress,Button
} from "@mui/material";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import { useProvider } from "../Store/GeneralContext";
const Exercises = () => {
  const { exercises, isLoading, error } = useProvider();
  const [currentPage, setCurrentPage] = useState(1);
  const paginateHandler = (_e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  if (error) {
    return (
      <div>
        <Typography variant='h5'>{error}</Typography>
        <Link>
          <Button variant='contained' color="error">Back home</Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <CircularProgress
        color="error"
        size="100px"
        sx={{ margin: "100px 600px" }}
      />
    );
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px", xs: "50px" }, p: "20px" }}>
      <Typography variant="h4" mb={6}>
        Showing results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{ gap: { lg: "110px", xs: "50px" }, justifyContent: "center" }}
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={12} alignItems="center">
        {exercises.length > 9 ? (
          <Pagination
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginateHandler}
          />
        ) : null}
      </Stack>
    </Box>
  );
};

export default Exercises;
