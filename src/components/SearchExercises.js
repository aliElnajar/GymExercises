import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalExercisesbar from "./HorizontalExercisesbar";
import useProvider from "../Store/GeneralContext";
const SearchExercises = () => {
  const { searchHandler } = useProvider();
  const [search, SetSearch] = useState("");

  const clickHandler = async () => {
    searchHandler(search);
    SetSearch("");
  };
  return (
    <Stack alignItems="center" justifyContent="center" mt={4} p={4}>
      <Typography
        sx={{
          fontSize: { lg: "44px", sm: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
        fontWeight={700}
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            bgcolor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          placeholder="search exercise"
          type="text"
          value={search}
          onChange={(e) => SetSearch(e.target.value.toLowerCase())}
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "58px",
            position: "absolute",
            right: 0,
          }}
          className="search-btn"
          onClick={clickHandler}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", p: "20", width: "100%" }}>
        <HorizontalExercisesbar />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
