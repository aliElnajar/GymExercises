import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="12px">
        <img src={Logo} alt="footer-icon" widht="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="40px">
          Start today!
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
