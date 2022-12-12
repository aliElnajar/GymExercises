import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SingleExerciseDetails from "../components/SingleExerciseDetails";
import SimilarExercises from "../components/SimilarExercises";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useProvider } from "../Store/GeneralContext";

const Exercise = () => {
  const { changeIdHandler, similarities, error } = useProvider();
  const { id } = useParams();

  useEffect(() => {
    changeIdHandler(id);
  }, [id]);

  if (error) {
    return (
      <div>
        <Typography variant="h5">{error}</Typography>
        <Link>
          <Button variant="contained" color="error">
            Back home
          </Button>
        </Link>
      </div>
    );
  }

  if (similarities.length < 1) {
    return (
      <CircularProgress
        color="error"
        size="200px"
        sx={{ margin: "200px 600px" }}
      />
    );
  }

  return (
    <Box Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <SingleExerciseDetails />
      <SimilarExercises />
    </Box>
  );
};

export default Exercise;
