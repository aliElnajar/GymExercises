import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  const slideHandler = () => {
    window.scrollTo({ top: -1800, behavior: "smooth" });
  };
  return (
    <Link
      className="exercise-card"
      to={`/exercises/${exercise.id}`}
      onClick={slideHandler}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            bgcolor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            bgcolor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        fontSize="22px"
        ml={3}
        color="#000"
        fontWeight="bold"
        mt={1.5}
        pb={2}
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
