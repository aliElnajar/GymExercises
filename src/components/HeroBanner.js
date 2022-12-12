import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography color="error" variant="h6" fontWeight={600}>
        Fitness Club
      </Typography>
      <Typography
        variant="h4"
        color={"secondary "}
        sx={{ fontSize: { lg: "44px", xs: "40px" }, mb: "24px", mt: "30px" }}
      >
        Sweat,smile <br /> and repeat
      </Typography>
      <Typography variant="h6" lineHeight="36px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ p: "10px" }}
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1, display: { sx: "none", md: "block" } }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
