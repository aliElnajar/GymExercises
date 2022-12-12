import { Button, Grid, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { useProvider } from "../Store/GeneralContext";
import { Link } from "react-router-dom";
const HorizontalExercisesbar = () => {
  const { bodyParts: data, error } = useProvider();

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

  return (
    <Grid container gap={2}>
      {data.map((item) =>
        item === "neck" ? (
          ""
        ) : (
          <Grid
            item
            xs={3}
            md={1.5}
            key={item.id || item}
            title={item.id || item}
            itemID={item.id || item}
            m="0 40px"
          >
            <BodyPart item={item} />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default HorizontalExercisesbar;
