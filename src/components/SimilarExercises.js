import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { useProvider } from "../Store/GeneralContext";
const SimilarExercises = () => {
  const { similarities = [] } = useProvider();

  const randomNumber = Math.floor(Math.random() * 20);

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }, p: { lg: "20px", xs: "10px" } }}>
      {similarities.map((sim, index) => {
        console.log(sim);
        return (
          <Stack key={index}>
            <Typography variant="h4" my={5}>
              Exercises that have the same{" "}
              <span style={{ color: "red", textTransform: "uppercase" }}>
                {sim.name}
              </span>
              {/* {sim.name === "target" ? "the same muscle group" : "matching"} */}
            </Typography>
            <Stack direction="row" gap="30px" position="relative" p="2px">
              {sim.arr.slice(randomNumber, randomNumber + 3).map((item, i) => (
                <ExerciseCard key={i} exercise={item} />
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default SimilarExercises;
