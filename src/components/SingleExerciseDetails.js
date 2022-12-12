import { Stack, Typography, Button } from "@mui/material";
import bodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { useProvider } from "../Store/GeneralContext";
const SingleExerciseDetails = () => {
  const { singleExercise } = useProvider();
  const { bodyPart, gifUrl, name, target, equipment } = singleExercise;
  const extraDetails = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row", xs: "column" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you stong.
          <br />
          {name} is one of the best exercises targeting your {target} <br />
          It will help boost your energy
        </Typography>
        {extraDetails.map((item, i) => {
          return (
            <Stack key={i} direction="row" gap={4} alignItems="center">
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "100px",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img src={item.icon} alt={bodyPart} />
              </Button>
              <Typography variant="h5" textTransform="capitalize">
                {" "}
                {item.name}{" "}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SingleExerciseDetails;
