import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { useProvider } from "../Store/GeneralContext";
const BodyPart = ({ item }) => {
  const { bodyPartChangeHandler, bodyPart } = useProvider();
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      
      sx={{
        borderTop: item === bodyPart ? "4px solid #ff2625" : "",
        bgcolor: "#fff",
        borderBottomLeftRadius: "20px",
        height: "280px",
        width: "270px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        bodyPartChangeHandler(item);
      }}
    >
      <img
        src={Icon}
        alt="dumb-icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        variant="h6"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
